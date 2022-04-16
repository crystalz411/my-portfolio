import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard',
        github: 'https://github.com',
        demo: 'https://github.com', 
    },
    {
        id: 2,
        image: IMG1,
        title: 'HabitMakr',
        github: 'https://github.com',
        demo: 'https://github.com', 
    },
    {
        id: 3,
        image: IMG1,
        title: 'Counting Game',
        github: 'https://github.com',
        demo: 'https://github.com', 
    },
    {
        id: 4,
        image: IMG1,
        title: 'Shopify websites',
        github: 'https://github.com',
        demo: 'https://github.com', 
    }
 ]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
               {
                   data.map(({id, image, title, github, demo}) => {
                       return (
                        <article key={id} className='portfolio_item'>
                            <div className="portfolio_item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio_item-cta'>
                                <a href={github} className='btn'>Github</a>
                                <a 
                                href={demo} 
                                className='btn btn-primary' 
                                target='_blank' rel="noreferrer">
                                    Live Demo
                                </a>
                            </div>
                        </article>
                       )

                   })
               }
            </div>
            
        </section>
    )

}

export default Portfolio