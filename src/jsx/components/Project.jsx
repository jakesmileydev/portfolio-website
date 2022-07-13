export default function Project(props) {
  const projectFeaturesElements = props.features.map((feature, index) => (
    <li key={index}>{feature}</li>
  ));

  return (
    <div className="project">
      {/* Left side, Top on mobile*/}
      <div className="project__header-and-about">
        <h2 className="project__header">
          <span className="project__header__id">{`0${props.id}`}</span>
          <span className="project__header__title">{props.title}</span>
          <span className="project__header__slash-one">/</span>
          <span className="project__header__sub-title">{props.subTitle}</span>
          <span className="project__header__slash-two">/</span>
          <span className="project__header__tags">
            {props.tags.join(" / ")}
          </span>
        </h2>
        <p className="project__about">{props.about}</p>
        <ul className="project__features">
          <h3 className="project__features__header">Features:</h3>
          {projectFeaturesElements}
        </ul>
      </div>

      {/* Right side, Bottom on mobile */}
      <div className="project__image-and-links">
        <div
          className="project__image"
          style={{
            backgroundImage: `url(${require("../../images/" +
              props.imageName +
              ".jpg")})`,
          }}
        ></div>
        <ul className="project__links">
          <li>
            <a
              className="project__link"
              href={props.liveURL}
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </li>
          <li>
            <a
              className="project__link"
              href={props.repoURL}
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
