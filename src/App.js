import "./App.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App grid-container">
      <div className="grid-item-header">
        <header className="header">헤더</header>
      </div>
      <div className="grid-item-main">
        <main className="main main-grid-container">
          <div className="main-grid-item-section-tag">
            <section className="main-section-tag">
              <div className="container-tag">
                <div className="tag">태그1</div>
                <div className="container-tag">
                  <div className="tag">태그2</div>
                </div>
                <div className="container-tag">
                  <div className="tag">태그3</div>
                </div>
                <div className="container-tag">
                  <div className="tag">태그4</div>
                </div>
                <div className="container-tag">
                  <div className="tag">태그5</div>
                </div>
                <div className="container-tag">
                  <div className="tag">태그6</div>
                </div>
              </div>
            </section>
          </div>
          <div className="main-grid-item-section-note">
            <section className="main-section-note main-section-note-grid-container">
              <div className="main-section-note-grid-item">
                <div className="container-note">
                  <div className="note">
                    <div className="container-note-subject">
                      <p className="note-subject">팬케이크</p>
                    </div>
                    <div className="container-note-content">
                      <p>
                        아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다. 하지만
                        그러지 말았어야 했다. 과유불급이었던 것이다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-section-note-grid-item">
                <div className="container-note">
                  <div className="note">
                    <div className="container-note-subject">
                      <p className="note-subject">팬케이크</p>
                    </div>
                    <div className="container-note-content">
                      <p>
                        아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다. 하지만
                        그러지 말았어야 했다. 과유불급이었던 것이다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-section-note-grid-item">
                <div className="container-note">
                  <div className="note">
                    <div className="container-note-subject">
                      <p className="note-subject">팬케이크</p>
                    </div>
                    <div className="container-note-content">
                      <p>
                        아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다. 하지만
                        그러지 말았어야 했다. 과유불급이었던 것이다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-section-note-grid-item">
                <div className="container-note">
                  <div className="note">
                    <div className="container-note-subject">
                      <p className="note-subject">팬케이크</p>
                    </div>
                    <div className="container-note-content">
                      <p>
                        아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다. 하지만
                        그러지 말았어야 했다. 과유불급이었던 것이다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-section-note-grid-item">
                <div className="container-note">
                  <div className="note">
                    <div className="container-note-subject">
                      <p className="note-subject">팬케이크</p>
                    </div>
                    <div className="container-note-content">
                      <p>
                        아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다. 하지만
                        그러지 말았어야 했다. 과유불급이었던 것이다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <footer id="grid-item-footer footer"></footer>
    </div>
  );
}

export default App;
