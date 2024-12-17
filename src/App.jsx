import { useState } from 'react';
import Navber from './components/Navber/Navber';
import TextEditor from './components/TextEditor/TextEditor';
import TodoList from './components/TodoList/TodoList';
import Weather from './components/Weather/Weather';
import PasswordCreator from './components/PasswordCreator/PasswordCreator';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <Navber />
        </div>
        <div>
          <TextEditor />
        </div>
        <br />
        <hr className="border-t-8 " />
        <br />
        <div>
          <TodoList />
        </div>
        <br />
        <hr className="border-t-8 " />
        <br />
        <div>
          <Weather />
        </div>
        <br />
        <hr className="border-t-8 " />
        <br />
        <div>
          <PasswordCreator />
        </div>
      </div>
    </>
  );
}

export default App;
