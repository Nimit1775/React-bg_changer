import { useState } from "react"

function App() {
  const [colour , Setcolour] = useState("white")

  return (
    <div className="w-full h-screen duration-200" 
     style={{backgroundColor: colour }}
   >
    <div className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2 " >
            <div className="flex flex-wrap
            justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl" >
                <button 
                onClick={() => Setcolour("red")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "red"}}
                 > Red 
                </button>
                <button 
                 onClick={() => Setcolour("green")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "green"}}
                 > Green
                </button>
                <button 
                 onClick={() => Setcolour("blue")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "blue"}}
                 > Blue 
                </button>
                <button 
                 onClick={() => Setcolour("black")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "black"}}
                 > Black                  
                </button>
                <button 
                 onClick={() => Setcolour("olive")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "olive"}}
                 > Olive                  
                </button>
                <button 
                 onClick={() => Setcolour("purple")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "purple"}}
                 > Purple                  
                </button>
                <button 
                 onClick={() => Setcolour("violet")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "violet"}}
                 > Violet                  
                </button>
                <button 
                 onClick={() => Setcolour("  turquoise")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "turquoise"}}
                 > Turquoise                  
                </button>
                <button 
                 onClick={() => Setcolour("pink")}
                className="outline-none px-4 
                 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "pink"}}
                 > Pink                   
                </button>
                <button 
                  onClick={() => Setcolour("white")}
                className="outline-none px-4 
                 py-1 rounded-full text-black shadow-lg"
                style={{backgroundColor: "white"}}
                 > RESET 
                </button>
            </div>
      </div>  
    </div>
  )
}

export default App
