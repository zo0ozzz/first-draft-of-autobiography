import { useRef, useEffect } from "react";

function ModalNote({
  switchModalNote,
  setSwitchModalNote,
  noteData,
  setNoteData,
  modalNoteData,
  setModalNoteData,
  dataForUpdatingNoteData,
  setDataForUpdatingNoteData,
}) {
  const modalNoteTitle = useRef();

  useEffect(function focusOnModalNoteContent() {
    const modalNoteTitleElement = modalNoteTitle.current;

    focusOnTargetElement(modalNoteTitleElement);
    placeCaretAtEnd(modalNoteTitleElement);
  }, []);

  function focusOnTargetElement(targetElement) {
    targetElement.focus();
  }

  function placeCaretAtEnd(targetElement) {
    if (
      typeof window.getSelection != "undefined" &&
      typeof document.createRange != "undefined"
    ) {
      var range = document.createRange();
      range.selectNodeContents(targetElement);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(targetElement);
      textRange.collapse(false);
      textRange.select();
    }
  }

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
                ref={modalNoteTitle}
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
