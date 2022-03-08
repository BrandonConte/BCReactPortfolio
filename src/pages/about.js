import React from 'react';
import picture from '../assets/images/brandonlinkedin.jpg';

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <img src ={picture} alt="Brandon Conte"/>
            <p>
            My name is Brandon Conte. Recent Full Stack Development graduate with a big passion for developing 
            scalable web applications and working across the full stack. 
            Have experience working in groups or alone to solve complex problems with code. I would like my future career to be one that will allow me to grow my skillset as a programmer and challenge me.
            </p>
        </section>
    )
}

export default About;