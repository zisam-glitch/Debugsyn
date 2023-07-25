import Link from "next/link";

const Footer2 = () => {
  return (
    <footer
      className="main-footer footer-two pt-100 rpt-45 pb-50 rpb-20 rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="row gp-100 pb-20 align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-7">
            <div className="footer-left-title mb-35 wow fadeInLeft delay-0-2s">
            What constitutes success for you?
            </div>
          </div>
          <div className="col-lg-5 col-sm-7 col-6 col-small wow fadeInRight delay-0-2s">
            <div className="footer-right-btn mb-35 text-lg-end">
              <Link legacyBehavior href="/contact">
                <a className="explore-more text-start">
                  <i className="fas fa-arrow-right" />{" "}
                  <span>Let's Discuss</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-6 col-small order-lg-3">
            <div className="footer-widget footer-text wow fadeInUp delay-0-4s">
              <h5 className="footer-title">Get In Touch</h5>
              <div className="text">
                <p>4590 MacArthur Blvd, Newport Beach, CA 92660, USA</p>
                <a href="mailto:support@gmail.com">support@debugsyn.com</a>
                <br />
                <a href="callto:+13234158482">+1 (323) 415 8482</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 order-lg-4 col-sm-6">
            <div className="footer-widget footer-links wow fadeInUp delay-0-6s">
              <h5 className="footer-title">Links</h5>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>Career ?</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faqs">
                      <a>FAQs</a>
                    </Link>
                  </li>
                </ul>
                <ul className="list-style-two">
                  <li>
                    <Link legacyBehavior href="/about">
                      Setting
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 me-auto order-lg-2 align-self-center">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-2s">
              <form className="footer-newsletter" action="#">
                <input type="email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
              <p>
                Copyright @2023,{" "}
                <Link legacyBehavior href="/">
                  <a>Debugsyn</a>
                </Link>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
