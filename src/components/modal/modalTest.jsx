import { useState } from "react";
import Modal from ".";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>open modal popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>customized header</h1>}
          footer={<h1>customized footer</h1>}
          onClose={onClose}
          body={<div>customized body</div>}
        />
      )}
    </div>
  );
}