import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();

      res.status === 404 && setError('Task not found');

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  error && navigate('/');

  return loading ? (
    <svg
      class='spinner'
      width='65px'
      height='65px'
      viewBox='0 0 66 66'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        class='path'
        fill='none'
        stroke-width='6'
        stroke-linecap='round'
        cx='33'
        cy='33'
        r='30'
      ></circle>
    </svg>
  ) : (
    <div className='details'>
      <h2>{task.text}</h2>
      <p>{task.time}</p>
    </div>
  );
};

export default TaskDetails;
