function SectionNote({
  noteData,
  setModalNoteData,
  setDataForUpdatingNoteData,
  setSwitchModalNote,
  setElementToFocusAtOpeningModalNote,
}) {
  return (
    <>
      <NewNote
        noteData={noteData}
        setModalNoteData={setModalNoteData}
        setDataForUpdatingNoteData={setDataForUpdatingNoteData}
        setSwitchModalNote={setSwitchModalNote}
        setElementToFocusAtOpeningModalNote={
          setElementToFocusAtOpeningModalNote
        }
      ></NewNote>

      <Note
        noteData={noteData}
        setModalNoteData={setModalNoteData}
        setDataForUpdatingNoteData={setDataForUpdatingNoteData}
        setSwitchModalNote={setSwitchModalNote}
        setElementToFocusAtOpeningModalNote={
          setElementToFocusAtOpeningModalNote
        }
      ></Note>
    </>
  );
}

function NewNote({
  noteData,
  setModalNoteData,
  setDataForUpdatingNoteData,
  setSwitchModalNote,
  setElementToFocusAtOpeningModalNote,
}) {
  function onClickHandler(elementToFocusAtOpeningModal) {
    setModalNote(elementToFocusAtOpeningModal);

    setSwitchModalNote("show");
  }

  function setModalNote(elementToFocusAtOpeningModal) {
    setElementToFocusAtOpeningModalNote(elementToFocusAtOpeningModal);

    const newNoteData = {
      id: 0,
      title: "",
      content: "",
    };

    setModalNoteData(newNoteData);
    setDataForUpdatingNoteData(newNoteData);
  }

  return (
    <>
      <div className="container-note" key={0}>
        <div className="note">
          <div
            className="container-note-subject"
            onClick={() => {
              onClickHandler("titleOfModalNote");
            }}
          >
            <div className="note-subject">new</div>
          </div>
          <div
            className="container-note-content"
            onClick={(e) => {
              e.stopPropagation();

              setModalNote("contentOfModalNote");

              setSwitchModalNote("show");
            }}
          >
            <div className="note-content"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Note({
  noteData,
  setModalNoteData,
  setDataForUpdatingNoteData,
  setSwitchModalNote,
  setElementToFocusAtOpeningModalNote,
}) {
  const copy = [...noteData].reverse();

  const arr = copy.map(({ id, title, content }) => {
    return (
      <div className="container-note" key={id}>
        <div
          className="note"
          onClick={() => {
            // 삭제 버튼 기능 활성화 시 버블링 차단 등을 설정해줘야 할 듯.
            setSwitchModalNote("show");

            const selectedNoteData = noteData.find((item) => {
              return item.id === id;
            });

            setModalNoteData(selectedNoteData);
            setDataForUpdatingNoteData(selectedNoteData);

            return;
          }}
        >
          <div
            className="container-note-subject"
            onClick={(e) => {
              e.stopPropagation();
              setElementToFocusAtOpeningModalNote("titleOfModalNote");

              setSwitchModalNote("show");

              const selectedNoteData = noteData.find((item) => {
                return item.id === id;
              });

              setModalNoteData(selectedNoteData);
              setDataForUpdatingNoteData(selectedNoteData);

              return;
            }}
          >
            <div className="note-subject">{title}</div>
          </div>
          <div
            className="container-note-content"
            onClick={(e) => {
              e.stopPropagation();

              setElementToFocusAtOpeningModalNote("contentOfModalNote");

              setSwitchModalNote("show");

              const selectedNoteData = noteData.find((item) => {
                return item.id === id;
              });

              setModalNoteData(selectedNoteData);
              setDataForUpdatingNoteData(selectedNoteData);

              return;
            }}
          >
            <div className="note-content">{content}</div>
          </div>
          <div className="note-tool">
            <button
              className="note-tool-delete-button"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  });

  return arr;
}

export default SectionNote;
