import { social } from "/src/data.js";
import "/src/stylesheets/elements/SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="Social-links">
      {social.map((item, index) => (
        <div className="Social-link" key={index} data-tooltip={item.name}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <item.icon />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
