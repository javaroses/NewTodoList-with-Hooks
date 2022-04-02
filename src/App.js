import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([])
  const [form,setForm] = useState({
    todo:" ",
    status: false
  })

  const resetInput=()=>{
    setForm({
      todo: "",
      status: false
    })
  }
  const handleChange =(e)=>{
    setForm({
      todo: e.target.value,
      status: false
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    setTodoList([
      ...todoList, 
      form
    ])
    resetInput()
  }

  const handleCheck = (index)=>{
    const newTodo = todoList.map((e, i) =>{
      if(i === index){
        return{
          todo: e.todo,
          status: true
        }
      }else{
        return e
      }
    })
   setTodoList(newTodo)
  }

  return (
  <div>
      <div className="jumbotroon">
          <h1>Todo List App</h1>
          <form action="" method ="post" onSubmit={handleSubmit}className="form">
              <button className="btn-submit" type='submit'>submit</button>
              <input type="text" value={form.todo} onChange ={handleChange} placeholder="isi slurs.."name='todo'/>
          </form>
      </div>
      
      <div className='content'>
        {todoList.map((e, i)=>(
          <div key={i} className='card'>
            <div className="action">
              <input type="checkbox" onChange={()=>handleCheck(i)}/>
            </div>
            <div className="text">
              {e.todo}
            </div>
          </div>
        ))
        }
      </div>
  </div>


  );
}

export default App;
