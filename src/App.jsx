import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { NavBar, HomePage} from './components'

const App = () => {
  return (
   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path={`/portfolio/`} element={<HomePage/>}/>
    </Routes>
    
   </BrowserRouter>
  )
}

export default App