import React from 'react'
import { Outlet } from 'react-router-dom'

function CommonLayout() {
  return (
    <div>
      <h1> this is common layout </h1>
      <Outlet/>
    </div>
  )
}

export default CommonLayout
