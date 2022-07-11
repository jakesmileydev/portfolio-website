export default function Header(props) {
  return (
    <header>
      <h1>
        <span>/ </span>
        {props.headerText}
      </h1>
      <button className="open-navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
