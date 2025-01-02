import React from 'react'

const Header = () => {
    return(
        <header className='border-4 border-rose-600 flex'>
            <section className='header-titles flex flex-col'>
                <h4>Hello! My name is</h4>
                <h1>Ray Thomas</h1>
                <h4> I'm a <a>Web Developer</a> & <a href="https://www.behance.net/raythomasdesign">Graphic Designer</a> from Phoenix, AZ</h4>
            </section>
            {/* <div>
                <h1>TypeScale Test</h1>
                <br></br>
                <h1>DM Sans TypeScale Test</h1>
                <h2>DM Sans TypeScale Test</h2>
                <h3>DM Sans TypeScale Test</h3>
                <p>DM Sans TypeScale Test</p>
            </div> */}
        </header>
    )
}

export default Header
