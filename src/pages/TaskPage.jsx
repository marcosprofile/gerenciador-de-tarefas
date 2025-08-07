import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen flex justify-center p-4 md:p-6 bg-zinc-800 text-white">
      <div className="w-[500px] flex flex-col gap-8">
        <div className="grid grid-cols-3 items-center">
          <button className="cursor-pointer" onClick={() => navigate(-1)}>
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-zinc-100 font-bold text-center">
            Detalhes
          </h1>
        </div>

        <div className="w-full h-[1px] bg-zinc-700"></div>

        <div className="flex flex-col gap-6 p-4 md:p-6 bg-zinc-700 rounded-lg">
          <h2 className="text-2xl text-zinc-100 font-bold text-center">{title}</h2>
          <p className="opacity-60">{description}</p>
        </div>
      </div>
    </div>
  )
}
