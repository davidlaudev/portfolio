import "/src/stylesheets/sections/Home.css";
import "/src/stylesheets/elements/Wave.css";

import SocialLinks from "/src/components/elements/SocialLinks";
import { profile } from "/src/data.js";

const Home = () => {
  const { role } = profile;

  return (
    <section className="Home section" id="home">
      <div className="container">
        <div className="Home-caption">
          <span className="Home-hi">Hi I'm,</span>
          <h1 className="Home-h1">
            David Lau
            <span class="wave-animation"> 👋</span>
          </h1>
          <h2 className="Home-h2">{role}</h2>
          <p className="Home-description">
            As a passionate computer science student I'm always looking for new
            opportunities to learn and grow. Currently I'm a senior at Stony
            Brook University open to new graduate opportunites.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home;
