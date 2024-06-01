export interface ProjectFields {
  name?: string;
  description?: string;
  links: LinkType[];
  year?: number;
  stack?: string[];
  order: number;
  title: TitleType;
  isMajor: boolean;
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
        "A data analytics dashboard powered by Python ETL pipelines including natural language processing with SpaCy. The data processing pipelines are hosted in Azure using Azure Cloud Functions with data stored in an Azure Postgres database. All infrastructure deployed as IaC using Terraform.",
      stack: ["Azure", "Python", "CI/CD", "Terraform"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/beaver-factory/bootcamp_benchmark",
        },
      ],
      year: 2023,
      order: 1,
      isMajor: true,
    },
    {
      title: {
        name: "My Gorgeous Portfolio Site",
        icon: "fa-solid fa-folder-open",
      },
      description:
        "This site was built with React and TypeScript to showcase my ever-growing list of projects!",
      stack: ["TypeScript", "React", "JavaScript"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/teyahbd/my-portfolio-site",
        },
        {
          name: "Portfolio Site",
          link: "https://heyateyah.com",
        },
      ],
      year: 2023,
      order: 2,
      isMajor: false,
    },
    {
      title: {
        name: "Santa's Little Helper",
        icon: "fa-solid fa-gift",
      },
      description:
        "A Python Flask API that returns related keywords using a Word2Vec NLP model custom-trained on eCommerce vocabulary. This API powers Santa's Little Helper - a React Native app that helps you find the perfect Christmas present using a swipe mechanism and machine learning.",
      stack: ["Python", "NLP", "REST API"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/teyahbd/ecommerce-keyword-api",
        },
        {
          name: "Project Page",
          link: "https://northcoders.com/projects/nov-2022/santas-little-helper",
        },
      ],
      year: 2022,
      order: 4,
      isMajor: true,
    },
    {
      title: {
        name: "Board Game Review Site",
        icon: "fa-solid fa-dice",
      },
      description:
        "A React board game review site that allows users to read reviews, post comments and vote! Built on the front end with Javascript and HTML and CSS and powered on the back end by a Node Express API and a PostgreSQL database.",
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
          name: "Front End GitHub",
          link: "https://github.com/teyahbd/nc-games-reviews",
        },
        {
          name: "Review Site",
          link: "https://nc-board-game-reviews.netlify.app/",
        },
        {
          name: "Back End GitHub",
          link: "https://github.com/teyahbd/nc-games-reviews-api",
        },
        {
          name: "API Docs",
          link: "https://nc-games-reviews.onrender.com/",
        },
      ],
      year: 2022,
      order: 8,
      isMajor: true,
    },

    {
      title: {
        name: "NC Shares",
        icon: "fa-solid fa-chart-line",
      },
      description:
        "A Python app providing weekly updates on the performance of a share price chosen by the user, with both email and Slack notifications.",
      stack: ["Python", "Poetry"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/beaver-factory/share-price",
        },
      ],
      year: 2023,
      order: 5,
      isMajor: false,
    },
    {
      title: {
        name: "Snake Case API",
        icon: "fa-brands fa-docker",
      },
      description:
        "A simple, snake-casing HTTP server built using Bun, TypeScript and containerised with Docker.",
      stack: ["Docker", "REST API", "Bun", "TypeScript"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/teyahbd/bun-http-server-docker",
        },
      ],
      year: 2023,
      order: 6,
      isMajor: false,
    },
    {
      title: {
        name: "Rover UI",
        icon: "fa-solid fa-rocket",
      },
      description:
        "A UI displaying photos of Mars from the NASA rover API built in Vue and TypeScript featuring GitHub Actions CI/CD.",
      stack: ["Vue", "TypeScript", "JavaScript", "CI/CD", "GitHub Actions"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/beaver-factory/rover-ui",
        },
        {
          name: "Rover UI",
          link: "https://beaver-factory.github.io/rover-ui/",
        },
      ],
      year: 2023,
      order: 3,
      isMajor: false,
    },
    {
      title: {
        name: "Nanoindentation ANSYS Model",
        icon: "fa-solid fa-flask",
      },
      description:
        "An Ansys computational model of lab-based nanoindentation experiments used to successfully calculate bending to indentating ratios of collagen.",
      stack: ["ansys"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/teyahbd/nanoindentation-modelling",
        },
      ],
      year: 2021,
      order: 9,
      isMajor: false,
    },
    {
      title: {
        name: "Numerical Modelling",
        icon: "fa-solid fa-square-root-variable",
      },
      description:
        "A numerical modelling project exploring simulated annealing, image compression and modelling differential equations in Python via Jupyter Notebook.",
      stack: ["python"],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/teyahbd/numerical-modelling-in-python",
        },
      ],
      year: 2019,
      order: 10,
      isMajor: false,
    },
  ];
  return projects;
};
