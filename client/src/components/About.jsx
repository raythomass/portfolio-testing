import React from 'react'

const About = () => {
    return(
       <div id='about' className='about'>
        <h1>About</h1>

        <div className='about-summary mt-6'>
            <h3>Background</h3>
            <p className='mt-2'>
            I graduated from Arizona State University in February 2024 with a certificate of completion from the Full-Stack Web Development Bootcamp. 
            I also graduated from Grand Canyon University in 2021 with a Bachelor's Degree in Advertising and Graphic Design. I am excited and motivated 
            to pair my knowledge of multiple coding languages, frameworks, and technologies with my background in graphic and web design to create business 
            solutions and solve both front-end and back-end problems. Having knowledge of both design and development, I have a wide variety of skills that 
            are useful in developing web applications and websites.
            </p>
        </div>
        <div className='about-education mt-10'>
            <h3>Education</h3>
            <div className='about-education-cards lg:flex lg:justify-between md:flex md:justify-between mt-2'>
                <div className='education-card'>
                    <p className='education-highlight'>Certificate of Completion</p>
                    <h4>Full-Stack Web Development</h4>
                    <h4>Arizona State University</h4>
                    <p className='education-highlight mt-4'>Skills/ Tasks</p>
                    <ul>
                        <li>Developed and deployed web applications using industry standard programming technologies</li>
                        <li className='mt-2'>Collaborated on projects to understand project management within a development team</li>
                    </ul>
                </div>
                <div className='education-card'>
                    <p className='education-highlight'>Bachelor's of Fine Art</p>
                    <h4>Advertising and Graphic Design</h4>
                    <h4>Grand Canyon University</h4>
                    <p className='education-highlight mt-4'>Skills/ Tasks</p>
                    <ul>
                        <li>Crafted and currated advertising packages using multiple design mediums</li>
                        <li className='mt-2'>Designed web applications and websites using industry leading design software</li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    )
}

export default About
