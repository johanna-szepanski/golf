import { ScrollView, StyleSheet } from "react-native";
import { Navigation } from "./navigation";

function App() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.content}
    >
      <Navigation />
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
