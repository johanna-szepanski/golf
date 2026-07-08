import { Pressable, View, Image, StyleSheet } from "react-native";
import type { Coach } from "./types";
import { ScaledText } from "./lib/typography";

const cardStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#0f2234",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    padding: 16,
    gap: 14
  },
  photo: {
    width: 80,
    height: 110,
    borderRadius: 8
  },
  info: {
    flex: 1,
    gap: 4
  },
  name: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  speciality: {
    color: "#a0bcd8",
    fontSize: 13,
    fontFamily: "Cormorant Garamond"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap"
  },
  meta: {
    color: "#7a9cbc",
    fontSize: 12,
    fontFamily: "Cormorant Garamond"
  },
  reviewLink: {
    color: "#a8d4f5",
    textDecorationLine: "underline"
  },
  reviewLinkPressable: {
    minHeight: 44,
    justifyContent: "center",
    flex: 1
  },
  cardActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    gap: 8
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: "#a8d4f5"
  },
  selectBtn: {
    borderWidth: 1,
    borderColor: "#7a9cbc",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center"
  },
  selectBtnActive: {
    borderColor: "#a8d4f5",
    backgroundColor: "rgba(168, 212, 245, 0.15)"
  },
  selectText: {
    color: "#7a9cbc",
    fontSize: 13,
    fontFamily: "Cormorant Garamond"
  },
  selectTextActive: {
    color: "#a8d4f5"
  },
  dot: {
    color: "#4a6a8a",
    fontSize: 12
  },
  price: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond",
    marginTop: 4
  }
});

export const CoachCard = ({
  coach,
  isSelected,
  onSelect,
  onReviewsPress
}: {
  coach: Coach;
  isSelected: boolean;
  onSelect: (coach: Coach) => void;
  onReviewsPress: (coach: Coach) => void;
}) => (
  <View style={[cardStyles.card, isSelected && cardStyles.cardSelected]}>
    <Image
      source={{ uri: coach.photo }}
      style={cardStyles.photo}
      accessibilityLabel={`Portrait of ${coach.name}`}
      accessibilityRole="image"
    />
    <View style={cardStyles.info}>
      <View
        accessible={true}
        accessibilityLabel={[
          coach.name,
          coach.speciality,
          `Handicap ${coach.handicap}`,
          `Language ${coach.language}`,
          `Delivery time ${coach.deliveryTime}`,
          `Price ${coach.price} kronor`
        ].join(". ")}
      >
        <ScaledText style={cardStyles.name}>{coach.name}</ScaledText>
        <ScaledText style={cardStyles.speciality}>
          {coach.speciality}
        </ScaledText>
        <View style={cardStyles.row}>
          <ScaledText style={cardStyles.meta}>HCP {coach.handicap}</ScaledText>
          <ScaledText
            style={cardStyles.dot}
            accessible={false}
          >
            ·
          </ScaledText>
          <ScaledText style={cardStyles.meta}>{coach.language}</ScaledText>
        </View>
        <View style={cardStyles.row}>
          <ScaledText
            style={cardStyles.meta}
            accessibilityLabel={`Delivery time ${coach.deliveryTime}`}
          >
            ⏱ {coach.deliveryTime}
          </ScaledText>
        </View>
        <ScaledText
          style={cardStyles.price}
          accessibilityLabel={`Price ${coach.price} kronor`}
        >
          {coach.price} kr
        </ScaledText>
      </View>
      <View style={cardStyles.cardActions}>
        <Pressable
          onPress={() => onReviewsPress(coach)}
          accessibilityRole="button"
          accessibilityLabel={`${coach.reviews.count} reviews, ${coach.reviews.rating} out of 5 stars`}
          style={cardStyles.reviewLinkPressable}
        >
          <ScaledText style={[cardStyles.meta, cardStyles.reviewLink]}>
            ⭐ {coach.reviews.rating} ({coach.reviews.count} reviews)
          </ScaledText>
        </Pressable>
        <Pressable
          onPress={() => onSelect(coach)}
          accessibilityRole="radio"
          accessibilityState={{ checked: isSelected }}
          accessibilityLabel={
            isSelected ? `${coach.name} selected` : `Select ${coach.name}`
          }
          style={[
            cardStyles.selectBtn,
            isSelected && cardStyles.selectBtnActive
          ]}
        >
          <ScaledText
            style={[
              cardStyles.selectText,
              isSelected && cardStyles.selectTextActive
            ]}
          >
            {isSelected ? "Selected" : "Select"}
          </ScaledText>
        </Pressable>
      </View>
    </View>
  </View>
);
