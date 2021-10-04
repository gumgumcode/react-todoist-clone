import React from "react";

const TaskCategory = () => {
  return (
    <div className="col-6 mx-4" style={{ width: "280px" }}>
      <div className="list-group">
        <a href="/" className="list-group-item list-group-item-action active">
          Inbox
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          Today
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          Upcoming
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          Done
        </a>
      </div>
    </div>
  );
};

export default TaskCategory;
