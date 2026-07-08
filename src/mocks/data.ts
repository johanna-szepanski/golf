export const mockPlayers = [
  { id: "1", name: "Jordan Rose", score: -7 },
  { id: "2", name: "Avery Woods", score: -5 },
  { id: "3", name: "Riley Carter", score: -3 }
];

export const mockCoachReviews: Record<
  string,
  {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }[]
> = {
  "1": [
    {
      id: "r1",
      author: "Anders K.",
      rating: 5,
      comment:
        "Erik completely transformed my short game. Incredibly detailed feedback.",
      date: "2026-06-12"
    },
    {
      id: "r2",
      author: "Lisa M.",
      rating: 5,
      comment:
        "Best golf coach I've worked with. Patient and very knowledgeable.",
      date: "2026-05-30"
    },
    {
      id: "r3",
      author: "Johan P.",
      rating: 4,
      comment:
        "Great tips on putting. My handicap dropped 2 strokes in a month.",
      date: "2026-05-10"
    }
  ],
  "2": [
    {
      id: "r4",
      author: "Emma S.",
      rating: 5,
      comment:
        "Sofia's course strategy advice is exceptional. I think so much smarter on the course now.",
      date: "2026-06-20"
    },
    {
      id: "r5",
      author: "Peter H.",
      rating: 4,
      comment: "Really improved my driving consistency. Clear explanations.",
      date: "2026-06-01"
    },
    {
      id: "r6",
      author: "Anna L.",
      rating: 5,
      comment: "Structured and professional. Highly recommend.",
      date: "2026-04-18"
    }
  ],
  "3": [
    {
      id: "r7",
      author: "David R.",
      rating: 5,
      comment:
        "Marcus is on another level. His mental game coaching changed my entire approach.",
      date: "2026-07-01"
    },
    {
      id: "r8",
      author: "Claire B.",
      rating: 5,
      comment: "Fast delivery and incredibly insightful swing analysis.",
      date: "2026-06-25"
    },
    {
      id: "r9",
      author: "Tom N.",
      rating: 5,
      comment: "Worth every krona. My full swing has never felt this natural.",
      date: "2026-06-14"
    }
  ]
};

export const mockCoaches = [
  {
    id: "1",
    name: "Erik Lindström",
    photo: "https://i.pravatar.cc/150?img=11",
    speciality: "Short game & putting",
    handicap: 1,
    language: "Swedish, English",
    deliveryTime: "24h",
    price: 850,
    reviews: { rating: 4.9, count: 134 }
  },
  {
    id: "2",
    name: "Sofia Berglund",
    photo: "https://i.pravatar.cc/150?img=47",
    speciality: "Driving & course strategy",
    handicap: 2,
    language: "Swedish",
    deliveryTime: "48h",
    price: 700,
    reviews: { rating: 4.7, count: 89 }
  },
  {
    id: "3",
    name: "Marcus Webb",
    photo: "https://i.pravatar.cc/150?img=33",
    speciality: "Mental game & full swing",
    handicap: 0,
    language: "English",
    deliveryTime: "12h",
    price: 1100,
    reviews: { rating: 5.0, count: 212 }
  }
];
