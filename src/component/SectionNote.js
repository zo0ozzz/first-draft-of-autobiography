function SectionNote({
  noteData,
  setModalNoteData,
  setDataForUpdatingNoteData,
  setSwitchModalNote,
}) {
  const copy = [...noteData].reverse();

  const arr = copy.map(({ id, title, content }) => {
    return (
      <div className="container-note" key={id}>
        <div
          className="note"
          onClick={() => {
            setSwitchModalNote("show");

            const selectedNoteData = noteData.find((item) => {
              return item.id === id;
            });

            setModalNoteData(selectedNoteData);
            setDataForUpdatingNoteData(selectedNoteData);

            return;
          }}
        >
          <div className="container-note-subject">
            <div className="note-subject">{title}</div>
          </div>
          <div className="container-note-content">
            <div className="note-content">{content}</div>
          </div>
          <div>
            <button>삭제</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {" "}
      <div className="container-note" key={0}>
        <div
          className="note"
          onClick={() => {
            setSwitchModalNote("show");

            const newNoteData = {
              id: 0,
              title: "",
              content: "",
            };

            setModalNoteData(newNoteData);
            setDataForUpdatingNoteData(newNoteData);
          }}
        >
          <div className="container-note-subject">
            <div className="note-subject">new</div>
          </div>
          <div className="container-note-content">
            <div className="note-content"></div>
          </div>
        </div>
      </div>
      {arr}
    </>
  );
}

export default SectionNote;
