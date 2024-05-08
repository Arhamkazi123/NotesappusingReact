import React from "react";

const Mapcomponent = ({ deleteTask, tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div className="task-item" key={index}>
          <h3>{task}</h3>
          <button className="delete-button" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Mapcomponent;
