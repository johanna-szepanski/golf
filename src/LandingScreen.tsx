import { Pressable } from "react-native";
import { useNavigate } from "react-router-dom";
import { ScaledText } from "./lib/typography";

export const LandingScreen = () => {
  const navigate = useNavigate();
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
      <Pressable
        onPress={() => navigate("/book-coach")}
        style={{
          backgroundColor: "#ffffff",
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 8
        }}
      >
        <ScaledText
          style={{
            color: "#1a3a5c",
            fontSize: 18,
            fontWeight: "500"
          }}
        >
          Book a Coach
        </ScaledText>
      </Pressable>
    </>
  );
};
