import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions
} from "react-native";
import { ScaledText } from "./lib/typography";
import { getDeviceKind } from "./lib/device";
import { Stepper } from "./Stepper";
import { ReviewsModal } from "./ReviewsModal";
import type { Coach } from "./types";
import { CoachCard } from "./CoachCard";
import type { HelpTopic } from "./types";
import { HelpWithStep } from "./HelpWithStep";
import { PaymentStep } from "./PaymentStep";
import { StartSessionStep } from "./StartSessionStep";

function App() {
  const { width } = useWindowDimensions();
  const deviceKind = getDeviceKind(width);
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [bookedCoach, setBookedCoach] = useState<Coach | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [helpTopic, setHelpTopic] = useState<HelpTopic | null>(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("/api/coaches")
      .then((r) => r.json() as Promise<{ coaches: Coach[] }>)
      .then((data) => setCoaches(data.coaches))
      .finally(() => setLoading(false));
  }, []);

  function handleSelectCoach(coach: Coach) {
    setBookedCoach(coach);
    setCurrentStep(1);
  }

  function handleChangeCoach() {
    setBookedCoach(null);
    setCurrentStep(0);
  }

  function handleNextToPayment() {
    setCurrentStep(2);
  }

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.content}
    >
      <View
        style={[styles.inner, deviceKind === "desktop" && styles.innerDesktop]}
      >
        <Stepper
          current={currentStep}
          deviceKind={deviceKind}
        />

        {currentStep === 0 && (
          <>
            {deviceKind !== "phone" && (
              <ScaledText
                style={styles.formHeading}
                accessibilityRole="header"
              >
                Select a coach
              </ScaledText>
            )}
            <View
              accessibilityRole="radiogroup"
              accessibilityLabel="Available coaches"
            >
              {loading && (
                <ActivityIndicator
                  color="#ffffff"
                  style={{ marginTop: 32 }}
                  accessibilityLabel="Loading coaches"
                />
              )}
              {coaches.map((coach) => (
                <CoachCard
                  key={coach.id}
                  coach={coach}
                  isSelected={bookedCoach?.id === coach.id}
                  onSelect={handleSelectCoach}
                  onReviewsPress={setSelectedCoach}
                />
              ))}
            </View>
          </>
        )}

        {currentStep === 1 && bookedCoach && (
          <HelpWithStep
            coach={bookedCoach}
            topic={helpTopic}
            description={description}
            onTopicChange={setHelpTopic}
            onDescriptionChange={setDescription}
            onChangeCoach={handleChangeCoach}
            onNext={handleNextToPayment}
          />
        )}

        {currentStep === 2 && bookedCoach && helpTopic && (
          <PaymentStep
            coach={bookedCoach}
            topic={helpTopic}
            description={description}
            onPay={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && bookedCoach && (
          <StartSessionStep
            coach={bookedCoach}
            onStart={() => {
              /* TODO: launch session */
            }}
          />
        )}
      </View>
      <ReviewsModal
        coach={selectedCoach}
        onClose={() => setSelectedCoach(null)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1a3a5c"
  },
  content: {
    alignItems: "center",
    paddingBottom: 32
  },
  inner: {
    width: "100%"
  },
  innerDesktop: {
    maxWidth: 700
  },
  formHeading: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4
  }
});

export default App;
