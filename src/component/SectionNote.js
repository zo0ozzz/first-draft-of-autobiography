function SectionNote({
  noteData,
  setSwitchModalNote,
  setModalNoteData,
  setMessengerOfUpdatedNote,
}) {
  const arr = noteData.map(({ id, title, content }) => {
    return (
      <div className="container-note" key={id}>
        <div
          className="note"
          onClick={() => {
            setSwitchModalNote("show");

            const copy = [...noteData];

            const selectedNoteData = copy.find((item) => {
              return item.id === id;
            });

            setModalNoteData(selectedNoteData);
            setMessengerOfUpdatedNote(selectedNoteData);
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

// function showModalNote(id) {
//   setSwitchModalNote("show");

//   const selectedNoteData = getSelectedNoteDataById(id);

//   setModalNoteData(selectedNoteData);

//   function getSelectedNoteDataById(id) {
//     const selectedNoteData = noteData.find((item) => {
//       return item.id === id;
//     });
//   }
// }

export default SectionNote;
