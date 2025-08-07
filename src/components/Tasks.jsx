import { ChevronRight, Trash, Check } from 'lucide-react'
import { toast } from 'react-toastify'

export default function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <ul className="space-y-3 p-6 bg-zinc-700 rounded-lg shadow">
      {tasks.map((task) => (
        <li className="flex items-center gap-3" key={task.id}>
          <button
            onClick={() => {
              onTaskClick(task.id)
              !task.isCompleted ? toast.success('Tarefa concluída com sucesso!') : toast.info('Tarefa retornada para "Pendente".')
            }}
            className={`w-full flex items-center gap-2 bg-zinc-600 text-white py-2 px-3 rounded-md cursor-pointer ${task.isCompleted && "line-through"}`}>
            {task.isCompleted && <Check />}
            {task.title}
          </button>
          <button className="whitespace-nowrap bg-zinc-600 text-white py-2 px-3 rounded-md cursor-pointer" >
            <ChevronRight />
          </button>
          <button className="whitespace-nowrap bg-zinc-600 text-white py-2 px-3 rounded-md cursor-pointer" onClick={() => onDeleteTaskClick(task.id) }>
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  )
}
