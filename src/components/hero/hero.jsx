import React from 'react'
import TypewriterComponent from 'typewriter-effect'

export const Hero = () => {
  return (
    <section class="d-flex align-items-center hero" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1">
                    <h3>
                        Hi, my name is
                    </h3>
                    <h1>
                        Samir Fernández
                    </h1>
                    <h2>
                        <TypewriterComponent
                            options={{
                            autoStart: true,
                            loop: true,
                            delay: 160,
                            strings: [
                                "I build things for the web", 
                                "I am a web developer",
                                
                            
                            ],
                            }}
                        />
                    </h2>
                    <h4>
                        I'm a front-end software engineer passionate about turning ideas into lines
                        of code and creating functional, accessible and useful web applications.
                    </h4>
                </div>
                
                <div class="col-lg-5 order-1 order-lg-2 hero-img">

                </div>
            </div>
        </div>
    </section>
  )
}
