// import React, { useState, useEffect } from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import { getTodos } from './services/todoService';

// const App = () => {
//     const [todos, setTodos] = useState([]);

//     const fetchTodos = async () => {
//         const todos = await getTodos();
//         setTodos(todos);
//     };

//     useEffect(() => {
//         fetchTodos();
//     }, []);

//     return (
//         <div>
//             <h1>TODO List</h1>
//             <TodoForm fetchTodos={fetchTodos} />
//             <TodoList todos={todos} fetchTodos={fetchTodos} />
//         </div>
//     );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { getTodos } from './services/todoService';
import './App.css';
import Navigation from './components/Navigation';
const App = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <Navigation/>
            <h1>TODO List</h1>
            

            <TodoForm fetchTodos={fetchTodos} />
            <TodoList todos={todos} fetchTodos={fetchTodos} />
        </div>
    );
};

export default App;

