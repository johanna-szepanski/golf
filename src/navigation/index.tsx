import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingScreen } from "../LandingScreen";
import { BookCoach } from "../BookCoach";

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingScreen />}
        />
        <Route
          path="/book-coach"
          element={<BookCoach />}
        />
      </Routes>
    </BrowserRouter>
  );
}
