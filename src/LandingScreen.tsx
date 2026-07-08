import { ScaledText } from "./lib/typography";

export const LandingScreen = () => {
  return (
    <>
      <ScaledText
        style={{
          fontSize: 24,
          fontWeight: "500",
          paddingTop: 32,
          paddingBottom: 16,
          color: "white"
        }}
      >
        Welcome to Golf Coach Booking App
      </ScaledText>
      <ScaledText
        style={{
          fontSize: 16,
          textAlign: "center",
          paddingHorizontal: 16,
          paddingBottom: 32,
          color: "white"
        }}
      >
        Book a golf coach for personalized lessons and improve your game!
      </ScaledText>
    </>
  );
};
