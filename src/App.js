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
  const [modalNoteData, setModalNoteData] = useState("");
  const [dataForUpdatingNoteData, setDataForUpdatingNoteData] = useState("");

  // switch state
  const [switchModalNote, setSwitchModalNote] = useState("hide");

  useEffect(() => {
    if (checkIsCaseOfOpeningModalNote()) {
      return;
    }

    if (checkNeedToUpdateNote()) {
      updateNote();
      return;
    }
  }, [switchModalNote]);

  function checkIsCaseOfOpeningModalNote() {
    return switchModalNote === "show";
  }

  function checkNeedToUpdateNote() {
    return (
      dataForUpdatingNoteData.title !== modalNoteData.title ||
      dataForUpdatingNoteData.content !== modalNoteData.content
    );
  }

  function updateNote() {
    const index = getIndexOfNoteDataToUpdate();

    updateNoteData(index);
  }

  function getIndexOfNoteDataToUpdate() {
    const idOfNoteDataToUpdate = dataForUpdatingNoteData.id;

    if (idOfNoteDataToUpdate === 0) {
      return idOfNoteDataToUpdate;
    }

    const indexOfNoteDataToUpdate = noteData.findIndex(
      (item) => item.id === idOfNoteDataToUpdate
    );

    return indexOfNoteDataToUpdate;
  }

  function updateNoteData(indexOfNoteDataToUpdate) {
    const copy = [...noteData];

    if (indexOfNoteDataToUpdate === 0) {
      const newId = noteData.length + 1;

      const newNoteData = {
        id: newId,
        title: dataForUpdatingNoteData.title,
        content: dataForUpdatingNoteData.content,
      };

      copy.push(newNoteData);

      setNoteData(copy);

      return;
    }

    copy[indexOfNoteDataToUpdate] = dataForUpdatingNoteData;

    setNoteData(copy);
  }

  return (
    <div className="App">
      {switchModalNote === "show" ? (
        <ModalNote
          noteData={noteData}
          setNoteData={setNoteData}
          modalNoteData={modalNoteData}
          setModalNoteData={setModalNoteData}
          dataForUpdatingNoteData={dataForUpdatingNoteData}
          setDataForUpdatingNoteData={setDataForUpdatingNoteData}
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
            dataForUpdatingNoteData={dataForUpdatingNoteData}
            setDataForUpdatingNoteData={setDataForUpdatingNoteData}
            setSwitchModalNote={setSwitchModalNote}
          ></SectionNote>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
