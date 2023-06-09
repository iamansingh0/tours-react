import React from 'react'
import Title from './Title'
// import img1 from '../images/tour-1.jpeg'
import { tours } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour, index) => {
          const { id, img, date, title, text, country, duration, price } = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={title} />
                <div className="num">

                {index + 1}
                </div>
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
