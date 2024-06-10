// import React, { useState } from 'react';
// import { deleteTodo, updateTodo } from '../services/todoService';

// const TodoList = ({ todos, fetchTodos }) => {
//     const [isEditing, setIsEditing] = useState(null);
//     const [editTitle, setEditTitle] = useState('');
//     const [editDescription, setEditDescription] = useState('');

//     const handleDelete = async (id) => {
//         await deleteTodo(id);
//         fetchTodos();
//     };

//     const handleEdit = (todo) => {
//         setIsEditing(todo._id);
//         setEditTitle(todo.title);
//         setEditDescription(todo.description);
//     };

//     const handleUpdate = async (id) => {
//         await updateTodo(id, { title: editTitle, description: editDescription });
//         setIsEditing(null);
//         fetchTodos();
//     };

//     return (
//         <div>
//             <ul>
//                 {todos.map(todo => (
//                     <li key={todo._id}>
//                         {isEditing === todo._id ? (
//                             <div>
//                                 <input 
//                                     type="text" 
//                                     value={editTitle} 
//                                     onChange={(e) => setEditTitle(e.target.value)} 
//                                 />
//                                 <textarea 
//                                     value={editDescription} 
//                                     onChange={(e) => setEditDescription(e.target.value)} 
//                                 ></textarea>
//                                 <button onClick={() => handleUpdate(todo._id)}>Update</button>
//                             </div>
//                         ) : (
//                             <div>
//                                 <h3>{todo.title}</h3>
//                                 <p>{todo.description}</p>
//                                 <button onClick={() => handleEdit(todo)}>Edit</button>
//                                 <button onClick={() => handleDelete(todo._id)}>Delete</button>
//                             </div>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;


import React, { useState, useEffect } from 'react';
import { getTodos, deleteTodo, updateTodo } from '../../services/todoService';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    const handleEdit = (todo) => {
        setIsEditing(todo._id);
        setEditTitle(todo.title);
        setEditDescription(todo.description);
    };

    const handleUpdate = async (id) => {
        await updateTodo(id, { title: editTitle, description: editDescription });
        setIsEditing(null);
        fetchTodos();
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {isEditing === todo._id ? (
                            <div>
                               <div div className = "EditTitle"><input 
                                    type="text" 
                                    value={editTitle} 
                                    onChange={(e) => setEditTitle(e.target.value)} 
                                /></div>
                                
                                <div className="DescriptionText">
                                    <textarea 
                                    value={editDescription} 
                                    onChange={(e) => setEditDescription(e.target.value)} 
                                ></textarea>
                                <button onClick={() => handleUpdate(todo._id)}>Update</button>
                                </div>
                                
                            </div>
                        ) : (
                            <div>
                                <h3>{todo.title}</h3>
                                <p>{todo.description}</p>
                                <div className = "EDButton">
                                    <button onClick={() => handleEdit(todo)}>Edit</button>
                                    <button onClick={() => handleDelete(todo._id)}>Delete</button>
                                </div>
                                
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
