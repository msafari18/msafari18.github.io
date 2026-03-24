export const siteConfig = {
  title: "Abdulrahman Diaa",
  description:
    "PhD student researching watermarking, privacy-preserving machine learning, and encrypted computation at the University of Waterloo.",
  url: "https://abdulrahmandiaa.ca",
  email: "a2diaa@uwaterloo.ca",
  image: "/images/bio-photo.jpeg",
  author: {
    name: "Abdulrahman Diaa",
    jobTitle: "PhD Student",
    organization: {
      name: "University of Waterloo",
      url: "https://uwaterloo.ca",
    },
    lab: {
      name: "Cryptography, Security, and Privacy (CrySP)",
      url: "https://crysp.uwaterloo.ca",
    },
    supervisor: {
      name: "Florian Kerschbaum",
      url: "https://cs.uwaterloo.ca/~fkerschb/",
    },
    alumniOf: [
      { name: "University of Waterloo", url: "https://uwaterloo.ca" },
      {
        name: "The American University in Cairo",
        url: "https://www.aucegypt.edu",
      },
    ],
  },
  social: {
    github: "https://github.com/D-Diaa",
    linkedin: "https://www.linkedin.com/in/abdulrahman-diaa-555300126/",
    scholar: "https://scholar.google.com/citations?user=xFX1k1AAAAAJ",
  },
  knowsAbout: [
    "Watermarking",
    "AI-generated content",
    "Digital trust",
    "Content provenance",
    "Privacy-preserving machine-learning",
    "Cryptography",
    "Differential privacy",
    "Fully-homomorphic encryption",
  ],
} as const;
