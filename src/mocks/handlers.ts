import { http, HttpResponse } from "msw";
import { mockCoachReviews, mockCoaches, mockPlayers } from "./data";

export const handlers = [
  http.get("/api/players", () => {
    return HttpResponse.json({ players: mockPlayers });
  }),
  http.get("/api/coaches", () => {
    return HttpResponse.json({ coaches: mockCoaches });
  }),
  http.get("/api/coaches/:id/reviews", ({ params }) => {
    const reviews = mockCoachReviews[params.id as string] ?? [];
    return HttpResponse.json({ reviews });
  })
];
