import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <Grid container spacing={2} className="p-10">
      <Grid item xs={5}>
        <TextField
          label="Task Title"
          variant="outlined"
          margin="normal"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          fullWidth
          focused
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          variant="outlined"
          margin="normal"
          label="Task Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          multiline
          fullWidth
          focused
        />
      </Grid>
      <Grid item xs={2} container>
        <Button margin="normal" variant="contained" onClick={handleSubmit} fullWidth>
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default TaskForm;
