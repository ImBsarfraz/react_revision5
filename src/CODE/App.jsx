import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import UseRefHook from '../HOOKS/UseRefHook';
import UseContextHook from '../HOOKS/UseContextHook';
import UseReducer from '../HOOKS/UseReducer';
import UseMemo from '../HOOKS/UseMemo';
import UseCallbackHook from '../HOOKS/UseCallbackHook';
import CustomHook from '../HOOKS/CustomHook';


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

          <Route path='/ClassComponent' element={<ClassComponent />} />
          <Route path='/UseStateHook' element={<UseStateHook />} />
          <Route path='/UseEffectHook' element={<UseEffectHook />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/ReadList' element={<ReadList />} />
          <Route path='/Edit/:id' element={<Edit />} />
          <Route path='/Delete/:id' element={<Delete />} />
          <Route path='/UseRefHook' element={<UseRefHook />} />
          <Route path='/UseContextHook' element={<UseContextHook />} />
          <Route path='/UseReducer' element={<UseReducer />} />
          <Route path='/UseMemo' element={<UseMemo num={5} />} />
          <Route path="/UseCallbackHook" element={<UseCallbackHook />} />
          <Route path='/CustomHook' element={<CustomHook />} />

        </Routes>
      </Router>

    </>
  )
}
