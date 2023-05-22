function NavBar({ pageTitle, navData }) {
  return (
    <>
      <div className="container-logo">
        <div className="logo">{pageTitle}</div>
      </div>
      <div className="container-search-input">
        <input className="search-input" type="text" placeholder="검색" />
      </div>
      <Nav navData={navData}></Nav>
    </>
  );
}

function Nav({ navData }) {
  const nav_li = navData.map((item, index) => {
    return (
      <li key={index}>
        <a href="#">{item}</a>
      </li>
    );
  });

  return (
    <>
      <div className="container-nav">
        <nav className="nav">
          <ul className="nav-ul">{nav_li}</ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
