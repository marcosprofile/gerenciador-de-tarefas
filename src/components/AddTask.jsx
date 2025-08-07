import { useState } from "react"

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
        className="bg-zinc-900 py-2 px-3 rounded-md font-semibold cursor-pointer transition-all active:scale-[.97]"
        onClick={() => {
          onAddTaskSubmit(title, description)
          setTitle('')
          setDescription('')
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  )
}
