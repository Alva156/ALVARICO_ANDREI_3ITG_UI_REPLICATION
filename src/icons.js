import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaSpotify,
  FaTiktok,
  FaWordpress,
} from "react-icons/fa";

const icons = [
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/le_sserafim?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/le_sserafim/?hl=en",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UCs-QBT4qkj_YiQw1ZntDO3g",
  },
  {
    icon: <FaApple />,
    url: "https://music.apple.com/us/artist/le-sserafim/1616740364",
  },
  {
    icon: <FaSpotify />,
    url: "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p",
  },
  {
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@le_sserafim?lang=en",
  },
  {
    icon: <FaWordpress />,
    url: "https://weverse.io/lesserafim/feed",
  }, // There is no "webverse icon in the ReactJS icon library due to copyright restrictions so I use 'FaWordpress' as alternative"
];

export default icons;
