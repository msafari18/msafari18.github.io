export const siteConfig = {
  title: "Monireh Safari",
  shortTitle: "Monireh",
  description:
    "PhD candidate in Computer Science at the University of Waterloo, researching DNA foundation models, representation learning, and computational genomics.",
  url: "https://msafari18.github.io",
  email: "m4safari@uwaterloo.ca",
  image: "/images/bio-photo.jpeg",
  author: {
    name: "Monireh Safari",
    jobTitle: "PhD Candidate",
    organization: {
      name: "University of Waterloo",
      url: "https://uwaterloo.ca",
    },
    lab: {
      name: "Kari Genomics Lab",
      url: "https://cs.uwaterloo.ca/~lila/",
    },
    supervisor: {
      name: "Lila Kari",
      url: "https://cs.uwaterloo.ca/~lila/",
    },
    alumniOf: [
      { name: "Sharif University of Technology", url: "https://www.sharif.edu" },
      { name: "Amirkabir University of Technology", url: "https://www.aut.ac.ir" },
    ],
  },
  social: {
    github: "msafari18",
    linkedin: "monireh-safari",
    scholar: "https://scholar.google.com/citations?user=KIlvvosAAAAJ&hl=en",
  },
  topics: {
    "DNA Foundation Models": {
      color: "var(--color-topic-privacy)",
    },
    "Representation Learning": {
      color: "var(--color-topic-watermark)",
    },
    "ML in genomics": {
      color: "var(--color-topic-genomics)",
    },
    "ML in Oncology": {
      color: "var(--color-topic-oncology)",
    },
  },
} as const;
