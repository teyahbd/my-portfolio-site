import "./styles.css";

function Home() {
  return (
    <section>
      <p>
        Hi, I'm <span>Teyah</span>! I'm a <span>software engineer</span> based
        in <span>Manchester</span>.
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
