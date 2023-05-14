import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faGoogle, faInstagram} from '@fortawesome/free-brands-svg-icons'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/100021989205329/videos/395387291204241/"
            role="button">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/watch?v=jHWBFyZcLPg"
            role="button">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/watch?v=P3olkO8YQlo"
            role="button">
            <FontAwesomeIcon icon={faGoogle}/>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/watch?v=aoOe-O21fO4&t=1178s"
            role="button">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style= {{backgroundColor: "#00000020"}}>
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Copito Candy
        </a>
      </div>
    </footer>
  );
}
