import { GrGithub, GrTwitter, GrLinkedin, GrMailOption } from "react-icons/gr";
import { FaGitlab } from "react-icons/fa";

const MyAccount = {
    accounts: [
        {
            url: "https://github.com/mazfreelance",
            label: "Github <My Packages>",
            type: "gray",
            icon: <GrGithub />
        },
        {
            url: "https://gitlab.com/HeroCoder",
            label: "Gitlab <My Projects>",
            type: "orange",
            icon: <FaGitlab />
        },
        {
            url: "https://twitter.com/maz93je",
            label: "Twitter",
            type: "twitter",
            icon: <GrTwitter />
        },
        {
            url: "https://www.linkedin.com/in/mazmin/",
            label: "LinkedIn",
            type: "linkedin",
            icon: <GrLinkedin />
        },
        {
          url: "mailto:me@mohdazmin.com",
          label: "Mail Mohd Azmin",
          type: "gray",
          icon: <GrMailOption />
        }
    ]
}

export default MyAccount