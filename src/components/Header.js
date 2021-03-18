import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div>
        <NavLink exact to="/">
          Sex <span className="amp">and</span> the Pandemic
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
