import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
const Input = (props) => {
  const isClickedForEdit = props.isClickedForEdit;
  return (
    <div className="input-container">
      <h3>Add Your Tasks 👇</h3>
      <div className="input-button-container">
        <input
          onChange={props.handleChange}
          value={props.todo}
          className="input"
          name="task"
          type="text"
        />
        <button onClick={props.handleClick} className="btn">
          {isClickedForEdit ? <EditIcon /> : <AddIcon />}
        </button>
      </div>
    </div>
  );
};
export default Input;
