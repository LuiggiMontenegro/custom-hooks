import React, { useEffect, useReducer } from 'react';
import {todoReducer} from '../08-useReducer/todoReducer'

// const initialState = [];

const initializer = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initializer);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    // console.log({ todo });

    dispatch({
      type: '[TODO] Add new Todo',
      payload: todo,
    });

    // const action = {
    //   type: '[TODO] Add new Todo',
    //   payload: todo,
    // };

    // dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    // console.log(id)
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
