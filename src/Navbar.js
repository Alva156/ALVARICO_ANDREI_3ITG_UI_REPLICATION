import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="nav-items">
          <li class="dropdown">
            <a href="#">
              COLLECTIONS <FontAwesomeIcon icon={faChevronDown} />
            </a>

            <ul className="dropdown-content">
              {props.dropdownListObj.map((dropdownListObj, index) => (
                <li key={index}>
                  <a
                    href={dropdownListObj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dropdownListObj.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <h1>LE SSERAFIM</h1>
      </div>
      <a href="/cart" className="cart-link">
        <div className="cart">
          CART (0) &nbsp;
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </a>
    </div>
  );
}

export default Navbar;
