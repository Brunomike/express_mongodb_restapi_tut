import {useState} from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {createGoal} from '../features/goals/goalSlice';
import {toast} from 'react-toastify';

const GoalForm = () => {
    const [text,setText]=useState('');
    const dispatch=useDispatch();
    const {message}=useSelector((state)=>state.goal);
    const {user}=useSelector((state)=>state.auth);

    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(createGoal({text},user.token));
        if (message.length>0){
            toast.success('Goal added successfuly!');
        }
        setText('');
    };
  return (
    <section className='form'>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input type="text" name="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>

        <div className="form-group">
            <button className="btn btn-block" type="submit">
                Add Goal
            </button>
        </div>
    </form>
    </section>
  )
}

export default GoalForm;
