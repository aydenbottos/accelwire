import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './services-card.module.css'

const ServicesCard = (props) => {
  return (
    <div className={projectStyles['services-card']}>
      <div className={styles['container']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
      </div>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
    </div>
  )
}

ServicesCard.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/website-200h.png',
  text: 'Website design',
  text1: 'We can develop the website of your dreams.',
}

ServicesCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default ServicesCard
