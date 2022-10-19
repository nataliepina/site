import './Contact.css'

import { contact } from '../../portfolio'
import emailStatic from './assets/email-static.svg'
import emailGif from './assets/email.gif'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <p className='link link--nav'>Let's get in touch!</p>

        <div>
          <img
            className='contact-gif static'
            src={emailStatic}
            alt='send me an email'
          />
          <img className='contact-gif' src={emailGif} alt='email sent' />
        </div>
      </a>
    </section>
  )
}

export default Contact
