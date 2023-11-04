import './Bio.css';

const Bio = () => (
  <section className="section1">
    <div className="container">
      <h1 className="title">About Me</h1>
      <div className="content-wrapper">
        <div className="img-wrapper">
          <div className="img" />
        </div>
        <div className="text-wrapper">
          <p className="text">Update this...</p>
          <a className="link link--nav" href="mailto:natalie.a.pina@gmail.com">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Bio;
