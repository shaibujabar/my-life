const notes = [
  { number: '01', title: 'Computer science', detail: 'A degree in making ideas work.', icon: '✳' },
  { number: '02', title: 'Singing', detail: 'My favorite way to fill a room.', icon: '♫' },
  { number: '03', title: 'Reading', detail: 'Always one more chapter.', icon: '▤' },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Back to top">
          <span className="wordmark-mark">a.</span>
          <span>THE PERSONAL PAGE</span>
        </a>
        <a className="top-link" href="#about">
          A little about me <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A HUMAN, IN A FEW WORDS</div>
          <h1 id="hero-title">
            Curious mind.
            <br />
            <span>Full heart.</span>
          </h1>
          <p className="intro">
            Hi, I’m someone who loves figuring out how things work—and finding a good song or story to get lost in.
          </p>
          <a className="primary-link" href="#about">
            Get to know me <ArrowIcon />
          </a>
          <div className="hero-footnote">
            <span className="footnote-line" />
            <span>SCROLL A LITTLE</span>
            <span aria-hidden="true">↓</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract illustration of a sun and rolling hills">
          <div className="art-stamp"><span>MADE OF</span><span> MANY THINGS</span><b>✳</b></div>
          <div className="sun" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hill hill-back" />
          <div className="hill hill-front" />
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✦</div>
          <div className="art-caption"><span>01 / 03</span><span>ALWAYS IN PROGRESS</span></div>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about-heading">
          <span className="section-label">A FEW THINGS I LOVE</span>
          <h2 id="about-title">A little bit of <em>logic,</em><br />a little bit of <em>magic.</em></h2>
        </div>
        <div className="about-content">
          <p className="about-copy">
            I’m a computer science graduate with a curious mind and a creative side. I love the feeling of solving a tricky problem almost as much as I love singing my favorite songs or turning the page on a really good book.
          </p>
          <div className="interest-list">
            {notes.map((note) => (
              <article className="interest" key={note.number}>
                <span className="interest-number">{note.number}</span>
                <span className="interest-icon" aria-hidden="true">{note.icon}</span>
                <div className="interest-text">
                  <h3>{note.title}</h3>
                  <p>{note.detail}</p>
                </div>
                <span className="interest-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>THAT’S ME, FOR NOW.</span>
        <span>MADE WITH A LITTLE CURIOSITY <b>✳</b></span>
      </footer>
    </main>
  );
}

export default App;
