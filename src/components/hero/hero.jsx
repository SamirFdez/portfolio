import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import { useLottie } from 'lottie-react';
import Animation from "../../assets/images/animation.json";

export const Hero = () => {

    const options = {
        animationData: Animation,
        loop: true
      };
    
      const { View } = useLottie(options);

  return (
    <section class="d-flex align-items-center hero" id="home">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 pt-5 pt-xl-0 order-2 order-lg-2">
                    <h4>
                        Hi, my name is
                    </h4>
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
                                "I am a web developer",
                                "I build things for the web"
                                ],
                            }}
                        />
                    </h2>
                    <h3>
                        I'm a front-end software engineer passionate about turning ideas into lines
                        of code and creating functional, accessible and useful web applications.
                    </h3>
                </div>
                
                <div class="col-xl-6 order-1 order-xl-2 hero-img">
                    {View}

                </div>
            </div>
        </div>
    </section>
  )
}
