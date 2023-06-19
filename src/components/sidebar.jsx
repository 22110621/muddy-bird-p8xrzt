import React, { useEffect, useRef } from "react"
export const sidetray = React.createRef()

function Accessibility() {
  const dark = useRef()

  const closeSide = () => {
    sidetray.current.classList.remove("open")
    sidetray.current.setAttribute("aria-expanded", false)    
  }

  const togDarkMode = (toggle) => {
    toggle.target.checked ?
    document.body.setAttribute("data-theme", "dark") &
     localStorage.setItem("data-theme", "dark")
    :
    document.body.removeAttribute("data-theme") &
     localStorage.removeItem("data-theme")
  }

  useEffect(() => {
    if (localStorage.getItem("data-theme")) {
     dark.current.checked = true
    }
  }, [])
  
  
  return (
    <div className="sidetray" aria-expanded="false" ref={sidetray}>
    <div className="close"><button data-side-close onClick={closeSide}>X</button></div>
    <div className="title"><h1>Accessibillity</h1></div>
    <div className="settings">
      <div className="form-group">
        <h2 htmlFor="dark">Dark Mode</h2>
        <div className="toggle-switch">
          <label>
            <input type="checkbox" onChange={togDarkMode} ref={dark}/>
            <span className="slider" />
          </label>
        </div>
      </div>
      <div className="form-group">
        <h2 htmlFor="dark">High Contract</h2>
        <div className="toggle-switch">
          <label>
            <input id="tog_contrast" type="checkbox"/>
            <span className="slider" />
          </label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Accessibility