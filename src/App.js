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
      ...form,
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

 const handleDelete = (index)=>{
   const newTodo = todoList.filter((e, i)=>{
     if(i !== index){
       return e
     }
   })
   setTodoList(newTodo)
 }

    const handleEdit = (index) =>{
      const detailTodo = todoList[index]
      setForm(detailTodo)
  }

  return (
  <div>
      <div className="jumbotroon">
          <h1>Todo List App</h1>
          <form action="" method ="post" onSubmit={handleSubmit}className="form">
              <input type="text" value={form.todo} onChange ={handleChange} placeholder="isi slurs.."name='todo'/>
              <button className="btn-submit" type='submit'>submit</button>
          </form>
      </div>
      
      <div className='content'>
        {todoList.map((e, i)=>(
          <div key={i} className='card'>
            <div className="action">
              <input type="checkbox" checked={e.status?true:false} onChange={()=>handleCheck(i)}/>
            </div>
            <div className="text">
              {e.todo}
            </div>
            <div className="button-action">
              <button className='btn-edit'onClick={()=>handleEdit(i)}>Edit</button>
              <button className='btn-delete' onClick={()=>handleDelete(i)}>Delete</button>
              </div>
          </div>
        ))
        }
      </div>
  </div>


  );
}

export default App;
