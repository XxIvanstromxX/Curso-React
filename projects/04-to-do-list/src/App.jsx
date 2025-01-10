function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8">
        To Do List
      </h1>
      <div className="flex justify-center mt-8 gap-2">
        <input type="text" className="w-96 border-2 border-blue-700 rounded px-4 py-2" placeholder="Inserta alguna tarea"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar
        </button>
      </div>

      
    </>
  )
}

export default App
