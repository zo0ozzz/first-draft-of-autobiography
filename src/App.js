import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const pageTitle = "초고";
  const [navItem, setNavItem] = useState(["nav1", "nav2", "nav3"]);
  const [tag, setTag] = useState(["태그1", "태그2", "태그3", "태그4"]);
  const [note, setNote] = useState([
    {
      id: 1,
      title: "팬케이크",
      content: "과유불급이란 말은 과연 팬케이크에 있어서도 예외가 아닌 것이다.",
    },
    {
      id: 2,
      title: "팬케이크",
      content: "과유불급이란 말은 과연 팬케이크에 있어서도 예외가 아닌 것이다.",
    },
    {
      id: 3,
      title: "팬케이크",
      content: "과유불급이란 말은 과연 팬케이크에 있어서도 예외가 아닌 것이다.",
    },
    {
      id: 4,
      title: "팬케이크",
      content: "과유불급이란 말은 과연 팬케이크에 있어서도 예외가 아닌 것이다.",
    },
  ]);
  const [editable, setEditalbe] = useState("false");
  const [modal, setModal] = useState(false);

  return (
    <div className="App grid-container">
      {modal ? <Modal modal={modal} setModal={setModal}></Modal> : null}

      <Header pageTitle={pageTitle} navItem={navItem}></Header>
      <div className="grid-item-main">
        <div className="container-main">
          <main className="main main-grid-container">
            <SectionTag tag={tag}></SectionTag>
            <SectionNote
              note={note}
              setModal={setModal}
              editable={editable}
            ></SectionNote>
          </main>
        </div>
      </div>
      <footer id="grid-item-footer footer"></footer>
    </div>
  );
}

function Header({ pageTitle, navItem }) {
  return (
    <>
      <div className="grid-item-header">
        <div className="container-header">
          <header className="header">
            <div className="container-logo">
              <div className="logo">{pageTitle}</div>
            </div>
            <div className="container-search-input">
              <input className="search-input" type="text" placeholder="검색" />
            </div>
            <Nav navItem={navItem}></Nav>
          </header>
        </div>
      </div>
    </>
  );
}

function Nav({ navItem }) {
  const nav_li = navItem.map((item, index) => {
    return (
      <li key={index}>
        <a href="#">{item}</a>
      </li>
    );
  });

  return (
    <>
      <div className="container-nav">
        <nav className="nav">
          <ul className="nav-ul">{nav_li}</ul>
        </nav>
      </div>
    </>
  );
}

function SectionTag({ tag }) {
  const arr = tag.map((item, index) => {
    return (
      <div key={index} className="container-tag">
        <div className="tag">{item}</div>
      </div>
    );
  });

  return (
    <div className="main-grid-item-section-tag">
      <section className="main-section-tag">{arr}</section>
    </div>
  );
}

function SectionNote({ note, editable, setModal }) {
  const arr = note.map(({ id, title, content }) => {
    return (
      <div key={id} className="main-section-note-grid-item">
        <div className="container-note">
          <div
            className="note"
            onClick={() => {
              setModal(true);
            }}
          >
            <div className="container-note-subject">
              <div className="note-subject" editable={editable}>
                {title}
              </div>
            </div>
            <div className="container-note-content">
              <div className="note-content" editable={editable}>
                {content}
              </div>
            </div>
            {/* <div className="container-note-tool">
              <div className="container-note-tool-update-button">
                <button className="note-tool-update-button">수정</button>
              </div>
              <div className="container-note-tool-delete-button">
                <button className="note-tool-update-buttondelete-button">
                  삭제
                </button>
              </div>
              <div className="container-note-tool-when">
                <div className="note-tool-when">시간</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="main-grid-item-section-note">
      <section className="main-section-note main-section-note-grid-container">
        {arr}
      </section>
    </div>
  );
}

function Modal({ modal, setModal }) {
  return (
    <>
      <div
        className="container-modal "
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            setModal(false);
          }
        }}
      >
        <div className="modal"></div>
      </div>
    </>
  );
}
export default App;
