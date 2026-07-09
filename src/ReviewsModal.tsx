import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View,
  ActivityIndicator
} from "react-native";
import { ScaledText } from "./lib/typography";
import { StyleSheet } from "react-native";
import type { Coach, Review } from "./types";

const modalStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16
  },
  sheet: {
    backgroundColor: "#0f2234",
    borderRadius: 16,
    width: "100%",
    maxWidth: 560,
    maxHeight: "80%",
    overflow: "hidden"
  },
  sheetNarrow: {
    maxWidth: "100%"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#1a3a5c"
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond",
    flex: 1
  },
  closeBtn: {
    padding: 12,
    marginLeft: 4,
    minWidth: 44,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  closeText: {
    color: "#7a9cbc",
    fontSize: 18
  },
  list: {
    padding: 16
  },
  reviewCard: {
    backgroundColor: "#1a3a5c",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    gap: 6
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  reviewAuthor: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  reviewRating: {
    fontSize: 12
  },
  reviewComment: {
    color: "#a0bcd8",
    fontSize: 13,
    fontFamily: "Cormorant Garamond",
    lineHeight: 20
  },
  reviewDate: {
    color: "#7a9cbc",
    fontSize: 12,
    fontFamily: "Cormorant Garamond"
  }
});

export function ReviewsModal({
  coach,
  onClose
}: {
  coach: Coach | null;
  onClose: () => void;
}) {
  const { width } = useWindowDimensions();
  const isNarrow = width < 600;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!coach) return;
    const controller = new AbortController();
    let isActive = true;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReviews([]);
    setLoading(true);

    fetch(`/api/coaches/${coach.id}/reviews`, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error("Network error");
        return r.json() as Promise<{ reviews: Review[] }>;
      })
      .then((data) => {
        if (isActive) setReviews(data?.reviews || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError" && isActive) {
          console.error("Failed to fetch reviews:", err);
          setReviews([]);
        }
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [coach]);

  return (
    <Modal
      visible={!!coach}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      accessibilityViewIsModal={true}
    >
      <Pressable
        style={modalStyles.backdrop}
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Close reviews dialog"
      >
        <Pressable
          style={[modalStyles.sheet, isNarrow && modalStyles.sheetNarrow]}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={modalStyles.header}>
            <ScaledText
              style={modalStyles.title}
              accessibilityRole="header"
            >
              Reviews for {coach?.name}
            </ScaledText>
            <Pressable
              onPress={onClose}
              style={modalStyles.closeBtn}
              accessibilityRole="button"
              accessibilityLabel="Close reviews"
            >
              <ScaledText style={modalStyles.closeText}>✕</ScaledText>
            </Pressable>
          </View>
          <ScrollView style={modalStyles.list}>
            {loading && (
              <ActivityIndicator
                color="#ffffff"
                style={{ marginTop: 24 }}
                accessibilityLabel="Loading reviews"
              />
            )}
            {reviews.map((r) => (
              <View
                key={r.id}
                style={modalStyles.reviewCard}
              >
                <View style={modalStyles.reviewHeader}>
                  <ScaledText style={modalStyles.reviewAuthor}>
                    {r.author}
                  </ScaledText>
                  <ScaledText
                    style={modalStyles.reviewRating}
                    accessibilityLabel={`${r.rating} out of 5 stars`}
                  >
                    {"⭐".repeat(r.rating)}
                  </ScaledText>
                </View>
                <ScaledText style={modalStyles.reviewComment}>
                  {r.comment}
                </ScaledText>
                <ScaledText style={modalStyles.reviewDate}>{r.date}</ScaledText>
              </View>
            ))}
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
