import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <h5>Project By: Jesse A.</h5>
      <ul class="contacts">
        <li class="social-media-icon"><a
          href="https://www.linkedin.com/in/jesse-a-0617881a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkIR0XT9mQlaD%2F6EEsl6UAQ%3D%3D"
          target="blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li class="social-media-icon"><a href="https://github.com/audijej" target="blank"><i
          class="fab fa-github"></i></a></li>
        <li class="social-media-icon"><a href="https://www.instagram.com/audigoodness/" target="blank"><i
          class="fab fa-instagram-square"></i></a></li>
      </ul>    </footer>
  );
}

export default Footer;
