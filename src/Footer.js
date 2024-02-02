function Footer(props) {
  return (
    <footer className="footer">
      <div className="social-icons">
        {props.iconsObj.map((iconObj, index) => (
          <a key={index} href={iconObj.link}>
            {iconObj.icon}
          </a>
        ))}
      </div>

      <div className="copy-right-container">
        <p className="copy-right">
          © 2024 LE SSERAFIM OFFICIAL STORE. ALL RIGHTS RESERVED.
        </p>
        <div className="menu">
          {props.menuObj.map((menuObj, index) => (
            <a key={index} href={menuObj.link}>
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
