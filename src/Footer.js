function Footer(props) {
  return (
    <footer className="footer">
      <div className="social-icons">
        {props.iconsObj.map((iconObj, index) => (
          <a
            key={index}
            href={iconObj.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-color">{iconObj.icon}</span>
          </a>
        ))}
      </div>

      <div className="copy-right-container">
        <p className="copy-right">
          © 2024 LE SSERAFIM OFFICIAL STORE. ALL RIGHTS RESERVED.
        </p>
        <div className="menu">
          {props.menuObj.map((menuObj, index) => (
            <a
              key={index}
              href={menuObj.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {menuObj.name}
            </a>
          ))}
        </div>
      </div>

      <p className="assistance-text">
        IF YOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS
        WEBSITE, PLEASE CALL 800-664-1413 FOR ASSISTANCE.
      </p>
    </footer>
  );
}

export default Footer;
