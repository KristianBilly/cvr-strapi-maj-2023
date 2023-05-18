import { useEffect, useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState([])

  const fetchData = async () => {
    const reponse = await fetch('http://localhost:1337/api/to-dos/')
    const result = await reponse.json()
    setTodos(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="flex flex-col justify-center items-center p-2">
      <div className="mt-2 w-64">
        <div className="border-r-4 border-indigo-500 pb-0">Todos</div>
        {todos
          .sort((a, b) =>
            b.attributes.createdAt.localeCompare(a.attributes.createdAt)
          )
          .map((todo) => {
            return (
              <div className=" flex justify-between border border-sky-500 p-2 text-indigo-700 rounded-sm mt-2 mb-0">
                <p>{todo.attributes.todoText}</p>
              </div>
            )
          })}
      </div>
    </main>
  )
}
