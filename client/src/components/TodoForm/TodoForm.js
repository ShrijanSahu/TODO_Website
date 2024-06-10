
// import React, { useState } from 'react';
// import { createTodo } from '../services/todoService';
// import './TodoForm.css';  // Import the CSS file

// const TodoForm = ({ fetchTodos }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await createTodo({ title, description });
//         setTitle('');
//         setDescription('');
//         fetchTodos();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 placeholder="New Todo" 
//                 value={title} 
//                 onChange={(e) => setTitle(e.target.value)} 
//             />
//             <textarea 
//                 placeholder="Description" 
//                 value={description} 
//                 onChange={(e) => setDescription(e.target.value)} 
//             ></textarea>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default TodoForm;


// import React, { useState } from 'react';
// import { createTodo } from '../services/todoService';
// import './TodoForm.css';  // Import the CSS file

// const TodoForm = ({ fetchTodos }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await createTodo({ title, description });
//         setTitle('');
//         setDescription('');
//         fetchTodos();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 placeholder="New Todo" 
//                 value={title} 
//                 onChange={(e) => setTitle(e.target.value)} 
//             />
//             <textarea 
//                 placeholder="Description" 
//                 value={description} 
//                 onChange={(e) => setDescription(e.target.value)} 
//             ></textarea>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default TodoForm;


import React, { useState } from 'react';
import { createTodo } from '../../services/todoService';
  // Import the CSS file
const TodoForm = ({ fetchTodos }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTodo({ title, description });
        setTitle('');
        setDescription('');
        fetchTodos();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="New Todo" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;

