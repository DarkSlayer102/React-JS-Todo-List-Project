import Header from './header'
import { useState } from 'react';
import './App.css'

function App() {

  /* 

 We have created two states: one for lists, as we intend to update them and enable more inputs; and another for inputting user statistics values.

  */
  const [list,SetList] = useState([]);
  const [input,SetInput] =  useState('');

  /*

 In this code snippet, we define an arrow function called "AddTodo" which takes an argument called "todo". Within the function, we create an object that contains two key-value pairs. The "id" key generates a random math number, while the "todo" key is equal to the "todo" parameter passed into the function.

We then use the "SetList()" function from the "useState" hook to add the object to the list. As long as the user continues to input more items, the objects will continue to be added to the list.

After adding the input, we use the "SetInput" function to clear all the input, making it easier to add more items without confusion.

  */

  const addTodo = (todo) =>{
    const newTodo = {
      id: Math.random(),
      todo: todo
    };

    console.log([...list,newTodo])
    SetList([...list,newTodo])

    if (input == ""){
      alert("Please Enter a value")

    }

    SetInput("");
  }

  /*
  The "remove" function is responsible for removing items from the todo list. It works by creating a constant variable that filters through the list. If the "todo.id" is not equal to the "id" of the item to be removed, it is kept in the list; otherwise, it is removed.

Once the filtering is done, the updated list is added to the state using the "SetList" function.
  */


  const removeItems = (id) =>{
    const newList = list.filter((todo)=> todo.id != id);

    console.log(newList)
    SetList(newList);
  }


  return (
    <div className="App">
      <Header/>
      <tr></tr>
      <input type="text" value={input} onChange={(e)=> SetInput(e.target.value)} placeholder="Enter a ToDo"/>
      <button onClick={()=> addTodo(input)} className="addbutton">Add</button>
      <ul>
        {list.map((todo)=> (
          <li className="todo" key={todo.id}>
            {todo.todo}
            <button className="removes" onClick={()=>removeItems(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <tr></tr>
    </div>
  );
}

export default App;
