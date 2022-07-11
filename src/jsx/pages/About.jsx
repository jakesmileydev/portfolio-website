import Header from "../components/Header";
export default function About() {
  return (
    <>
      <Header headerText="ABOUT" />
      <main>
        <section className="about">
          <div className="about__text">
            <p>
              Hi There! I'm Jake, a web developer from Camano Island,
              Washington. I love creating web applications that people can enjoy
              and use.
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
                <li>Contentful</li>
                <li>Netlify</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          <div className="about__image"></div>
        </section>
      </main>
    </>
  );
}
