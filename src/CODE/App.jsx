import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent';
// import data from './MapData';
import UseStateHook from '../HOOKS/UseStateHook';
import UseEffectHook from '../HOOKS/UseEffectHook';
import Create from '../CRUD/Create';
import ReadList from '../CRUD/ReadList';
import Edit from '../CRUD/Edit';
import Delete from '../CRUD/Delete';


export const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>

          <Route path="/" element={<FunctionComponent
            // name={data[0].name}
            // position={data[0].designation}
            // experience={data[0].experience}
          />} />
          
          <Route path='/ClassComponent' element={<ClassComponent />}/>
          <Route path='/UseStateHook' element={<UseStateHook />} />
          <Route path='/UseEffectHook' element={<UseEffectHook />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/ReadList' element={<ReadList />} />
          <Route path='/Edit/:id' element={<Edit />} />
          <Route path='/Delete/:id' element={<Delete />} />
        </Routes>
      </Router>
      
    </>
  )
}
