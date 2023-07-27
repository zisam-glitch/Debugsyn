import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Services = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
              Let’s Connect
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
               <br/>& Collaborate
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Feature Three Area start */}
      <section
        className="service-area-four pt-0 rpt-85 pb-100 rpb-70"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">All Services</span>
                <h2>
                  We've got you covered with our vast experience and knowledge
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-development" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Product</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>Research & Strategic Insights</li>
                    <li>Product Design Sprint</li>
                    <li>Product Management</li>
                    <li>Product Accessibility</li>
                    <li>Discovery Sprint</li>
                    <li>Usability Audit</li>
                    <li>thoughtbot Incubator</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-ux" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Web</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>Platform Engineering</li>
                    <li>Python and Django</li>
                    <li>Elm</li>
                    <li>React</li>
                    <li>Rails Maintenance</li>
                    <li>Internationalization and Localization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-mobile-development" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>App</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>Mobile Apps Development</li>
                    <li>Android Development</li>
                    <li>Hybrid Development</li>
                    <li>iPhone App Development</li>
                    <li>Wearable App Development</li>
                    <li>Cloud App Development</li>
                    <li>Phonegap App Development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-brainstorming" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Team & Processes</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>Fractional Product & Technical Leadership</li>
                    <li>Team optimization & hiring</li>
                    <li>Code Audits</li>
                    <li>Platform Engineering</li>
                    <li>Site Reliability Engineering</li>
                    <li>Empowering remote teams</li>
                    <li>Customized RSpec training</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-goal" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Industry</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>Health Technology</li>
                    <li>Technical and Business Assistance (TABA)</li>
                    <li>Fitness and Wellness</li>
                    <li>Government / Public Sector</li>
                    <li>E-commerce</li>
                    <li>Fintech</li>
                    <li>Education Technology</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-brainstorming" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Business Support</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>Enterprise Mobility</li>
                    <li>Branding & Marketing</li>
                    <li>Business Management</li>
                    <li>24x7 HelpDesk Services</li>
                    <li>Business Automation</li>
                    <li>Testing Automation</li>
                    <li>Hire Business Intelligence Analysts Services</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-optimization" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Advisory</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>IT Staff Augmentation</li>
                    <li>Business Technology Consulting</li>
                    <li>Database Consulting</li>
                    <li>Integration Consulting</li>
                    <li>Product Strategy</li>
                    <li>Technology Consultants</li>
                    <li>Cyber Security</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-abstract" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>AI & ML</a>
                    </Link>
                  </h5>
                </div>
                <div className="listtss">
                  <ul>
                    <li>Artificial Intelligence Solution</li>
                    <li>AR/VR Solution</li>
                    <li>Data Science</li>
                    <li>Industrial Internet</li>
                    <li>Legacy Application</li>
                    <li>Robotic Automation</li>
                    <li>Business Intelligence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Three Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
          <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Product</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>App Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Team & Processes</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Industry</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Business Support</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Advisory</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>AI & ML</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1">
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Idea Generate</h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 02</span>
                <h4 className="title">Plan &amp; Design</h4>
                
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 03</span>
                <h4 className="title">Project Testing</h4>
                
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 04</span>
                <h4 className="title">Got Results</h4>
                
              </div>
            </div>
          </div>
          <div className="bg-line-shape">
            <img
              src="assets/images/shapes/work-process-line.png"
              alt="Work Process Line"
            />
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-130 rpt-90 pb-130 rpb-45">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> Working with Debugsyn
                        was an exceptional experience. I can’t say enough great
                        things about the entire team, their process, their
                        workflow, and the quality of the code. They have a
                        talented team of designers and developers working there.
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Joshua Field</h4>
                          <span className="designation">Founder &amp; CEO</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> Participating in the
                        Product Design Sprint was like a slingshot and
                        positioned us to be much more competitive for grants and
                        accelerator programs and also left us with a clear
                        picture of next steps.
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author2.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Dr. Bailey Bryant</h4>
                          <span className="designation">
                            CEO &amp; Co-founder
                          </span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> The best part of
                        working with the Debugsyn team was their unflagging
                        optimism and determination to deliver the best quality
                        result in every situation. It would be hard to hire
                        Debugsyn and come out with something that wasn’t well
                        thought out.
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author3.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Erik Hageman</h4>
                          <span className="designation">Creative Director</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> Debugsyn left me with
                        a much more seasoned team than I had started with, a
                        better architecture, and a much clearer roadmap. Even to
                        this day, the DNA from debugsyn’s early engagement
                        lives through the company. They really set us up for the
                        success we are today.
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author4.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Aatish Salvi</h4>
                          <span className="designation">CTO</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Services;
