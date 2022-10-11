import {useDispatch, useSelector} from "react-redux";

import reactLogo from './assets/react.svg'
import './App.css'
import {increment, decrement, incrementBy2} from "./store/slices/counter/counterSlice";

function App() {

    const { counter } = useSelector( state => state.counter );
    const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <h1>Count is <span className="fonts">{counter}</span></h1>
        <div className="card">
            <button onClick={ () => dispatch( increment() ) }>
              Increment
            </button>

            <button className="button-incrementby2" onClick={ () => dispatch( incrementBy2(2) ) }>
                Increment by 2
            </button>

            <button className="button-decrement" onClick={ () => dispatch( decrement() ) }>
                Decrement
            </button>
        </div>
    </div>
  )
}

export default App
