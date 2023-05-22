function ModalNote({
  setSwitchModalNote,
  noteData,
  setNoteData,
  setModalNoteData,
  modalNoteData,
  dataForUpdatingNoteData,
  setDataForUpdatingNoteData,
}) {
  return (
    <>
      <div
        className="background-modal-note"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) {
            setSwitchModalNote("hide");
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
                onInput={(e) => {
                  console.log("update title");
                  const noteTitle = e.target.innerText;

                  const copy = { ...dataForUpdatingNoteData };
                  copy.title = noteTitle;

                  setDataForUpdatingNoteData(copy);
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
                onInput={(e) => {
                  console.log("update content");

                  const noteContent = e.target.innerText;

                  const copy = { ...dataForUpdatingNoteData };

                  copy.content = noteContent;

                  setDataForUpdatingNoteData(copy);
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

export default ModalNote;
