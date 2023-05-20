import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import note from "./noteData";

function App() {
  const pageTitle = "초고";
  const [navItem, setNavItem] = useState(["nav1", "nav2", "nav3"]);
  const [tag, setTag] = useState(["태그1", "태그2", "태그3", "태그4"]);
  const [noteData, setNoteData] = useState(note);
  // const [switchEditable, setSwitchEditalbe] = useState(false);
  const [switchModalNote, setSwitchModalNote] = useState(false);
  const [modalNoteData, setModalNoteData] = useState("");

  return (
    <div className="App">
      {switchModalNote ? (
        <ModalNote
          setSwitchModalNote={setSwitchModalNote}
          noteData={noteData}
          setNoteData={setNoteData}
          modalNoteData={modalNoteData}
          setModalNoteData={setModalNoteData}
        ></ModalNote>
      ) : null}

      <header className="header">
        <NavBar pageTitle={pageTitle} navItem={navItem}></NavBar>
      </header>
      <main className="main">
        <section className="main-section-tag">
          <SectionTag tag={tag}></SectionTag>
        </section>
        <section className="main-section-note main-section-note-grid-container">
          <SectionNote
            noteData={noteData}
            setSwitchModalNote={setSwitchModalNote}
            setModalNoteData={setModalNoteData}
          ></SectionNote>
        </section>
      </main>
      <footer id="grid-item-footer footer"></footer>
    </div>
  );
}

function NavBar({ pageTitle, navItem }) {
  return (
    <>
      <div className="container-logo">
        <div className="logo">{pageTitle}</div>
      </div>
      <div className="container-search-input">
        <input className="search-input" type="text" placeholder="검색" />
      </div>
      <Nav navItem={navItem}></Nav>
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

  return arr;
}

function SectionNote({ noteData, setSwitchModalNote, setModalNoteData }) {
  const arr = noteData.map(({ id, title, content }) => {
    return (
      <div className="container-note" key={id}>
        <div
          className="note"
          onClick={() => {
            setSwitchModalNote(true);

            const copy = [...noteData];

            const modalNoteData = copy.find((item) => {
              return item.id === id;
            });

            // console.log(modalNoteData);

            setModalNoteData(modalNoteData);
          }}
        >
          <div className="container-note-subject">
            <div className="note-subject">{title}</div>
          </div>
          <div className="container-note-content">
            <div className="note-content">{content}</div>
          </div>
        </div>
      </div>
    );
  });
  return arr;
}

function ModalNote({
  setSwitchModalNote,
  noteData,
  setNoteData,
  setModalNoteData,
  modalNoteData,
}) {
  // const { id, title, content } = ModalNoteData;
  return (
    <>
      <div
        className="background-modal-note"
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            const newNoteData = noteData.find((item) => {
              return item.id === modalNoteData.id;
            });

            if (modalNoteData.title !== newNoteData.title) {
              const copy = [...noteData];

              const index = copy.findIndex((item) => {
                return item.id === modalNoteData.id;
              });

              copy[index].title = modalNoteData.title;

              setNoteData(copy);
            } else {
              console.log("같음");
            }

            setSwitchModalNote(false);
          }
        }}
      >
        <div className="container-modal-note">
          <div className="modal-note">
            <div className="container-modal-note-subject">
              <div
                className="modal-note-subject"
                contentEditable="true"
                suppressContentEditableWarning="true"
                onBlur={(e) => {
                  const text = e.target.textContent;

                  const copy = { ...modalNoteData };

                  copy.title = text;

                  console.log(copy.title);

                  setModalNoteData(copy);
                }}
              >
                {modalNoteData.title}
              </div>
            </div>

            <div className="container-modal-note-content">
              <div
                className="modal-note-content"
                contentEditable="true"
                suppressContentEditableWarning="true"
              >
                {modalNoteData.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
