import React from "react"

const MenuToggoleContext=React.createContext({
    isMenuToggoled:false,
    onMenuToggling:()=>{}
})

export default MenuToggoleContext