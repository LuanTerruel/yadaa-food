import { useState } from "react"
import { MyNameIs } from './components/MyNamesIs'

export function App() {
   const [contador, setcontador] = useState (0)
    
   return (
    <>
    <button onClick={() => setcontador(contador + 1)}>Contar + 1</button>
    <h1>{contador}</h1>
    <MyNameIs name= "Luan" age= {15}/>
    </>
   )
}