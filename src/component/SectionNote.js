function SectionNote({
  noteData,
  setModalNoteData,
  setDataForUpdatingNoteData,
  setSwitchModalNote,
}) {
  const arr = noteData.map(({ id, title, content }) => {
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
        </div>
      </div>
    );
  });

  return [
    <div className="container-note">
      <div
        className="note"
        onClick={() => {
          setSwitchModalNote("show");

          // const selectedNoteData = noteData.find((item) => {
          //   return item.id === id;
          // });

          // setModalNoteData(selectedNoteData);
          // setDataForUpdatingNoteData(selectedNoteData);

          // return;
        }}
      >
        <div className="container-note-subject">
          <div className="note-subject">그렇죠?</div>
        </div>
        <div className="container-note-content">
          <div className="note-content"></div>
        </div>
      </div>
    </div>,
    arr,
  ];
}

export default SectionNote;
