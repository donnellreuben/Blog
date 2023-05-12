export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        {/* Home */}
        <a className="navbar-brand" href="#">
          <img src="https://i.imgur.com/FT2Hcx4.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          Home
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

              {/* All Posts */}
              <a className="nav-link active" aria-current="page" href="#posts-index">All Posts</a>
            </li>
            <li className="nav-item">

              {/* New Posts */}
              <a className="nav-link" href="#posts-new">New Posts</a>
            </li>
          </ul>


        </div>
      </div>
    </nav>
  );
}
