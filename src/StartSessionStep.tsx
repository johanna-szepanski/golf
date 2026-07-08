import { View, Pressable, StyleSheet } from "react-native";
import type { Coach } from "./types";
import { ScaledText } from "./lib/typography";

const startStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 48,
    gap: 16
  },
  iconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0f2234",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  icon: {
    fontSize: 40
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond",
    textAlign: "center"
  },
  subtitle: {
    color: "#a0bcd8",
    fontSize: 15,
    fontFamily: "Cormorant Garamond",
    textAlign: "center"
  },
  btn: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    minHeight: 52,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16
  },
  btnText: {
    color: "#1a3a5c",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  }
});

export const StartSessionStep = ({
  coach,
  onStart
}: {
  coach: Coach;
  onStart: () => void;
}) => (
  <View style={startStyles.container}>
    <View
      style={startStyles.iconWrap}
      accessible={false}
    >
      <ScaledText style={startStyles.icon}>⛳</ScaledText>
    </View>
    <ScaledText
      style={startStyles.title}
      accessibilityRole="header"
    >
      You’re ready to go!
    </ScaledText>
    <ScaledText style={startStyles.subtitle}>
      Din session med {coach.name} är bokad.
    </ScaledText>
    <Pressable
      style={startStyles.btn}
      onPress={onStart}
      accessibilityRole="button"
      accessibilityLabel="Starta sessionen"
    >
      <ScaledText style={startStyles.btnText}>Start session</ScaledText>
    </Pressable>
  </View>
);
