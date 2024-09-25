import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ToDoList from "./Components/ToDoList/ToDoList";


function App() {
  
  // function imeFunkcije(a){
    
  //   return a++;
  // }
  // const imeFunkcije = a => a++
    
  const [brojac, setbrojac] = useState(1)
  const [ime, setime] = useState("Nemanja")
  const [niz, setniz] = useState(["asdsadsad", "sadasddsadsa","!3312","asdsadsad", "sadasddsadsa","!3312"])

  return (
    <div>
       <ToDoList></ToDoList>
    </div>
  );
}

export default App;
