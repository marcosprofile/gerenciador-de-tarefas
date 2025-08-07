import { ChevronRight, Trash, SquareCheck, Square } from 'lucide-react'
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
    <ul className="flex flex-col gap-3 p-3 md:p-6 bg-zinc-700 rounded-lg shadow">
      {tasks.map((task) => (
        <li className="grid grid-cols-[24px_1fr_40px_40px] items-center gap-3" key={task.id}>
          <button onClick={() => onTaskCompleted(task)} className="cursor-pointer">
            {!task.isCompleted && <Square />}
            {task.isCompleted && <SquareCheck />}
          </button>
          <button
            className={`flex items-center gap-2 w-full overflow-hidden text-sm md:text-base text-start bg-zinc-600 text-white py-2 px-3 rounded-md ${task.isCompleted && "line-through"} min-h-10`}>
            <span className="block text-ellipsis whitespace-nowrap overflow-hidden">{task.title}</span>
          </button>
          <button className="flex items-center bg-purple-400/15 text-purple-400 py-2 px-3 rounded-md cursor-pointer transition-all active:scale-[.97] flex-none min-h-10" onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight />
          </button>
          <button className="flex items-center bg-red-300/15 text-red-300 py-2 px-3 rounded-md cursor-pointer transition-all active:scale-[.97] flex-none min-h-10" onClick={() => onTaskDelete(task)}
          >
            <Trash />
          </button>
        </li>
      ))}
      
      {tasks.length === 0 && <li className="opacity-60 text-center">Nenhuma tarefa registrada.</li>}
    </ul>
  )
}
