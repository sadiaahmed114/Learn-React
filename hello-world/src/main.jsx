import Chai from "./App"
import { createRoot } from 'react-dom/client'

function App(){
  return (
  <><h1>React FrameWork 1</h1><Chai /></>
)
}
createRoot(document.getElementById('root')).render(
    <App /> 
);
