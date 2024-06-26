import Column from "./components/Column"
import "../src/Styles/App.css"


function App() {

  return (
    
    <div className='container bg-tertiary min-h-screen min-w-full flex justify-center items-start'>
      
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
      
    </div>
  )
}

export default App 
