import React from 'react'
import Header from './Component/Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}
