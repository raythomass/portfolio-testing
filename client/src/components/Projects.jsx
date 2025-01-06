import React from 'react'
import Slider from "react-slick";

const Projects = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <section id='projects' className='projects'>
            <h1>Projects</h1>
            {/* <Slider {...settings} className='gap-4 mt-6'> */}
                    <section className='flex'>
                        <div className='projects-card flex flex-col flex-nowrap p-4'>
                            <div className='projects-img-container'>
                                <img className='projects-img' src='/public/streaming-app.jpg'></img>
                            </div>
                            <h3 className='mt-2'>Streaming App</h3>
                            <p className='p-4'>
                                This front-end project allows users to discover trending movies and tv shows, as well as
                                search for their favorites. Utilizing the Movie Database API, this projects allows users to
                                find almost any type of film mdeia they can think of.
                            </p>
                            <div className='projects-btn mt-6 mb-4 flex justify-evenly'>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Github</a>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Live Site</a>
                            </div>
                        </div>
                        <div className='projects-card p-4'>
                            <div className='projects-img-container'>
                                <img className='projects-img' src='/public/weather-forecast.jpg'></img>
                            </div>
                            <h3 className='mt-2'>Weather Forecast</h3>
                            <p className='p-4'>
                                The weather forecast app prompts a user to search a city. Upon entering a city, the weather forecast app will populate
                                the page with the forecast details of the city the user has searched.
                            </p>
                            <div className='projects-btn mt-6 mb-4 flex justify-evenly'>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Github</a>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Live Site</a>
                            </div>
                        </div>
                        <div className='projects-card p-4'>
                            <div className='projects-img-container'>
                                <img className='projects-img' src='/public/football-database.jpg'></img>
                            </div>
                            <h3 className='mt-2'>Football Database</h3>
                            <p className='p-4'>
                                This application is designed to use Sports API to fetch and display information about 
                                any football player from any team. Also, Ticketmaster API is used to display tickets to
                                upcoming games and will direct the user to the Ticketmaster site.
                            </p>
                            <div className='projects-btn mt-6 mb-4 flex justify-evenly'>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Github</a>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Live Site</a>
                            </div>
                        </div>
                    </section>
                    <section className='flex'>
                        <div className='projects-card p-4'>
                            <div className='projects-img-container'>
                                <img className='projects-img' src='/public/coding-quiz.jpg'></img>
                            </div>
                            <h3 className='mt-2'>Coding Quiz</h3>
                            <p className='p-4'>
                                This coding quiz allows the user to test thier coding knowledge by taking
                                a short quiz and seeing their total score.
                            </p>
                            <div className='projects-btn mt-6 mb-4 flex justify-evenly'>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Github</a>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Live Site</a>
                            </div>
                        </div>
                        <div className='projects-card p-4'>
                            <div className='projects-img-container'>
                                <img className='projects-img' src='/public/password-generator.jpg'></img>
                            </div>
                            <h3 className='mt-2'>Password Generator App</h3>
                            <p className='p-4'>
                                Users in need of a password can simply answer some questions that determine
                                length, characters, etc and will be given a password to their specification.
                            </p>
                            <div className='projects-btn mt-6 mb-4 flex justify-evenly'>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Github</a>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Live Site</a>
                            </div>
                        </div>
                        <div className='projects-card p-4'>
                            <div className='projects-img-container'>
                                <img className='projects-img' src='/public/work-scheduler.jpg'></img>
                            </div>
                            <h3 className='mt-2'>Daily Scheduler</h3>
                            <p className='p-4'>
                            This application allows the user to set a schedule for their workday
                            by adding notes and reminders for their daily tasks corresponding to the time they take place.
                            </p>
                            <div className='projects-btn mt-6 mb-4 flex justify-evenly'>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Github</a>
                                <a href='#' className='pt-2 pb-2 pl-6 pr-6'>Live Site</a>
                            </div>
                        </div>
                    </section>
            {/* </Slider> */}
        </section>
    )
}

export default Projects
