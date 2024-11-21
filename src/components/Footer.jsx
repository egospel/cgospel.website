import "./styles/Footer.css";
export default function Footer() {
  return (
    <footer className="footer col cent">
      <div className="footer__inner row">
        <div className="footer__item footer__link__container col cent">
          <div className="quick__link ">
            <h2>Quick Links</h2>
            <div className="quick__link__a row">
              <a href="/">Home</a>
              <a href="https://internie.com/company/cgospel">Jobs</a>
              <a href="/terms">Term&apos;s &amp; Condition</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/sitemap.xml">Site Maps</a>
            </div>
          </div>
          <div>
            <div className="footer__box">
              <p className="footer__header">Address</p>
              <p className="subtitle">
                <b>Office 1: </b> H91 C2HD, United kingdom{" "}
              </p>
              <p className="subtitle">
                <b>Office 2: </b>No14 Cartúr mor, Galway, Ireland.
              </p>
              <p className="subtitle">
                <b>Office 3: </b>No. 6 Chaha Road K-vom, Jos, Nigeria
              </p>
            </div>
            <div className="footer__box">
              <p className="footer__header">Phone</p>
              <p>
                <a href="tel:+353 851893935">+353 851893935</a>
              </p>
              <p>
                <a href="tel:+234 7070455046">+234 7070455046</a>
              </p>
              <div className="footer__box">
                <p className="footer__header">Email</p>
                <p>
                  <a href="mailto:hello@cgospel.com">hello@cgospel.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__item footer__form__container cent">
          <form action="" className="footer__form col" id="queryForm">
            <h2>Message</h2>
            <p className="subtitle">
              For any queries or collaboration opportunities, please fill out
              the form below.{" "}
            </p>
            <p id="messageResponse"></p>
            <div className="input__box">
              <p className="label">Name</p>
              <div className="input">
                <input type="text" name="name" id="name" required />
              </div>
            </div>
            <div className="input__box">
              <p className="label">Email</p>
              <div className="input">
                <input type="text" name="email" id="email" required />
              </div>
            </div>
            <div className="input__box">
              <p className="label">Message</p>
              <textarea name="message" id="message"></textarea>
            </div>
            <button className="footer__btn">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer__copyright cent">
        <p>
          All Rights &amp; Trademark Reserved by CG &copy;
          {new Date().getFullYear()} Developed by{" "}
          <a className="xorblin" href="https://xorblin.com">
            Xorblin Digital Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
}
