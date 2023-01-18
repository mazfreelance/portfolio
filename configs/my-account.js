import { GrGithub, GrTwitter, GrLinkedin, GrInstagram } from "react-icons/gr";
import { FaGitlab, FaSitemap } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const MyAccount = {
  accounts: [
    {
      url: "https://github.com/mazfreelance",
      label: "Github <My Packages>",
      type: "gray",
      icon: <GrGithub />,
    },
    {
      url: "https://gitlab.com/HeroCoder",
      label: "Gitlab <My Projects>",
      type: "orange",
      icon: <FaGitlab />,
    },
    // {
    //   url: "https://twitter.com/maz93je",
    //   label: "Twitter",
    //   type: "twitter",
    //   icon: <GrTwitter />,
    // },
    {
      url: "https://instagram.com/maz93je",
      label: "Instagram",
      type: "red",
      icon: <GrInstagram />,
    },
    {
      url: "https://www.linkedin.com/in/mazmin/",
      label: "LinkedIn",
      type: "linkedin",
      icon: <GrLinkedin />,
    },
    {
      url: "mailto:me@mohdazmin.com",
      label: "Mail Mohd Azmin",
      type: "gray",
      icon: <AiOutlineMail />,
    },
    {
      url: "/sitemap.xml",
      label: "Site Map",
      type: "green",
      icon: <FaSitemap />,
    },
  ],
};

export default MyAccount