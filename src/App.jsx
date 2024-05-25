import { useRef } from "react";
import Modal from "@marialenap/my-modal";

function App() {
  const buttonOpen = useRef(null);
  const modalElement = useRef(false);

  function addPerson(e) {
    e.preventDefault();
    console.log("Add person !!", e.target.name.value);
    modalElement.current.style.display = "none";
  }

  return (
    <>
      <div>
        Pour ouvrir le formulaire
        <button type="button" ref={buttonOpen}>
          {" "}
          cliquez ici
        </button>
      </div>
      <div id="personModal" ref={modalElement}>
        <Modal
          addPerson={addPerson}
          buttonOpen={buttonOpen}
          modalElement={modalElement}
        />
      </div>
    </>
  );
}

export default App;
