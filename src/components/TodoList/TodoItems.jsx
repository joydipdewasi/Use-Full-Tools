import React from 'react';
import blankbox from '../../assets/blankbox.gif';
import CheckMark from '../../assets/CheckMark.png';
import DeleteIcon from '../../assets/DeleteIcon.gif';

const TodoItems = ({ Text, id, isCompleted, deleteTodo, toggleTodo }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggleTodo(id);
        }}
        className="flex items-center flex-1 cursor-pointer"
      >
        <img
          src={isCompleted ? CheckMark : blankbox}
          alt="Check Mark"
          className="w-8 h-8"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isCompleted ? 'line-through' : ''
          }`}
        >
          {Text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={DeleteIcon}
        alt="Delete Icon"
        className="w-7 h-8 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
