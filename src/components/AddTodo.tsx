import { useState } from "react"

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState('');


  return (
    <form action="" onSubmit={}>
          <input type="text" placeholder="Novo to-do" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
          <button type="submit">Adicionar</button>
    </form>
  )
}

export default AddTodo