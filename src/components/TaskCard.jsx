import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext);

  return (
    <div className={task.completed ? "bg-green-900 text-white p-4 rounded-md" : "bg-gray-800 text-white p-4 rounded-md"}>
      <h1 className="text-xl font-bold capitalize mb-2" >{task.title}</h1>
      <hr className="p-2"/>
      <p className="text-gray-300 text-sm mb-4" >{task.description}</p>
      <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => deleteTask(task.id)}> Delete </Button>
    </div>
  );
}

export default TaskCard;
