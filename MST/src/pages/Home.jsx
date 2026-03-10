function Home() {
  return (
    <div>

      <section className="hero">
        <h1>Learn React Routing Easily</h1>
        <p>
          This project demonstrates navigation between pages
          using React Router without refreshing the browser.
        </p>
        <button>Get Started</button>
      </section>

      <div className="container">

        <section className="features">

          <div className="card">
            <h3>⚡ Fast Navigation</h3>
            <p>React Router allows instant page switching.</p>
          </div>

          <div className="card">
            <h3>📦 Component Based</h3>
            <p>Each page is built as a reusable React component.</p>
          </div>

          <div className="card">
            <h3>🚀 Modern Stack</h3>
            <p>Built using React, Vite and React Router.</p>
          </div>

        </section>

      </div>

    </div>
  );
}

export default Home;