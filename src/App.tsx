import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Button from './components/Button/Button'

type Task = {
  id: number;
  task: string;
  completed: boolean;
}

const App = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [taskInputValue, setTaskInputValue] = useState('');

  const fetchAllTasks = () => {
    axios.get<Task[]>('http://localhost:3000/tasks').then((res) => {
      setTasks(res.data);
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const addTask = () => {
    const newTask = {
      task: taskInputValue,
      completed: false
    }

    setLoading(true);

    axios.post(`http://localhost:3000/tasks/`, newTask).then(() => {
      fetchAllTasks();
      setTaskInputValue('');
    })
  }

  const toggleCompleted = (task: Task) => {
    setLoading(true);

    task.completed = !task.completed;

    axios.put(`http://localhost:3000/tasks/${task.id}`, task).then(() => {
      fetchAllTasks();
    })
  }

  const deleteTask = (taskId: number) => {
    setLoading(true);

    axios.delete(`http://localhost:3000/tasks/${taskId}`).then(() => {
      fetchAllTasks();
    });
  };

  return (
    <div>
      <form 
        className='tasks-form' 
        onSubmit={(e) => {
         e.preventDefault();

         addTask()
      }}
      >
        <label>
          Add task <br />
          <input 
            type='text' 
            className='input'
            placeholder='Buy milk...'
            value={taskInputValue}
            onChange={(e) => {
              setTaskInputValue(e.target.value)
            }}
            required
          />  
          <br />
        </label>
          <Button type='submit'>
            Submit
          </Button>
      </form>
      <div className='tasks'>
          {loading && <h1>Loading...</h1>}
          {tasks.map((task) => {

            return (
                <div key={task.id} className='task'>

                  <h5 className={`task__heading ${task.completed ? 'task__heading--complete' : ''}`}>
                  {task.task}
                  </h5>

                  <Button 
                  onClick={() => toggleCompleted(task)}
                  >
                  Mark as {task.completed ? 'undone' : 'done'}
                  </Button>
                  <Button 
                  onClick={() => deleteTask(task.id)}>
                    Delete
                    </Button>
                </div>
            )
          })}

      </div>
    </div>  

  )
}

export default App
