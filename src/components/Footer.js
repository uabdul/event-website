import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-media">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div>
        Questions? Email us at{' '}
        <a href="mailto:covidandhiv@gmail.com">
          covidandhiv@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
