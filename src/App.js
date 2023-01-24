import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './state/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div className="App">
     
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <br/>
        <button onClick={()=>dispatch(incrementByAmount(20))}>Add 20</button>
      </div>
    </div>
    </div>
  );
}

export default App;
