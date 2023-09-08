import "./styles.css";

function Home() {
  return (
    <section id="home">
      <p id="intro-text">
        Hi, I'm <span className="hover-color">Teyah</span>! I'm a
        <span className="hover-color"> software engineer</span> based in
        <span className="hover-color"> Manchester</span>.
      </p>
      <div
        style={{
          width: "50vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* canvas element */}
        <img src="src/assets/img/dev.png" />
      </div>
    </section>
  );
}

export default Home;
