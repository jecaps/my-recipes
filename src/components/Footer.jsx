const Footer = (props) => {
  return (
    <div className="app-footer--container">
      <form className="search-form" onSubmit={props.submit}>
        <input
          className="search-bar"
          type="text"
          value={props.search}
          onChange={props.change}
          placeholder="Search Recipe"
        />
        <button className="search-button" type="submit">
          🔍︎
        </button>
      </form>
    </div>
  );
};

export default Footer;
