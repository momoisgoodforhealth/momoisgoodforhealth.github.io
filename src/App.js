import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './styling.css'

const App = () => {
 
    return (
        <div class="container">
            <h2>Hi, this is Shovan.</h2>
            <h3>An ECE wannabe. </h3>
            <p>shovanshakya@usf.edu | 8138096496</p>
            <a href="https://github.com/momoisgoodforhealth">My Github</a>
            <br />
            <a href="resume.pdf" download>Download my Resume!</a>
            <br />
            
            <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}}/>
            <h1>You can find my some of my work below:</h1>
            <br />
            <a href="https://bci-fnirs.github.io/">Functional Near Infrared Spectroscopy Headset - Capstone Link</a>
            <img src={'./IMG_3250.jpg'} />
            <br />
            <br />
            
            <a href="https://github.com/momoisgoodforhealth/Zynq-BRAM-PL-PS">Zynq BRAM share PS PL</a>
            <p>SystemVerilog, C</p>
            <img src={'./bram.png'} />
            <br />

            <a>STM32 IMU Sensor Platform with CAN and Ethernet</a>
            <img src={'./moduleschem.png'} />
            <img src={'./modulepcb.png'} />
            <img src={'./module3d1.png'} />
            <img src={'./module3d2.png'} />
            
            <br />


            <a href="https://www.mbari.org/">Monterey Bay Aquarium Research Institute</a>
            <br />
            <a href="https://github.com/momoisgoodforhealth/Stereovision"> -- Fisheye Stereo Disparity, (Auto) Distance Estimation</a>
            <br />
            <ReactPlayer url='https://youtu.be/HjspPxy8HYE' />
            <ReactPlayer url='https://youtu.be/-WozIKdKqKQ' />
            <ReactPlayer url='https://youtu.be/YaTxnYlS3kk' />
            <br />

            <a>16 Bit RISC-V Microprocessor - FPGA Implementation</a>
            <img src={'./mips.png'} />
            <br />

            <a href="https://github.com/momoisgoodforhealth/ML/blob/main/EEL4774_finalreport.pdf" >Image Classification Methods on Custom Data</a>
            <img src = {'./ML.png'} />
            <img src = {'./MLarch.png'} />
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