import "./Dialog.css";

function Delete({ message, onDialog }) {
  return (
    <div>
      <div className="container">
        <h3>{message}</h3>
        <div>
          <button
            onClick={() => onDialog(false)}
            style={{ background: "green", color: "white" }}
          >
            Нет
          </button>
          <button
            onClick={() => onDialog(true)}
            style={{ background: "red", margin: "10px", color: "white" }}
          >
            Да
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
