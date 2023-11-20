export interface ProjectFields {
  name?: string;
  description?: string;
  hosted_link?: string;
  repo_link?: string;
  year?: number;
  stack?: string[];
  order: number;
}

export const getProjects = (): ProjectFields[] => {
  const projects: ProjectFields[] = [
    {
      name: "Bootcamp Benchmark",
      description:
        "Collaborated with a small team to build an analytics dashboard served by data pipelines hosted in Azure.",
      stack: ["Azure", "Python", "CI/CD", "Terraform"],
      repo_link: "https://github.com/beaver-factory/bootcamp_benchmark",
      hosted_link: "",
      year: 2023,
      order: 1,
    },
    {
      name: "This Portfolio Site!",
      description:
        "This site was built with React and TypeScript to showcase my ever-growing list of projects!",
      stack: ["TypeScript", "React", "JavaScript"],
      repo_link: "https://github.com/teyahbd/my-portfolio-site",
      hosted_link: "https://heyateyah.com",
      year: 2023,
      order: 2,
    },
    {
      name: "Rover UI",
      description:
        "Team project to build a UI for the NASA rover API to learn the tech stack for a client.",
      stack: ["Vue", "TypeScript", "JavaScript", "CI/CD", "GitHub Actions"],
      repo_link: "https://github.com/beaver-factory/rover-ui",
      hosted_link: "https://beaver-factory.github.io/rover-ui/",
      year: 2023,
      order: 3,
    },
    {
      name: "Word Recommendation API",
      description:
        "Flask API that returns related keywords using a Word2Vec model custom-trained on eCommerce vocabulary for a present recommendation app.",
      stack: ["Python", "NLP", "REST API"],
      repo_link: "https://github.com/teyahbd/ecommerce-keyword-api",
      hosted_link: "",
      year: 2022,
      order: 4,
    },
    {
      name: "NC Shares",
      description:
        "An app providing weekly updates on the performance of a share price chosen by the user.",
      stack: ["Python"],
      repo_link: "https://github.com/beaver-factory/share-price",
      hosted_link: "",
      year: undefined,
      order: 5,
    },
    {
      name: "Snake Case API",
      description:
        "A simple HTTP server built using bun and containerised with Docker.",
      stack: ["Docker", "REST API", "Python"],
      repo_link: "https://github.com/teyahbd/bun-http-server-docker",
      hosted_link: "",
      year: undefined,
      order: 6,
    },
    {
      name: "Board Game Review Site API",
      description:
        "Express API and Postgres database serve a board game review site.",
      stack: ["JavaScript", "REST API", "SQL", "PostgreSQL"],
      repo_link: "https://github.com/teyahbd/nc-games-reviews-api",
      hosted_link: "https://nc-games-reviews.onrender.com/",
      year: 2022,
      order: 7,
    },
    {
      name: "Board Game Review Site",
      description:
        "React review site that allows users to read reviews, post comments and vote!",
      stack: ["JavaScript", "React"],
      repo_link: "https://github.com/teyahbd/nc-games-reviews",
      hosted_link: "https://nc-board-game-reviews.netlify.app/",
      year: 2022,
      order: 8,
    },
    {
      name: "Nanoindentation ANSYS Model",
      description:
        "Ansys model of lab-based nanoindentation experiments which successfully provided indentation ratio to improve accuracy of future experiments.",
      stack: ["Ansys", "Computational Modelling"],
      repo_link: "",
      hosted_link: "",
      year: 2021,
      order: 9,
    },
    {
      name: "Numerical Modelling",
      description:
        "Exploration of simulated annealing, image compression and physical modelling with differential equations in Python using numerical computation methods.",
      stack: ["Python", "Computational Modelling"],
      repo_link: "",
      hosted_link: "",
      year: 2019,
      order: 10,
    },
  ];
  return projects;
};
