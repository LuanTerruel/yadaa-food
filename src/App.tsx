import { useState } from "react"

export function App() {
   const [contador, setcontador] = useState (0)
    
   return (
    <>
    <button onClick={() => setcontador(contador + 1)}>Contar + 1</button>
    <h1>{contador}</h1>
    </>
   )
}