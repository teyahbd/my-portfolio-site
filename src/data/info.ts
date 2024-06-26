export interface Info {
  name: string | undefined;
  job_title: string | undefined;
  linkedin_profile_url: string | undefined;
  github_profile_url: string | undefined;
  email: string | undefined;
}

export const getInfo = (): Info => {
  const info = {
    name: "Teyah Brennen-Davies",
    job_title: "Software Engineer",
    email: "heya@heyateyah.com",
    github_profile_url: "https://github.com/teyahbd",
    linkedin_profile_url: "https://www.linkedin.com/in/teyahbd",
  };
  return info;
};
