import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Header from "./Header";
import Input from "./Input";
import Footer from "./Footer";


const Home = () => {
  const [todo, setTodo]= useState("");
  const [todos, setTodos]= useState([]);
  const [isClickedForEdit, setForEdit]= useState(false);
  const [checkIdForEdit, setIdForEdit]= useState(null);
  const handleChange=(event)=>{
    setTodo(event.target.value);
  }
  const handleClick=()=>{
    const allInputData={id: new Date().getTime().toString(), name: todo};
    if(allInputData.name.trim()===""){
      alert("Enter a Task");
      return;
    }
    else if(isClickedForEdit) {
      setTodos(
          todos.map((ele) => {
              if(ele.id === checkIdForEdit) {
                  return { ...ele, name: todo };
              }
              return ele;
          })
      );
      isClickedForEdit? setForEdit(false): setForEdit(true);
  }
    else{
      setTodos([...todos, allInputData]);
      
    }
    setTodo("");
    
  }
  const deleteTodo=(id)=>{
    setTodos(todos.filter((todoItems)=>{
      return id!==todoItems.id;
    }))
  }
  const editTodo=(id)=>{
    const newEditItem= todos.find(eachTodo=>{
      return eachTodo.id===id;
    });
    setTodo(newEditItem.name);
    setForEdit(true);
    setIdForEdit(id);
  }
  const [isTaskComplete, setTaskComplete]= useState(false);
  // let customStyle;
  // const handleClickForText=()=>{
  //   if(isTaskComplete){
  //     return customStyle={
  //       textDecoration: "underline"
  //     }
  //     setTaskComplete(true);
  //   }
  //   else{
  //     return customStyle={
  //       textDecoration: "none"
  //     }
  //     setTaskComplete(false);
  //   }
  // }
  return (
    <div>
      <Header />
      <Input todo={todo} handleChange={handleChange} handleClick={handleClick} isClickedForEdit={isClickedForEdit}/>
      {todos.map(eachTodo=>{
        return (
          <div key={eachTodo.id} className="todo-container">
            <button onClick={()=>editTodo(eachTodo.id)}><EditIcon/></button>
            <p>{eachTodo.name}</p>
            <button onClick={()=>deleteTodo(eachTodo.id)}><DeleteIcon/></button>
          </div>
        )
      })}
      <Footer/>
    </div>
  );
};
export default Home;
