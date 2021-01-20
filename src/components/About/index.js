import React from 'react';
import nikitaPhoto from '../../assets/images/recent-photo.png'

import './style.css'

const About = () => {
    return (
        <section className='my-5 about' name='container' style={{'textAlign': 'center'}}>
            <div className=''>
                <img className='bio-photo' alt='Nikita' src={nikitaPhoto}/>
            </div>
            <h1 id='about'>About Nikita</h1>
            <p className='text-background' id='aboutText'>
                My name is Nikita Pokamestov and I am a novice full stack developer. I began my journey in software engineering in the second half of 2020.
                The reason why I started on my path to learn how to become a full stack developer was because I had reached a point in my life where I fianlly realized what I wanted to
                do as a career. This occurred to me when I found myself constantly staying as informed as possible on the latest tech news and products. 
                <br />
                Since I was a child I have always had an inclination towards computers and electronics. It was always a hobby and a fascination, but never something I choose to dive deeply into in terms of
                software development. Growing up I found myself always tickering with things and using my hands to build or fix things. Because of this I never really thought about software
                development. Only until after graduating college with a degree in health sciences and figuring out that what I wanted to do was not that. I came to the conclusion that there 
                is no better field for me at this point other than software engineering that would allow me to tinker, but more with my mind and in a world of boundless possibilies. <br />
                Having learned and practiced for many hours this past half year, I have to admit that taking on this endeavor has been one of, if not the most challenging goal I have set for myself.
                Despite the challenges and sleepless nights, this journey has been incredibly rewarding and I am so happy I finally decided to pursue this path. <br />
                Feel free to check out my work and fill out the contact form if you'd like to get in touch with me!

            </p>
        </section>
    )
};

export default About;