import { useState } from 'react';
import Navber from './components/Navber/Navber';
import TextEditor from './components/TextEditor/TextEditor';
import TodoList from './components/TodoList/TodoList';
import Weather from './components/Weather/Weather';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div >
        <div className='bg-red border-4 border-x-sky-500 rounded-lg'>
        <Navber />
        </div>
        <div className='bg-red border-4 border-red-500 rounded-lg'>
          <TextEditor />
        </div>
        <br />
        <hr className="border-t-4 " />
        <br />
        <div className='bg-red border-4 border-green-900 rounded-lg'>
          <TodoList />
        </div>
        <br />
        <hr className="border-t-4 "/>
        <br />
        <div className='bg-red border-4 border-yellow-500 rounded-lg'>
          <Weather />
        </div>
        <br />
        <hr className="border-t-4 "/>
        <br />
      </div>
    </>
  );
}

export default App;
