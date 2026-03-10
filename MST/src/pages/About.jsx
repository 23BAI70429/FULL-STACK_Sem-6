function About() {
  return (
    <div className="container about">

      <h1>About This Project</h1>

      <p>
        This project demonstrates how React Router enables
        navigation between pages in a Single Page Application.
        The content changes dynamically without refreshing
        the browser.
      </p>

      <div className="tech-stack">

        <div className="tech">React</div>
        <div className="tech">React Router</div>
        <div className="tech">Vite</div>
        <div className="tech">JavaScript</div>

      </div>

    </div>
  );
}

export default About;