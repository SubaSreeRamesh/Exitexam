import { Route, Routes } from 'react-router-dom'
// import TodoItem  from './components/TodoItem';
import TodoList from './components/TodoItem';



function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<TodoList/>}/>
      </Routes>
      
    </>
  );
}

export default App;
