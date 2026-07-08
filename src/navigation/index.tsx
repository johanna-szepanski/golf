import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { BookCoach } from "../BookCoach";

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/book-coach"
          element={<BookCoach />}
        />
      </Routes>
    </BrowserRouter>
  );
}
