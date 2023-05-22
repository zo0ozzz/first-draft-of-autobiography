import "./App.css";
import { useEffect, useState } from "react";
import note from "./noteData";
import NavBar from "./component/NavBar";
import ModalNote from "./component/ModalNote";
import SectionTag from "./component/SectionTag";
import SectionNote from "./component/SectionNote";

function App() {
  // js variable
  const pageTitle = "초고";

  // state
  const [navData, setNavData] = useState(["nav1", "nav2", "nav3"]);
  const [tagData, setTagData] = useState(["태그1", "태그2", "태그3"]);
  const [noteData, setNoteData] = useState(note);

  const [messengerOfUpdatedNote, setMessengerOfUpdatedNote] = useState("");

  const [modalNoteData, setModalNoteData] = useState("");

  // switch state
  const [switchModalNote, setSwitchModalNote] = useState("hide");

  // useEffect(() => {
  //   if (switchModalNote === "show") {
  //     return;
  //   }

  //   if (messengerOfUpdatedNote.title !== modalNoteData.title) {
  //     console.log(111);
  //   } else {
  //     console.log(222);
  //   }
  // });

  useEffect(
    () => console.log(messengerOfUpdatedNote),
    [messengerOfUpdatedNote]
  );

  return (
    <div className="App">
      {switchModalNote === "show" ? (
        <ModalNote
          noteData={noteData}
          setNoteData={setNoteData}
          modalNoteData={modalNoteData}
          setModalNoteData={setModalNoteData}
          messengerOfUpdatedNote={messengerOfUpdatedNote}
          setMessengerOfUpdatedNote={setMessengerOfUpdatedNote}
          setSwitchModalNote={setSwitchModalNote}
        ></ModalNote>
      ) : null}
      <header className="header">
        <NavBar pageTitle={pageTitle} navData={navData}></NavBar>
      </header>
      <main className="main">
        <section className="main-section-tag">
          <SectionTag tagData={tagData}></SectionTag>
        </section>
        <section className="main-section-note main-section-note-grid-container">
          <SectionNote
            noteData={noteData}
            setModalNoteData={setModalNoteData}
            messengerOfUpdatedNote={messengerOfUpdatedNote}
            setMessengerOfUpdatedNote={setMessengerOfUpdatedNote}
            setSwitchModalNote={setSwitchModalNote}
          ></SectionNote>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
