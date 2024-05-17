import './App.css'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import {increase,decrease} from './actions/index'

function App() {
const MyStore= useSelector( (state)=> state.IncDec);
const dispatch=useDispatch();

// This line captures the new value from an event and dispatches an action named 'UPDATE_VALUE' with the captured 
// value as the payload
// The payload in this context refers to the data associated with the action. In this line of code, the payload is
// the newValue variable

const handleChange = (e) => {
  const newValue = e.target.value;
  dispatch({ type: 'UPDATE_VALUE', payload: newValue });
};
  return (
    <>
<h3>Learning React Redex</h3>
<input type='text' value={MyStore} onChange={handleChange}/>
<br/><br/>
<button onClick={()=>dispatch(increase())} type="button" className="btn btn-primary">Add</button>
<button onClick={()=>dispatch(decrease())} type="button" className="btn btn-secondary">Minus</button>
    </>
  )
}

export default App
