import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import projectStyles from '../style.module.css'
import styles from './navigation.module.css'

const Navigation = (props) => {
  return (
    <header data-role="Header" className={styles['header']}>
      <div className={styles['max-width']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <div className={styles['nav']}>
          <a
            href="mailto:sales@accelwire.au?subject=Consultation"
            className={` ${styles['register']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['button-md']} `}
          >
            {props.button}
          </a>
        </div>
        <div data-type="BurgerMenu" className={styles['burger-menu']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className={projectStyles['mobile-menu']}>
          <div className={styles['nav1']}>
            <div className={styles['container']}>
              <img alt={props.image_alt1} src={props.image_src1} />
              <div
                data-type="CloseMobileMenu"
                className={styles['close-mobile-menu']}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="root-class-name18"></NavigationLinks>
            <button
              className={` ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['button-md']} `}
            >
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  image_src: '/playground_assets/accelwirelogo-200h.png',
  button: 'Get in touch',
  image_alt1: 'image',
  image_src1: '/playground_assets/logo1-1500h.png',
  button2: 'Get in touch',
  image_alt: 'logo',
}

Navigation.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  button2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Navigation
