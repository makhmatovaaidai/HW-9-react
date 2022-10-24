import React from "react";
import "./Modal.css";
function Modal({ message, filteredItem, deleteItem, id }) {
  return (
    <div>
      <div className="container">
        <h3>{message}</h3>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => filteredItem(id)}
        >
          Да
        </button>
        <button
          style={{ backgroundColor: "green", margin: "10px", color: "white" }}
          onClick={() => deleteItem(message)}
        >
          Нет
        </button>
      </div>
    </div>
  );
}

export default Modal;
