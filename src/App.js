// import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Todo } from './components/Todo';
function App() {
  return (
    <div className='count'>
      <Counter initialValue= {1000}/>
      <Todo/>
    </div>
    
  );
}

export default App;
