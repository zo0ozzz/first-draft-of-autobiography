import logo from "./logo.svg";
import "./App.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item-header">
        <div className="container-header">
          <header id="header">헤더</header>
        </div>
      </div>
      <div className="grid-item-main">
        <div className="container-main">
          <main id="main">
            <div className="main-grid-container">
              <div className="main-grid-item-section-tag">
                <div className="container-main-section-tag">
                  <section id="main-section-tag">
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
              </div>
              <div className="main-grid-item-section-note">
                <div className="container-section-note">
                  <section id="main-section-note">
                    <div className="main-section-note-grid-container">
                      <div className="main-section-note-grid-item">
                        <div className="container-note">
                          <div className="note">
                            <p className="note-subject">팬케이크</p>
                            <p>
                              아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다.
                              하지만 그러지 말았어야 했다. 과유불급이었던
                              것이다. 아침에 팬케이크를 먹었는데 시럽을 두 바퀴
                              돌렸다. 하지만 그러지 말았어야 했다.
                              과유불급이었던 것이다. 아침에 팬케이크를 먹었는데
                              시럽을 두 바퀴 돌렸다. 하지만 그러지 말았어야
                              했다. 과유불급이었던 것이다.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="main-section-note-grid-item">
                        <div className="container-note">
                          <div className="note">
                            <p className="note-subject">팬케이크</p>
                            <p>
                              아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다.
                              하지만 그러지 말았어야 했다. 과유불급이었던
                              것이다.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="main-section-note-grid-item">
                        <div className="container-note">
                          <div className="note">
                            <p className="note-subject">팬케이크</p>
                            <p>
                              아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다.
                              하지만 그러지 말았어야 했다. 과유불급이었던
                              것이다.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="main-section-note-grid-item">
                        <div className="container-note">
                          <div className="note">
                            <p className="note-subject">팬케이크</p>
                            <p>
                              아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다.
                              하지만 그러지 말았어야 했다. 과유불급이었던
                              것이다.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="main-section-note-grid-item">
                        <div className="container-note">
                          <div className="note">
                            <p className="note-subject">팬케이크</p>
                            <p>
                              아침에 팬케이크를 먹었는데 시럽을 두 바퀴 돌렸다.
                              하지만 그러지 말았어야 했다. 과유불급이었던
                              것이다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="grid-item-footer">
        <div className="container-footer">
          <footer id="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
