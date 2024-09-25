import React, { useState } from "react";
import styles from "./ToDoList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = () => {
  const [lista, setlista] = useState([
    "asddsas asdasd sadsad ",
    "sadasdsaddasdsadsa",
    "asddsas asdasd sadsad ",
    "sadasdsaddasdsadsa",
  ]);
  const [inputValue, setinputValue] = useState("asdds");
  const dodajUListu = () => {
    setlista([...lista, inputValue]);
    setinputValue("");
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>To Do Lista</h3>
          <div className={styles.listItems}>
            {lista.map((stavkaSaListe, index) => (
              //   <h4 key={index}>
              //     {++index}. {stavkaSaListe}
              //   </h4>

              <ToDoItem
                key={index}
                text={++index + ". " + stavkaSaListe}
              ></ToDoItem>
            ))}
          </div>
          <div className={styles.input}>
            <input
              value={inputValue}
              type="text"
              onChange={(e) => setinputValue(e.target.value)}
            />
            <button onClick={() => dodajUListu()}>Dodaj</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
