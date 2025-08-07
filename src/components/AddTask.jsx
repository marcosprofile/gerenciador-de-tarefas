import { useState } from "react"
import { toast } from 'react-toastify'

export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="flex flex-col gap-3 p-6 bg-zinc-700 rounded-lg shadow">
      <input 
        type="text"
        className="bg-zinc-600 py-2 px-3 rounded-md focus:outline-0" 
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input 
        type="text" 
        className="bg-zinc-600 py-2 px-3 rounded-md focus:outline-0" placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-purple-600 py-2 px-3 rounded-md font-semibold cursor-pointer transition-all active:scale-[.97]"
        onClick={() => {
          const notTitle = !title.trim()
          const notDescription = !description.trim()

          if (notTitle && notDescription) {
            toast.error('Preencha o título e a descrição da tarefa.')
          } else if (notTitle) { 
            toast.error('Preencha o título da tarefa.')
          } else if (notDescription) {
            toast.error('Preencha a descrição da tarefa.')
          } else {
            onAddTaskSubmit(title, description)
            setTitle('')
            setDescription('')
            toast.success('Tarefa criada com sucesso!')
          }
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  )
}
