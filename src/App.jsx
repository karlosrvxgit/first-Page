// import { useState } from 'react'

import './App.css'

function App() {
  return (

    <>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Test-page-web</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="./buscar/fonts/buscar.svg" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-cup-hot"
          viewBox="0 0 16 16"
        >

        </svg>
        <div className="buscar">
          <img src="icons/search.svg" alt="" />
          <img id="mic" src="icons/mic.svg" alt="" />
          <a href="" className="boton">
            <i className="icon-buscar" />
          </a>
        </div>
        <div className="container-button">
          <a href="#" className="one" />
          <a href="#" className="two" />
          <a href="#" className="three" />
          <a href="#" className="four" />
          <a href="#" className="five" />
        </div>
      </>

    </>
  )
}

export default App
