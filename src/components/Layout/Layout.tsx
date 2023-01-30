import React from 'react'
import Navbar from '../Navbar/Nabar'

const Layout:React.FC = ({children}:any) => {
  return (
    <div>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout