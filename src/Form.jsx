import React from "react";

const Form = ({ addTask, field, setField }) => {
  return (
    <form onSubmit={addTask}>
      <div className="addfield">
        <input
          type="text"
          placeholder="Type tasks"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default Form;
