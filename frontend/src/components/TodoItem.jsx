import { useEffect, useState } from 'react';
import axios from 'axios';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await axios.get('/tasks');
    setTasks(data);
  };

  const addTask = async () => {
    await axios.post('/tasks', { title, description });
    fetchTasks();
    setTitle('');
    setdescription('');
  };


  const deleteTask = async () => {
    await axios.delete('/tasks/:id', { title, description });
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      <button onClick={addTask}>Add Task</button>
      <button onClick={deleteTask}>Delete Task</button>
      <br />
      <br />
    <br />
      <input value={description} onChange={(e) => setdescription(e.target.value)} placeholder="description" />
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="bathing" />
      <FormControlLabel required control={<Checkbox />} label="brushing" />
      <FormControlLabel required control={<Checkbox />} label="studying" />
      <FormControlLabel required control={<Checkbox />} label="cooking" />
      <FormControlLabel required control={<Checkbox />} label="others" />
    </FormGroup>

      <ul>
        
        {/* {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default TodoList;