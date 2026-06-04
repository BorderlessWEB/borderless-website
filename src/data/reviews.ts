export interface Review {
  name: string;
  role: string;
  photo: string;
  shortText: string;
  fullText: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    name: "Peter Chernyshov",
    role: "Ex-head of Kyivstar, Carlsberg. Forbes TOP-3 manager",
    photo: "/images/reviews/peter.png",
    shortText: "I was choosing between several companies, but settled on Migronis. The competence and speed of answers played a key role.",
    fullText: "I was choosing between several companies, but settled on Migronis. For me, the competence and speed of answers to my questions played a key role, and not only during working hours. It feels like the company is working for the result. Recommend!",
    stars: 5,
  },
  {
    name: "Boris Bondar",
    role: "Representative of Logstor. Industrial equipment supplier",
    photo: "/images/reviews/boris.png",
    shortText: "The process went smoothly and almost without my involvement. Several employees worked on my case at once.",
    fullText: "Migronis has the \"pay-on-delivery\" payment option. I've chosen this company because of this approach. The process itself went smoothly and almost without my involvement, several employees worked on my case at once. I've been receiving regular updates stating at what stage we are. All documents were filled out by their lawyers, I just checked and signed them. In general, I'm satisfied with their work and definitely recommend Migronis to my friends and business partners.",
    stars: 5,
  },
  {
    name: "Vladislav Shabanov",
    role: "Managing partner of WhitePark Capital",
    photo: "/images/reviews/vladislav.png",
    shortText: "Excellent service, operational work, the competence of the team — everything is at its highest level.",
    fullText: "Excellent service, operational work, the competence of the team — everything is at its highest level. The Migronis team helped us to decide on the country in the shortest possible time by answering the huge number of questions that we had regarding our field of work. We paid for their services only after we received the result we wanted!",
    stars: 5,
  },
  {
    name: "Dr Bola Afolabi",
    role: "PhD, President of Canal International. Oil & Gas expert",
    photo: "/images/reviews/bola.png",
    shortText: "The company has proven to be a quality organization. They touched my matter in a very professional manner.",
    fullText: "For me, quality is special in my life. I love quality. The company has proven to be a quality organization. I certainly would recommend them because they touched my matter in a very professional and efficient manner.",
    stars: 5,
  },
];
