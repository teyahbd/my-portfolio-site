import "./styles.css";

function Home() {
  return (
    <section id="home">
      {/* canvas element */}
      <div id="image-container">
        <img src="src/assets/img/digital-nomad.png" />
      </div>
      <div className="intro-text-container">
        <p className="intro-text big-text">
          Hi, I'm <span className="hover-color">Teyah</span>!
        </p>
        <p className="intro-text">
          I'm a<span className="hover-color"> software engineer</span> based in
          <span className="hover-color"> Manchester</span>.
        </p>
      </div>
    </section>
  );
}

export default Home;
