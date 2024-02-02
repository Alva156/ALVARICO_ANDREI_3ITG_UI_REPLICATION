import "./App.css";
import Navbar from "./Navbar.js";
import LogoBody from "./LogoBody.js";
import albumData from "./albumData.js";
import Album from "./Album.js";
import Form from "./Form.js";
import Footer from "./Footer.js";
import icons from "./icons.js";
import menu from "./menu";
import dropdownList from "./dropdownList.js";
export default function App() {
  return (
    <div className="App">
      <Navbar dropdownListObj={dropdownList} />
      <LogoBody />
      <div className="album-container">
        {albumData.map((album) => (
          <Album albumObj={album} key={album.name} />
        ))}
      </div>
      <Form />
      <Footer iconsObj={icons} menuObj={menu} />
    </div>
  );
}
