import logo from "./logo.svg";
import "./App.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="app grid-container">
      <header className="grid-item-header">
        <Header></Header>
      </header>
      <main className="grid-item-main main-grid-container">
        <div className="main-grid-item-section-tag">
          <section className="main-section-tag">
            <div className="container-tag">
              <div className="tag">태그1</div>
              <div className="tag">태그2</div>
              <div className="tag">태그3</div>
              <div className="tag">태그4</div>
              <div className="tag">태그5</div>
              <div className="tag">태그6</div>
            </div>
          </section>
        </div>
        <div className="main-grid-item-section-note">
          <section className="main-section-note">
            <div className="container-note">
              <div className="note">노트1</div>
              <div className="note">노트2</div>
              <div className="note">노트3</div>
              <div className="note">노트4</div>
              <div className="note">노트5</div>
              <div className="note">노트6</div>
            </div>
          </section>
        </div>
      </main>
      <footer className="grid-item-footer">푸터</footer>
    </div>
  );
}

function Header() {
  return (
    <>
      <header>헤더</header>
    </>
  );
}

export default App;
