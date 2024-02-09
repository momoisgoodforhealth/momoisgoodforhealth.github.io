import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './styling.css'

const App = () => {
 
    return (
        <div class="container">
            <h2>Hi, this is Shovan.</h2>
            <h3>An EECS wannabe. </h3>
            <p>shovanshakya@usf.edu | 8138096496</p>
            <a href="https://github.com/momoisgoodforhealth">My Github</a>
            <br />
            <a href="Shovan_Resume.pdf" download>Download my Resume!</a>
            <br />
            
            <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}}/>
            <h1>You can find my some of my work below:</h1>
            <br />
            <a>RISC-V Microprocessor - FPGA Implementation (in progress)</a>
            <img src={'./mips.png'} />
            <br />
            <a>Simple 5V to 3.3V LDO Regulator</a>
            <img src={'./ldo3d.png'} />
            <img src={'./ldo2d.png'} />
            <img src={'./ldoschem.png'} />
            <br />
            <a>STM32 Based PCB Design for Custom EEG (in progress)</a>
            <img src={'./schem.png'} />
            <img src={'./3s.png'} />
            <br />
            <a href="https://www.mbari.org/">Monterey Bay Aquarium Research Institute</a>
            <br />
            <a href="https://github.com/momoisgoodforhealth/Stereovision"> -- Fisheye Stereo Disparity, (Auto) Distance Estimation</a>
            <br />
            <ReactPlayer url='https://youtu.be/HjspPxy8HYE' />
            <ReactPlayer url='https://youtu.be/-WozIKdKqKQ' />
            <ReactPlayer url='https://youtu.be/YaTxnYlS3kk' />
            <br />
            <a href="http://reedlab.eng.usf.edu/">Rehabilitation Engineering and Electromechanical Design Lab(REED)</a>
            <br />
            <a href="https://github.com/momoisgoodforhealth/IAE-Driving-Sim"> -- CAREN Driving Simulator with Motion Base</a>
            <br />
            <ReactPlayer url='https://youtu.be/BI3HAqEKuM8' />
            <br />
            <a href="https://github.com/momoisgoodforhealth/BullsSnapchatAR">Bulls AR Snapchat (Hackabulls 2022)</a>
            <br />
            <a href="https://github.com/momoisgoodforhealth/Khel-Android-App">Khel Android App</a>
            <img src={'./khel.png'} />
            <br />
            <a href="https://momoisgoodforhealth.itch.io/five-nights-at-the-student-center">5 Nights at the Student Center Game</a>
            <br />
            <a href="Portfolio_reduced.pdf" download>Design Portfolio(2021)</a>

        </div>
        
        )
}

export default App