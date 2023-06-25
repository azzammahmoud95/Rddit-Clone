import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from '../../pages/home/index.js'

import { BrowserRouter } from 'react-router-dom';
export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}