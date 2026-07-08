export type Review = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export type Coach = {
  id: string;
  name: string;
  photo: string;
  speciality: string;
  handicap: number;
  language: string;
  deliveryTime: string;
  price: number;
  reviews: { rating: number; count: number };
};

export const HELP_TOPICS = [
  "Slice",
  "Hook",
  "Duffar",
  "Toppar",
  "Driver",
  "Järnspel",
  "Närspel",
  "Puttning"
] as const;
export type HelpTopic = (typeof HELP_TOPICS)[number];
