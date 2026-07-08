import { ScrollView, StyleSheet } from "react-native";
import { ScaledText } from "./lib/typography";

function App() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.content}
    >
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
  }
});

export default App;
