import React from 'react'
import ReactDOM from 'react-dom'
import Info from '/components/Info.js'
import MainAbout from '/components/MainAbout.js'
import Footer from '/components/Footer.js'

function App(){
    return(
        <div id='app'>
            <Info />
            <MainAbout />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))