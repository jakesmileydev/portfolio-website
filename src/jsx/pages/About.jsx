import Header from "../components/Header";
export default function About(props) {
  return (
    <>
      <Header
        headerText="ABOUT"
        setIsMobileNavOpen={props.setIsMobileNavOpen}
      />
      <main>
        <section className="about">
          <div className="about__info">
            <p>Hello!</p>
            <p>
              I'm Jake, a web developer from Camano Island, Washington. I love
              creating web applications that people can enjoy and use.
            </p>
            <p>
              My goal is to create products that clients are proud of, and to
              architect clean, readable code.
            </p>
            <p>Here are a few technologies I've been working with lately:</p>
            <div className="about__technologies">
              <ul>
                <li>React.js</li>
                <li>Sass</li>
                <li>Git</li>
                <li>Netlify</li>
              </ul>
              <ul>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Contentful</li>
              </ul>
            </div>
          </div>
          <div className="about__image-container">
            <div className="about__image"></div>
          </div>
        </section>
      </main>
    </>
  );
}
