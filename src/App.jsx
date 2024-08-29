import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  
  const addTodo = () => {
    if (inputValue.trim() !== '') { 
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue(''); 
    }
  };

  
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); 
    setTodos(newTodos);
  };

 
  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ); 
    setTodos(newTodos); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      
     
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter a task..."
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

     
      <ul className="mt-4 w-1/2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`bg-white p-2 my-2 border border-gray-300 rounded shadow-sm flex justify-between items-center ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`} 
          >
            
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)} 
                className="mr-2"
              />
              {todo.text}
            </div>
            
        
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
