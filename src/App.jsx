
import './App.css'
import Get from './Get'
import Register from './Register'
import Map from './Map'
import MapIndex from './MapIndex'
import Greet from './Greet'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Create from './Create'
import GreetContent from './GreetContent'
import Ref from './Ref'
import Reducer from './Reducer'
function App() {
  return (
    <>
    <h2>Hello world</h2>
      {/* <Register /> */}
      {/* <Get/> */}
      {/* <Map/> */}
      {/* <MapIndex/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/greet' element={<Greet />}>
          <Route index element={<GreetContent />} />
          <Route path='login' element={<Login />} />
          <Route path='create' element={<Create />} />
        </Route>
        <Route path="*" element={<h2>404 not found</h2>}/>
      </Routes> */}
      {/* <Ref/> */}
      <Reducer/>



    </>
  )

}

export default App
