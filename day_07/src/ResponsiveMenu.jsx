import React from 'react'
import moduleStyle from './Menu.module.css'
function ResponsiveMenu() {
  return (
    <>
    <div className={moduleStyle.visible} >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
        </ul>      
    </div>
    </>
  )
}

export default ResponsiveMenu
