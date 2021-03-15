import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-media">
        <a href="http://www.twitter.com/pandemic_sex" target="blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="http://www.instagram.com/pandemic_sex"
          target="blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div>
        Questions? Email us at{' '}
        <a href="mailto:sexandthepandemic@gmail.com">
          sexandthepandemic@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
