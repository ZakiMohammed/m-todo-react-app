import { NavLink } from 'react-router-dom'

const Header = () => {

  const isActiveLink = ({ isActive }) => (`nav-link${ isActive ? ' active' : ''}`);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to={'/'}>Todo App</NavLink>

          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className={isActiveLink} aria-current="page" to={'/'}>
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActiveLink} to={'/todo'}>Todo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActiveLink} to={'/users'}>Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActiveLink} to={'/about'}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={isActiveLink} to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header