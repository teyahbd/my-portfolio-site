import "./styles.css";
function Projects() {
  return (
    <section id="projects">
      <div className="card-row">
        <div className="test-project">
          <h3>Bootcamp Benchmark</h3>
          <p>Here's a little description of what bootcamp benchmark does.</p>
          <p>Azure, Terraform</p>
          <p>Github</p>
        </div>
        <div className="test-project">
          <div className="test-project">
            <h3>Bootcamp Benchmark</h3>
            <p>Here's a little description of what bootcamp benchmark does.</p>
            <p>Azure, Terraform</p>
            <p>Github</p>
          </div>
        </div>
        <div className="test-project">
          <div className="test-project">
            <h3>Bootcamp Benchmark</h3>
            <p>Here's a little description of what bootcamp benchmark does.</p>
            <p>Azure, Terraform</p>
            <p>Github</p>
          </div>
        </div>
        <div id="project-title-container">
          <h2>My Projects</h2>
          <div id="icon-container">
            <span className="fa-solid fa-code"></span>
            <span className="fa-solid fa-cloud"></span>
            <span className="fa-solid fa-atom"></span>
          </div>
          <p>Here's a little cute sentence about my projects.</p>
        </div>
      </div>
      <div className="card-row">
        <div className="test-project"></div>
        <div className="test-project"></div>
        <div className="test-project"></div>
        <div className="test-project"></div>
      </div>
    </section>
  );
}

export default Projects;
