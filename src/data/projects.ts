export interface ProjectFields {
  name?: string;
  description?: string;
  links: LinkType[];
  year?: number;
  stack?: string[];
  order: number;
  title: TitleType;
  imagePaths?: string[];
}

export interface LinkType {
  name: string;
  link: string;
}

export interface TitleType {
  name: string;
  icon: string;
}

export const getProjects = (): ProjectFields[] => {
  const projects: ProjectFields[] = [
    {
      title: {
        name: "Bootcamp Benchmark",
        icon: "fa-solid fa-chart-pie",
      },
      description:
        "Collaborated with a small team to build an analytics dashboard served by data pipelines hosted in Azure.",
      stack: ["Azure", "Python", "CI/CD", "Terraform"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/beaver-factory/bootcamp_benchmark",
        },
      ],
      year: 2023,
      order: 1,
    },
    // {
    //   title: {
    //     name: "My gorgeous portfolio site",
    //     icon: "fa-solid fa-folder-open",
    //   },
    //   description:
    //     "This site was built with React and TypeScript to showcase my ever-growing list of projects!",
    //   stack: ["TypeScript", "React", "JavaScript"],
    //   links: [
    //     {
    //       name: "GitHub",
    //       link: "https://github.com/teyahbd/my-portfolio-site",
    //     },
    //     {
    //       name: "Portfolio Site",
    //       link: "https://heyateyah.com",
    //     },
    //   ],
    //   year: 2023,
    //   order: 2,
    // },
    {
      title: {
        name: "Word Recommendation API",
        icon: "fa-solid fa-gift",
      },
      description:
        "Flask API that returns related keywords using a Word2Vec model custom-trained on eCommerce vocabulary for a present recommendation app. Call this Santa's Little Helper",
      stack: ["Python", "NLP", "REST API"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/teyahbd/ecommerce-keyword-api",
        },
        {
          name: "Project page",
          link: "",
        },
      ],
      year: 2022,
      order: 4,
    },
    {
      title: {
        name: "Board Game Review Site",
        icon: "fa-solid fa-dice",
      },
      description:
        "Full stack application. React review site that allows users to read reviews, post comments and vote! Built with Javascript and HTML and CSS. Express API and Postgres database serve a board game review site.",
      stack: [
        "javascript",
        "react",
        "html",
        "css",
        "JavaScript",
        "REST API",
        "SQL",
        "PostgreSQL",
      ],
      links: [
        {
          name: "Frontend GitHub repo",
          link: "https://github.com/teyahbd/nc-games-reviews",
        },
        {
          name: "Review Site",
          link: "https://nc-board-game-reviews.netlify.app/",
        },
        {
          name: "Backend GitHub",
          link: "https://github.com/teyahbd/nc-games-reviews-api",
        },
        {
          name: "API Docs",
          link: "https://nc-games-reviews.onrender.com/",
        },
      ],
      year: 2022,
      order: 8,
    },
    // {
    //   title: {
    //     name: "Rover UI",
    //     icon: "fa-solid fa-rocket",
    //   },
    //   description:
    //     "Team project to build a UI for the NASA rover API to learn the tech stack for a client.",
    //   stack: ["Vue", "TypeScript", "JavaScript", "CI/CD", "GitHub Actions"],
    //   links: [
    //     {
    //       name: "GitHub",
    //       link: "https://github.com/beaver-factory/rover-ui",
    //     },
    //     {
    //       name: "Rover UI",
    //       link: "https://beaver-factory.github.io/rover-ui/",
    //     },
    //   ],
    //   year: 2023,
    //   order: 3,
    // },
    // {
    //   title: {
    //     name: "NC Shares",
    //     icon: "fa-solid fa-chart-line",
    //   },
    //   description:
    //     "An app providing weekly updates on the performance of a share price chosen by the user.",
    //   stack: ["Python"],
    //   links: [
    //     {
    //       name: "GitHub",
    //       link: "https://github.com/beaver-factory/share-price",
    //     },
    //   ],
    //   year: undefined,
    //   order: 5,
    // },
    // {
    //   title: {
    //     name: "Snake Case API",
    //     icon: "fa-brands fa-docker",
    //   },
    //   description:
    //     "A simple HTTP server built using bun and containerised with Docker.",
    //   stack: ["Docker", "REST API", "Python"],
    //   links: [
    //     {
    //       name: "GitHub",
    //       link: "https://github.com/teyahbd/bun-http-server-docker",
    //     },
    //   ],
    //   year: undefined,
    //   order: 6,
    // },
    {
      title: {
        name: "Nanoindentation ANSYS Model",
        icon: "fa-solid fa-flask",
      },
      description:
        "Ansys model of lab-based nanoindentation experiments which successfully provided indentation ratio to improve accuracy of future experiments.",
      stack: ["ansys"],
      links: [],
      year: 2021,
      order: 9,
    },
    {
      title: {
        name: "Numerical Modelling",
        icon: "fa-solid fa-square-root-variable",
      },
      description:
        "A numerical modelling project exploring simulated annealing, image compression and physical modelling using differential equations in Python and Jupyter Notebook.",
      stack: ["python"],
      links: [],
      year: 2019,
      order: 10,
      imagePaths: [
        "../../../data/project_images.map1.png",
        "../../../data/project_images.map2.png",
        "../../../data/project_images.map3.png",
        "../../../data/project_images.map4.png",
      ],
    },
  ];
  return projects;
};
