import "./List.css";

function List({itemList, deleteItem}) {
  
  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <div className="Item">
            <p>{itemObj.item}</p>
            <button onClick={() => deleteItem(itemObj.key)}>Удалить</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
