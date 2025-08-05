import { ChevronRight } from 'lucide-react'

export default function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-zinc-700 rounded-lg shadow">
      {props.tasks.map((task) => (
        <li className="flex items-center gap-4" key={task.id}>
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`w-full flex items-center justify-between bg-zinc-600 text-white py-2 px-3 rounded-md cursor-pointer ${task.isCompleted && "line-through"}`}>
            {task.title}
          </button>
          <button className="whitespace-nowrap bg-zinc-600 text-white py-2 px-3 rounded-md cursor-pointer" >
            <ChevronRight />
          </button>
        </li>
      ))}
    </ul>
  )
}
