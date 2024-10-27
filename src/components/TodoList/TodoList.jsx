import React, { useEffect, useRef, useState } from 'react';
import TOdoList from '../../assets/TOdoList.gif';
import TodoItems from './TodoItems';

const TodoList = () => {
  // Reference for the input element
  const inputRef = useRef();

  const [todoList, settodoLists] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);  //local storage a data store korar jonno

  // Function to add task
  const add = () => {
    const task = inputRef.current.value.trim();
    // console.log(task);     //consol dakher jonno

    if (task === '') {
      return alert('Please enter a task');
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      isCompleted: false,
    };
    settodoLists((prev) => [...prev, newTodo]);
    inputRef.current.value = ''; // <-- Corrected here -->
  };

  // ------Delete Todo-----
  const deleteTodo = (id) => {
    settodoLists((prevTodos) =>{ return prevTodos.filter((todo) => todo.id !== id)});
  };

  // -----toggleTodo-----

  const toggleTodo = (id) => {
    settodoLists((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  // local storage 

useEffect(() => {
 localStorage.setItem("todos", JSON.stringify(todoList));   //local storage a data store korar jonno
},[todoList]);


  return (
    <>
      <div className=" grid py-4 min-h-screen">
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-2xl ease-in-out border border-gray-300">
          {/* -----title----- */}
          <div className="flex items-center mt-7 gap-2">
            <img src={TOdoList} alt="Add Icon" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold">TO-DO List</h1>
          </div>
          {/* -----input box----- */}
          <div className="flex items-center my-7 bg-gray-200 rounded-full">
            <input
              ref={inputRef} // <-- Corrected here -->
              className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
              type="text"
              placeholder="Add a new task"
            />
            <button
              onClick={add}
              className="bg-green-500 border-none rounded-full w-32 h-14 text-white text-lg font-medium cursor-pointer"
            >
              Add Task
            </button>
          </div>

          {/* ----To DO List----- */}
          <div>
            {todoList.map((item, index) => (
              <TodoItems key={index} Text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;