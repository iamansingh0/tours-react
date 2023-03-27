import React from 'react'
import abtImg from '../images/about.jpg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
        <Title title='About' subtitle='us' />

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={abtImg}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
            At Escape Reality Tours, we specialize in immersive experiences that transport you to another world. Our expertly crafted adventures cater to all ages and interests, from puzzle-solving to adrenaline-pumping challenges.
            </p>
            <p>
            Our team of experienced game masters is dedicated to delivering top-notch customer service and ensuring your complete satisfaction. Come escape reality with us and create unforgettable memories with your friends and family.
            </p>
            <a href="#services" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
  )
}

export default About