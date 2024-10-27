import { useState } from 'react';
import Navber from './components/Navber/Navber';
import TextEditor from './components/TextEditor/TextEditor';
import TodoList from './components/TodoList/TodoList';
import Weather from './components/Weather/Weather';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navber />
        <div>
          <TextEditor />
        </div>
        <div>
          <TodoList />
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </>
  );
}

export default App;
