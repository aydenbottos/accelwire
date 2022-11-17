import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Accelwire</title>
        <meta property="og:title" content="Accelwire" />
      </Helmet>
      <Navigation></Navigation>
      <main className={styles['main']}>
        <div
          className={` ${styles['hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                Create your future with us.
              </h1>
              <span className={styles['text01']}>
                <span>
                  We are an IT agency based in Sydney, with the skills and
                  expertise
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>to build whatever you can dream up.</span>
              </span>
              <a
                href="mailto:sales@accelwire.au?subject=Consultation"
                className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
              >
                Get in touch with us
              </a>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['services']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container1']}>
              <div className={styles['text-container']}>
                <span className={styles['text05']}>our services</span>
                <h2 className={projectStyles['heading2']}>
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative solutions</span>
                </h2>
              </div>
            </div>
            <div className={styles['cards-container']}>
              <ServicesCard></ServicesCard>
              <div className={projectStyles['services-card']}>
                <div className={styles['container1']}>
                  <img
                    alt="image"
                    src="/playground_assets/file-document-200w.png"
                    className={styles['image']}
                  />
                </div>
                <span className={styles['text10']}>IT consultation</span>
                <span className={styles['text11']}>
                  Our team of experts can create an IT solution suited to your
                  business.
                </span>
              </div>
              <div className={projectStyles['services-card']}>
                <div className={styles['container2']}>
                  <img
                    alt="image"
                    src="/playground_assets/dice-5-200h.png"
                    className={styles['image01']}
                  />
                </div>
                <span className={styles['text12']}>App design</span>
                <span className={styles['text13']}>
                  We can create an app perfect for your business.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container1']}>
              <span className={styles['text14']}>our work</span>
              <h2
                className={` ${styles['text15']} ${projectStyles['heading2']} `}
              >
                <span>Explore our portfolio</span>
              </h2>
              <span className={styles['text17']}>
                We have worked on numerous projects for happy clients all around
                Australia.
              </span>
            </div>
            <div className={styles['tab-selector-cards-container']}>
              <div className={styles['speaker-card']}>
                <div className={styles['image-container']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHdlYnNpdGV8ZW58MHx8fHwxNjYyNjM5NjIw&amp;ixlib=rb-1.2.1&amp;w=1000"
                    className={styles['image02']}
                  />
                  <div className={styles['see-project-container']}>
                    <button
                      className={` ${projectStyles['button-secondary-white']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                    >
                      See project
                    </button>
                  </div>
                </div>
                <a
                  href="https://escentialperfumes.com.au"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['first-name']}
                >
                  Escential Perfumes - Website
                </a>
              </div>
              <div className={styles['speaker-card1']}>
                <div className={styles['image-container1']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixid=Mnw5MTMyMXwxfDF8c2VhcmNofDF8fHdlYnNpdGV8ZW58MHx8fHwxNjYyNjM5NjIw&amp;ixlib=rb-1.2.1&amp;w=1000"
                    className={styles['image03']}
                  />
                  <div className={styles['see-project-container1']}>
                    <button
                      className={` ${projectStyles['button-secondary-white']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                    >
                      See project
                    </button>
                  </div>
                </div>
                <a
                  href="https://sassysprinkles.com.au"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['first-name1']}
                >
                  Sassy Sprinkles - Website
                </a>
              </div>
              <div className={styles['speaker-card2']}>
                <div className={styles['image-container2']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx3ZWJzaXRlfGVufDB8fHx8MTY2MjYzOTYyMA&amp;ixlib=rb-1.2.1&amp;w=1000"
                    className={styles['image04']}
                  />
                  <div className={styles['see-project-container2']}>
                    <button
                      className={` ${projectStyles['button-secondary-white']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                    >
                      See project
                    </button>
                  </div>
                </div>
                <a
                  href="https://quixly.com.au"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['first-name2']}
                >
                  Quixly - IT Consultancy
                </a>
              </div>
              <div className={styles['speaker-card3']}>
                <div className={styles['image-container3']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGFwcHxlbnwwfHx8fDE2NjI2OTIwNDc&amp;ixlib=rb-1.2.1&amp;w=1000"
                    className={styles['image05']}
                  />
                  <div className={styles['see-project-container3']}>
                    <button
                      className={` ${projectStyles['button-secondary-white']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                    >
                      See project
                    </button>
                  </div>
                </div>
                <a
                  href="https://thephoenixspectrum.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['first-name3']}
                >
                  The Phoenix Spectrum - App development
                </a>
              </div>
              <div className={styles['speaker-card4']}>
                <div className={styles['image-container4']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjb2RlfGVufDB8fHx8MTY2MjY5MjA2NA&amp;ixlib=rb-1.2.1&amp;w=1000"
                    className={styles['image06']}
                  />
                  <div className={styles['see-project-container4']}>
                    <button
                      className={` ${projectStyles['button-secondary-white']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                    >
                      See project
                    </button>
                  </div>
                </div>
                <a
                  href="https://evolveproperty.net.au"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['first-name4']}
                >
                  Evolve Property - IT Consultancy
                </a>
              </div>
              <div className={styles['speaker-card5']}>
                <div className={styles['image-container5']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGNvZGV8ZW58MHx8fHwxNjYyNjkyMDY0&amp;ixlib=rb-1.2.1&amp;w=1000"
                    className={styles['image07']}
                  />
                  <div className={styles['see-project-container5']}>
                    <button
                      className={` ${projectStyles['button-secondary-white']} ${projectStyles['button']} ${projectStyles['button-md']} `}
                    >
                      See project
                    </button>
                  </div>
                </div>
                <a
                  href="https://airindustriesac.com.au"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['first-name5']}
                >
                  Air Industries AC - IT Consultancy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['about']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container2']}>
              <span className={styles['text18']}>about us</span>
              <h2
                className={` ${styles['text19']} ${projectStyles['heading2']} `}
              >
                We deliver solutions that shape your business.
              </h2>
              <span className={styles['text20']}>
                We are a full-service digital IT agency with plenty of in-house
                talent.
              </span>
              <div className={styles['checklist']}>
                <div className={styles['check-item']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text21']}>
                    Quality services and support
                  </span>
                </div>
                <div className={styles['check-item1']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text22']}>
                    Long-term strategy development
                  </span>
                </div>
                <div className={styles['check-item2']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text23']}>
                    FREE IT audit for startups
                  </span>
                </div>
                <div className={styles['check-item3']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text24']}>Years of experience</span>
                </div>
                <div className={styles['check-item4']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text25']}>
                    Future-Proofing Projects
                  </span>
                </div>
                <div className={styles['check-item5']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text26']}>
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['image-container6']}>
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className={styles['image08']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text27']}>what are you waiting for?</span>
            <h2
              className={` ${styles['text28']} ${projectStyles['heading2']} `}
            >
              <span>Let’s collaborate!</span>
            </h2>
            <span className={styles['text30']}>
              <span>
                Contact us today for a free consultation with one of our
                engineers, who will go over your needs and
              </span>
              <br></br>
              <span>propose the best option for your business.</span>
              <br></br>
            </span>
            <a
              href="mailto:sales@accelwire.au?subject=Consultation"
              className={` ${styles['primary1']} ${projectStyles['button-lg']} ${projectStyles['button-secondary-white']} ${projectStyles['button']} `}
            >
              Contact us
            </a>
          </div>
        </div>
      </main>
      <div
        className={` ${styles['footer']} ${projectStyles['section-container']} `}
      >
        <footer
          className={` ${styles['max-width5']} ${projectStyles['max-content-container']} `}
        >
          <img
            alt="image"
            src="/playground_assets/accelwirelogo-200h.png"
            className={styles['image09']}
          />
          <span className={styles['text35']}>
            Copyright © 2022 Accelwire. All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
