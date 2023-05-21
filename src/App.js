import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import note from "./noteData";

function App() {
  const pageTitle = "초고";
  const [navItem, setNavItem] = useState(["nav1", "nav2", "nav3"]);
  const [tag, setTag] = useState(["태그1", "태그2", "태그3", "태그4"]);
  const [noteData, setNoteData] = useState(note);
  // const [switchEditable, setSwitchEditalbe] = useState(false);
  const [switchModalNote, setSwitchModalNote] = useState(false);
  const [modalNoteData, setModalNoteData] = useState("");
  const [switchTransition, setSwitchTransition] = useState("");

  function updateNoteData(e) {
    const targetNoteDataIndex = noteData.findIndex(
      (item) => item.id === modalNoteData.id
    );

    if (
      modalNoteData.title !== noteData[targetNoteDataIndex].title ||
      modalNoteData.content !== noteData[targetNoteDataIndex].content
    ) {
      let copy = [...noteData];

      copy[targetNoteDataIndex] = modalNoteData;

      setNoteData(copy);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setSwitchTransition("");
    }, 10);

    return () => {
      setSwitchTransition("transition2");
    };
  }, [noteData]);

  return (
    <div className="App">
      {switchModalNote ? (
        <ModalNote
          setSwitchModalNote={setSwitchModalNote}
          noteData={noteData}
          setNoteData={setNoteData}
          modalNoteData={modalNoteData}
          setModalNoteData={setModalNoteData}
          updateNoteData={updateNoteData}
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
            switchTransition={switchTransition}
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

function SectionNote({
  noteData,
  setSwitchModalNote,
  setModalNoteData,
  switchTransition,
}) {
  const arr = noteData.map(({ id, title, content }) => {
    return (
      <div className="container-note" key={id}>
        <div
          className={`note transition ${switchTransition}`}
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
  updateNoteData,
}) {
  // const { id, title, content } = ModalNoteData;
  return (
    <>
      <div
        className="background-modal-note"
        onMouseDown={(e) => {
          if (e.target == e.currentTarget) {
            updateNoteData(e);
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
                  const textContent = e.target.innerText;
                  console.log(textContent);

                  const copy = { ...modalNoteData };

                  copy.title = textContent;

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
                onBlur={(e) => {
                  const textContent = e.target.innerText;

                  const copy = { ...modalNoteData };

                  copy.content = textContent;

                  setModalNoteData(copy);
                }}
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
