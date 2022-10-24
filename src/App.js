import "./App.css";
import { useState } from "react";
import List from "./components/List";
import Modal from "./components/Modal";

function App() {
  const [currentItem, setCurrentItem] = useState();
  const [itemList, setItemList] = useState([]);

  const [modal, setModal] = useState();
  const [key, setKey] = useState('')

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
    setItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };
  const deleteItem = (key) => {
    setModal({
      message: "Вы действительно хотите удалить?",
    });
    setKey(key)
  };

  const deleteItemClose = () => {
    setModal(null)
  }

  const filteredItem = (key) => {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    setItemList(newList);
    setModal(null)
  };

  return (
    <div className="App">
      {modal && (
        <Modal
          {...modal}
          filteredItem={filteredItem}
          deleteItem={deleteItemClose}
          setModal={setModal}
          id={key}
        />
      )}
      <div className="Wrapper">
        <div className="Input-wrapper">
          <input
            value={currentItem}
            onChange={onChangeHandler}
            type="text"
            placeholder="Введите текст"
          />
          <button onClick={addItemToList}>Добавить</button>
        </div>
      </div>
      <List
        itemList={itemList}
        deleteItem={deleteItem}
        setItemList={setItemList}
      />
    </div>
  );
}
export default App;
