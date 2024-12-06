import { useState } from "react";
enum Type{
  INC,
  DEC
}
function App() {
  const [counter,setCounter]=useState<number>(0);
  
  function changeState(type: Type) {
    if (type === Type.INC) {
      setCounter(prev=>prev+1)
    } else if (type === Type.DEC) {
      setCounter(prev=>prev-1)
    } else {
      alert("INVALID TYPE !");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="grid grid-cols-4 gap-4">
          <span 
            className={`col-span-4 text-center text-4xl ${
              counter > 0 
                ? "text-blue-600/90" 
                : counter < 0 
                ? "text-red-600" 
                : "text-gray-900"
            }`}          
          >{counter}</span>
          <button
            onClick={()=>changeState(Type.DEC)}
            className="col-span-2 bg-red-600 px-6 py-2 rounded-sm text-white font-bold shadow-2xl"
          >
              -
          </button>
          <button
            onClick={()=>changeState(Type.INC)}
            className="col-span-2 bg-blue-600/90 px-6 py-2 rounded-sm text-white font-bold shadow-2xl"
          >
              +
          </button>
      </div>
    </div>
  );
}

export default App;
