import "./App.scss";

function App() {

  return (
    <main>
      <header>
        <label htmlFor="toggle-nav">
          <div className="button">X</div>
        </label>
      </header>
      <input type="checkbox" id="toggle-nav" />
      <nav></nav>
      <section>
        <div className="first">
          <div className="one">
            <div className="two"></div>
            <div className="two"></div>
          </div>
          <div className="one">
            <div className="two"></div>
            <div className="two"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
