import { ChevronRight, Trash, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)

    navigate(`/task?${query.toString()}`)
  }

  function onTaskCompleted(task) {
    onTaskClick(task.id)
    !task.isCompleted ? toast.success('Tarefa concluída com sucesso!') : toast.info('Tarefa retornada para "Pendente".')
  }

  function onTaskDelete(task) {
    onDeleteTaskClick(task.id)
    toast.success('Tarefa excluída com sucesso!')
  }

  return (
    <ul className="flex flex-col gap-3 p-6 bg-zinc-700 rounded-lg shadow">
      {tasks.map((task) => (
        <li className="flex items-center gap-3" key={task.id}>
          <button
            onClick={() => onTaskCompleted(task)}
            className={`block text-sm md:text-base text-start bg-zinc-600 text-white py-2 px-3 rounded-md cursor-pointer transition-all active:scale-[.97] ${task.isCompleted && "line-through"} text-ellipsis overflow-hidden whitespace-nowrap grow min-h-10`}>
            {task.isCompleted && <Check />}
            {task.title}
          </button>
          <button className="whitespace-nowrap bg-zinc-600 text-purple-400 py-2 px-3 rounded-md cursor-pointer transition-all active:scale-[.97] flex-none min-h-10" onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight />
          </button>
          <button className="whitespace-nowrap bg-zinc-600 text-red-400 py-2 px-3 rounded-md cursor-pointer transition-all active:scale-[.97] flex-none min-h-10" onClick={() => onTaskDelete(task)}
          >
            <Trash />
          </button>
        </li>
      ))}
      
      {tasks.length === 0 && <li className="opacity-60 text-center">Nenhuma tarefa registrada.</li>}
    </ul>
  )
}
