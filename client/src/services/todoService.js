// import axios from 'axios';

// const API_URL = 'http://localhost:5000/';

// export const getTodos = async () => {
//     const response = await axios.get("http://localhost:5000/get");
//     return response.data;
// };

// export const createTodo = async (todo) => {
//     const response = await axios.post("http://localhost:5000/post", todo);
//     return response.data;
// };

// export const updateTodo = async (id, updatedTodo) => {
//     const response = await axios.put(`${"http://localhost:5000/put"}/${	
//        _id}`, updatedTodo);
//     return response.data;
// };

// export const deleteTodo = async (id) => {
//     const response = await axios.delete(`${"http://localhost:5000/delete"}/${	
//        _id}`);
//     return response.data;
// };




// import axios from 'axios';

// const API_URL = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-msbfigv/endpoint/data/v1';
// const API_KEY = 'wImtr0zKKIP4N9OeTC0rteDbRPTULrpQHiwc1IVPyOpSZcYTQkYFgP4emzgq0Q09';  // Replace with your actual API key

// // Function to get all todos
// export const getTodos = async () => {
   
//     const response = await axios.post(
//         `${'https://ap-south-1.aws.data.mongodb-api.com/app/data-msbfigv/endpoint/data/v1'}/find`,
//         {
//             dataSource: 'ClusterTODO',
//             database: 'TODO-Database',
//             collection: 'TODO',
//             filter: {}
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'api-key': 'wImtr0zKKIP4N9OeTC0rteDbRPTULrpQHiwc1IVPyOpSZcYTQkYFgP4emzgq0Q09'
//             }
//         }
//     );
//     return response.data.documents;
// };

// // Function to create a new todo
// export const createTodo = async (todo) => {
//     const response = await axios.post(
//         `${'https://ap-south-1.aws.data.mongodb-api.com/app/data-msbfigv/endpoint/data/v1'}/insertOne`,
//         {
//             dataSource: 'ClusterTODO',
//             database: 'TODO-Database',
//             collection: 'TODO',
//             document: todo
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'api-key': 'wImtr0zKKIP4N9OeTC0rteDbRPTULrpQHiwc1IVPyOpSZcYTQkYFgP4emzgq0Q09'
//             }
//         }
//     );
//     console.log(response.data);
//     return response.data;
// };

// // Function to update a todo
// export const updateTodo = async (id, updatedTodo) => {
//     const response = await axios.post(
//         `${'https://ap-south-1.aws.data.mongodb-api.com/app/data-msbfigv/endpoint/data/v1'}/updateOne`,
//         {
//             dataSource: 'ClusterTODO',
//             database: 'TODO-Database',
//             collection: 'TODO',
//             filter: { _id: { $oid: id } },
//             update: {
//                 $set: updatedTodo
//             }
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'api-key': 'wImtr0zKKIP4N9OeTC0rteDbRPTULrpQHiwc1IVPyOpSZcYTQkYFgP4emzgq0Q09'
//             }
//         }
//     );
//     return response.data;
// };

// // Function to delete a todo
// export const deleteTodo = async (id) => {
//     const response = await axios.post(
//         `${'https://ap-south-1.aws.data.mongodb-api.com/app/data-msbfigv/endpoint/data/v1'}/deleteOne`,
//         {
//             dataSource: 'ClusterTODO',
//             database: 'TODO-Database',
//             collection: 'TODO',
//             filter: { _id: { $oid: id } }
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'api-key': 'wImtr0zKKIP4N9OeTC0rteDbRPTULrpQHiwc1IVPyOpSZcYTQkYFgP4emzgq0Q09'
//             }
//         }
//     );
//     return response.data;
// };



import axios from 'axios';

const API_URL = 'http://localhost:5000/todos';

// Function to get all todos
export const getTodos = async () => {
    const response = await axios.get(`${'http://localhost:5000/todos'}/get`);
    return response.data;
};

// Function to create a new todo
export const createTodo = async (todo) => {
    const response = await axios.post(`${'http://localhost:5000/todos'}/post`, todo);
    return response.data;
};

// Function to update a todo
export const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`${'http://localhost:5000/todos'}/${id}/put`, updatedTodo);
    return response.data;
};

// Function to delete a todo
export const deleteTodo = async (id) => {
    const response = await axios.delete(`${'http://localhost:5000/todos'}/${id}/delete`);
    return response.data;
};
