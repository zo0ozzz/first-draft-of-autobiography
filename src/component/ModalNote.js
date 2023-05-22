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

  useEffect(() => {
    if (checkIsCaseOfOpeningModalNote()) {
      return;
    }

    const modalNoteTitleElement = modalNoteTitle.current;

    const noteTitle = modalNoteTitleElement.innerText;
    console.log(noteTitle);
    // const copy = { ...modalNoteData };
    // copy.title = noteTitle;

    // setModalNoteData(copy);

    // if (checkNeedToUpdateNote()) {
    //   updateNote();
    //   return;
    // }
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

    const indexOfNoteDataToUpdate = noteData.findIndex(
      (item) => item.id === idOfNoteDataToUpdate
    );

    return indexOfNoteDataToUpdate;
  }

  function updateNoteData(indexOfNoteDataToUpdate) {
    const copy = [...noteData];

    copy[indexOfNoteDataToUpdate] = dataForUpdatingNoteData;

    setNoteData(copy);
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
                // onInput={(e) => {
                //   console.log("update title");
                //   const noteTitle = e.target.innerText;

                //   const copy = { ...dataForUpdatingNoteData };
                //   copy.title = noteTitle;

                //   setDataForUpdatingNoteData(copy);
                // }}
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
