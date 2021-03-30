import React, {useState} from 'react'
import List from './List'
import AddTodo from './AddTodo'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (item) => {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }
  return(
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos}/>
    </div>
  )
}
export default App