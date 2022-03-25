import { useState } from 'react';
import { FaSquare, FaCheckSquare } from 'react-icons/fa';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (!text) return;

    onAdd({ text, time, reminder });

    setText('');
    setTime('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Add Time'
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        {!reminder ? (
          <FaSquare
            className='checkbox'
            value={reminder}
            onClick={() => setReminder(true)}
          />
        ) : (
          <FaCheckSquare
            className='checkbox'
            value={reminder}
            onClick={() => setReminder(false)}
          />
        )}
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
