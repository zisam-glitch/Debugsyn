import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectList = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <section className="project-benr-area pt-230 rpt-150 pb-80 rpb-20">
        <h1 className="header-project-banner text-center ">
          Companies like yours create meaningful solutions
        </h1>
      </section>
      {/* Page Banner End */}
      {/* Project List Area start */}
      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-list1.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Mobile Development</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>Smart Home App</a>
                </Link>
                <br />
                <b>Green home</b>
              </h2>
              <p>
                Cross-platform solution allowing remotely control your smart
                lights, thermostat, security cameras, smart plugs, and more, no
                matter where you are. The app includes a subscription module,
                early access features, and an Admin panel
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Python and Django</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>Corporate Website</a>
                </Link>
                <br />
                <b>Qiuntex bank</b>
              </h2>
              <p>
                Qiuntex provide an opening of corporate multi- currency accounts
                to ensure the stable operation of company in the international
                market. Works in more than 30 countries. Our service gives
                instant access to international and local transfers and money
                transfers between your bank cards.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/project-list2.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-list3.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">React</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>E-commerce Website</a>
                </Link>
                <br />
                <b>HIKlI</b>
              </h2>
              <p>
                A web solution and a cross-platform mobile app for a marketplace
                with search algorithm, merchant inventory control, and payment
                engine with 3D Secure support
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Mobile Development</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>Corporate Website</a>
                </Link>
                <br />
                <b>TaskGo.</b>
              </h2>
              <p>
                a cross-platform system that enables managing tasks and
                providing reminders. The application comes with a subscription
                module, early access features, and an admin panel.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/project-list4.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-list5.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Mobile Development</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>Food Delivery App</a>
                </Link>
                <br />
                <b>YOKAI.</b>
              </h2>
              <p>
                a cross-platform solution that offers users free food every day
                based on their location. The application comes with a
                subscription module, features for early access, and an admin
                panel.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Platform Engineering</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>Corporate Website</a>
                </Link>
                <br />
                <b>Wallet</b>
              </h2>
              <p>
                Wallet provide an opening of corporate multi- currency accounts
                to ensure the stable operation of company in the international
                market. Our service gives
                instant access to international and local transfers and money
                transfers between your bank cards.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/project-list6.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Project List Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectList;
