import './Contact.css';

import { contact } from '../../portfolio';
import emailIcon from './assets/at-outline.svg';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <div className='contact-icon'>
          <img src={emailIcon} alt='Email Icon' />
        </div>
        <p className='contact-link'>Let's get in touch!</p>
      </a>
    </section>
  );
};

export default Contact;
