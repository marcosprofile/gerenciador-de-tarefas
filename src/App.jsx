import { useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        title: "Estudar programação",
        description: "Estudar programação para me tornar um desenvolvedor Full Stack.",
        isCompleted: false
      },
      {
        id: 2,
        title: "Estudar inglês",
        description: "Estudar inglês para me tornar fluente.",
        isCompleted: false
      },
      {
        id: 3,
        title: "Estudar matemática",
        description: "Estudar matemática para me tornar um desenvolvedor Full Stack.",
        isCompleted: false
      },
    ]
  )

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task
    })

    setTasks(newTasks)
  }

  return (
    <div className="w-screen h-screen flex justify-center p-6 bg-zinc-900 text-white">
      <div className="w-[500px] flex flex-col gap-8">
        <h1 className="text-3xl text-zinc-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />
      </div>
    </div>
  )
}

export default App
