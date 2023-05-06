import './Bio.css'

const Bio = () => (
  <section className='section1'>
    <div className='container'>
      <h1 className='title'>About Me</h1>
      <div className='content-wrapper'>
        <div className='img-wrapper'>
          <div className='img' />
        </div>
        <div className='text-wrapper'>
          <p className='text'>
            I am an engineer first and a designer second. Currently, I am
            managing a design system with open-source contributions as a Senior
            UX Engineer at D2iQ. I emphasize on creating atheistic designs that
            are developed with empathy and backed by UX research. I am often the
            resident accessibility advocate. I love building community and
            getting involved, such as working with Google’s Women TechMakers.
            You can find me sharing knowledge writing on FreeCodeCamp. Or
            sharing CSS and JavaScript tips on Twitter. I am also a speaker and
            open to opportunities to share with the community.
          </p>
          <p className='text'>
            If you’d like to get in touch, find me on the internet or shoot me
            an email!
          </p>
          <a className='link link--nav' href='mailto:natalie.a.pina@gmail.com'>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Bio
