import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="site-nav">
      <ul>
        <li>
          <NavLink exact activeClassName="selected" to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/schedule">
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/bios">
            Bios
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/abstracts">
            Abstracts
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/call-for-papers">
            CFP
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
