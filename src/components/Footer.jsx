import img1 from "../assets/gallery-1.webp";
import img2 from "../assets/gallery-2.webp";
import img3 from "../assets/gallery-3.webp";
import img4 from "../assets/gallery-1.webp";
import img5 from "../assets/gallery-5.webp";
import img6 from "../assets/gallery-6.webp";
import img7 from "../assets/gallery-7.webp";
import img8 from "../assets/gallery-8.webp";
import img9 from "../assets/gallery-9.webp";
import logo from "../assets/logo.webp";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div
        className={`${styles.section__container} ${styles.footer__container}`}
      >
        <div className={styles.footer__col}>
          <div className={styles.footer__logo}>
            <a href="#">
              <img
                className={styles.logo}
                src={logo}
                alt="House of Gains - Best Gym in Indore"
              />
            </a>
          </div>
          <p>
            <strong>House of Gains</strong> is the{" "}
            <strong>best gym in Indore</strong>, dedicated to helping you
            achieve your fitness goals. From bodybuilding to personal training,
            we provide top-class facilities and expert guidance.
          </p>
          <ul className={styles.footer__links}>
            <li>
              <a href="#">
                <span>
                  <i className="ri-map-pin-2-fill"></i>
                </span>
                House of Gains Gym
                <br />
                2344 E, above alord ceramic, Sector E, Sudama Nagar, Indore,
                Madhya Pradesh 452009
              </a>
            </li>
            <li>
              <a href="tel:+919691282188">
                <span>
                  <i className="ri-phone-fill"></i>
                </span>
                +91 9691282XXX
              </a>
            </li>
            <li>
              <a href="mailto:info@houseofgains.com">
                <span>
                  <i className="ri-mail-fill"></i>
                </span>
                info@houseofgains.com
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footer__col}>
          <h4>GALLERY</h4>
          <div className={styles.gallery__grid}>
            <img
              src={img1}
              alt="Strength training at House of Gains - Indore"
            />
            <img src={img2} alt="Best fitness gym in Indore - House of Gains" />
            <img src={img3} alt="Personal training session at House of Gains" />
            <img
              src={img4}
              alt="Advanced gym equipment - House of Gains Indore"
            />
            <img src={img5} alt="CrossFit training session at House of Gains" />
            <img src={img6} alt="Bodybuilding workout in Indore gym" />
            <img src={img7} alt="Cardio workout session at House of Gains" />
            <img src={img8} alt="Functional training at best gym in Indore" />
            <img
              src={img9}
              alt="Expert fitness coaching - House of Gains Indore"
            />
          </div>
        </div>

        <div className={styles.footer__col}>
          <h4>JOIN OUR FITNESS COMMUNITY</h4>
          <p>
            Stay updated with the latest workout plans, special discounts, and
            fitness tips. Sign up now and be part of the{" "}
            <strong>best gym in Indore</strong>!
          </p>
          <form action="/">
            <input type="email" placeholder="Enter Email" required />
            <button className={`${styles.btn} ${styles.btn__primary}`}>
              SUBSCRIBE
            </button>
          </form>
          <div className={styles.footer__socials}>
            <a href="#" aria-label="Follow us on Facebook">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" aria-label="Follow us on Twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" aria-label="Subscribe to our YouTube channel">
              <FaYoutube></FaYoutube>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer__bar}>
        Copyright © 2024 House of Gains. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
