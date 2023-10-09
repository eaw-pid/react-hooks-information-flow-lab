import React from "react"


function Header({isDarkMode, onDarkModeClick}) {
    console.log(onDarkModeClick)
    function handleClick(){
        onDarkModeClick()
    }
  
    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
)
}

export default Header
