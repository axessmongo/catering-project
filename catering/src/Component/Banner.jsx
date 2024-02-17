import React from "react";
import food from "../assets/image/food.webp";
import industrial from "../assets/image/industrial-catring-services.webp";
import corporate from "../assets/image/corporate-catering-services.webp";
import serimg from "../assets/image/cat.jpg";
import chef from "../assets/image/icons8-chef-60.png";
import delivery from "../assets/image/icons8-delivery-60.png";
import friend from "../assets/image/icons8-friends-60.png";
import bread from "../assets/image/icons8-kawaii-bread-60.png";
import belief from "../assets/image/icons8-trust-60.png";
import event from "../assets/image/icons8-event-60.png";
import wedding from "../assets/image/wedding.svg";
import birthday from "../assets/image/birthday.svg";
import engagement from "../assets/image/engagement.svg";
import party from "../assets/image/party.svg";
import event1 from "../assets/image/event.svg";
import outdoor from "../assets/image/outdoor.svg";
import buffet from "../assets/image/buffet.svg";
import office from "../assets/image/corporate.svg";
import internal from "../assets/image/international.svg";
import funct from "../assets/image/function.svg";
import bbq from "../assets/image/bbq.svg";
import kitty from "../assets/image/kitty.svg";

function Banner() {
  return (
    <div className="overflow-hidden" >
      {/* Navbar */}
      <section className="nav-banner">
        <nav
          class="navbar navbar-expand-lg nav-banner fixed-top bg-body-tertiary"
          id="home"
        >
          <div class="container-fluid ">
            <a class="navbar-brand headlogo" href="#">
              Catering Logo
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-3 heading5 p-2 mb-lg-0 text-center">
                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3 "
                    aria-current="page"
                    id="name-nav"
                    href="#offering"
                  >
                    Offering
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="menu"
                  >
                    Menu
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="#categories"
                  >
                    Categories
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="#gallery"
                  >
                    Gallery{" "}
                  </a>
                </li>

                <li class="nav-item border-end">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* Herobanner */}
      <section>
        <div className="bannerimg herobanner" id="home">
          <p className="display-1 fw-bold text-light text-center">
            {" "}
            Welcome Here
          </p>
        </div>
      </section>
      {/* end */}
      {/* Offering */}
      <section className="container mt-5" id="offering">
        <h1
          className="text-center heading1 fw-semibold text-capitalize"
          data-aos="fade-down"
        >
          The best offering catering services
        </h1>
        <div
          className="row mt-5"
          data-aos="zoom-in-down"
          data-aos-duration="700"
        >
          <div className="col-lg-6  ">
            <h2 className="mx-3 text-danger heading2 text-center">
              Wedding Catering
            </h2>
            <p className="mx-3 heading5">
              As a premium and award-winning catering service, Kasikannu
              Catering World takes pride in being exceeding expectations and
              achieving customer delight. With over 1000+ happy customers and
              experience in events all over Tamil Nadu, we have achieved an
              unmatched reputation for our service excellence and culinary
              delights.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={food} className="img-r" alt="" />
          </div>
        </div>
        <div
          className="row mt-5"
          data-aos="zoom-out-down"
          data-aos-duration="600"
        >
          <div className="col-lg-6">
            <img src={corporate} className="img-l" alt="" />
          </div>
          <div className="col-lg-6  ">
            <h2 className="mx-3 text-danger heading2 text-center  ">
              Wedding Catering
            </h2>
            <p className="mx-3 heading5">
              As a premium and award-winning catering service, Kasikannu
              Catering World takes pride in being exceeding expectations and
              achieving customer delight. With over 1000+ happy customers and
              experience in events all over Tamil Nadu, we have achieved an
              unmatched reputation for our service excellence and culinary
              delights.
            </p>
          </div>
          <div className="row mt-5" data-aos="fade-up" data-aos-duration="900">
            <div className="col-lg-6 ">
              <h2 className="mx-3 text-danger heading2 text-center  ">
                Wedding Catering
              </h2>
              <p className="mx-3 heading5">
                As a premium and award-winning catering service, Kasikannu
                Catering World takes pride in being exceeding expectations and
                achieving customer delight. With over 1000+ happy customers and
                experience in events all over Tamil Nadu, we have achieved an
                unmatched reputation for our service excellence and culinary
                delights.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={industrial} className="img-r img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* Happiness */}
      <section className=" container mt-5 ">
        <h2
          className="text-center fw-semibold heading1"
          data-aos-duration="1500"
          data-aos="fade-down"
        >
          Your Happiness is our Success..!
        </h2>
        <p className="text-center heading5 pt-4" style={{ color: "gray" }}>
          We are a delicious brand that provides specialised Food Catering
          services. Our meals are cooked to perfection. Customers commended the
          food's flavour, nutritional content, and price.
        </p>
        <div className="row" data-aos="fade-left" data-aos-duration="2000">
          <div className="col-md-4">
            <div class="card">
              <h5>Quality Food Items</h5>
              <img className="card-img" src={bread} alt="" />
              <p className="pt-3 heading5 text-center">
                We are make sure that the food we provide is nutritious as well
                as tasty
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <h5>Budget-Friedly</h5>
              <img className="card-img" src={friend} alt="" />
              <p className="pt-3 heading5 text-center">
                The most of suppliers offer cooking options that can be
                customised to fit your budget
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <h5>Professional chefs</h5>
              <img className="card-img" src={chef} alt="" />
              <p className="pt-3 heading5 text-center">
                The most important component of any celebration or gathering is
                cuisine and you may have delicious means essentially by hiring
                an experienced chef.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row pt-5"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="col-md-4">
            <div class="card">
              <h5>Belief</h5>
              <img className="card-img" src={belief} alt="" />
              <p className="pt-3 heading5 text-center">
                We are committed to providing high quality Catering services to
                our customer.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <h5>Delivery On Time</h5>
              <img className="card-img" src={delivery} alt="" />
              <p className="pt-3 heading5 text-center">
                The timely delivery of ordered food is one of the most critical
                parts of a caterer-customer relationship.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <h5>Event Planning</h5>
              <img className="card-img" src={event} alt="" />
              <p className="pt-3 heading5 text-center">
                Our specialised Catering service is here to help you make your
                event a succes, no matter what the occasion
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* catering company */}
      <section className=" container ser-v mt-5">
        <div className=" px-5 ">
          <div className="row" data-aos="zoom-in" data-aos-duration="1200">
            <div className="col-lg-6 ">
              <h2 className="text-center heading2 fw-semibold">
                Below are few reasons why KKCW is the best catering company in
                Chennai
              </h2>
              <div className="mt-5">
                <h3>
                  <span className="fs-3">👨‍🔧</span> Service Excellence
                </h3>
                <p>We are renowned for our quality and service excellence.</p>
              </div>
              <div className="mt-5">
                <h3>
                  <span className="fs-3">😋</span> Taste
                </h3>
                <p>
                  We are a heritage brand offering authentic taste that leaves
                  the taste buds wanting more!
                </p>
              </div>
              <div className="mt-5">
                <h3>
                  <span className="fs-3">💪</span> Intrastructure
                </h3>
                <p>
                  We have bets in class infrastructure and a central kitchen of
                  over 10,000+ sq feet
                </p>
              </div>
              <div className="mt-5">
                <h3>
                  <span className="fs-3">👨‍🍳</span> Skilled chefs
                </h3>
                <p>
                  We have over 100 employees and 17 master chefs who can prepare
                  any cuisine and satisfy your requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className=" mt-5">
                <img src={serimg} className="img-fluid p-3 img-l" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* Categories */}
      <section className=" container" id="categories">
        <h1 className="text-center mt-3" data-aos="fade-down">
          Catering Service Categories
        </h1>
        <div
          className="row mt-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <div className="circle" id="cate-card">
              <img src={wedding} alt="" className="center-image " />
            </div>
            <p className="pt-3 fw-5">Marriage-Wedding Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <div className="circle" id="cate-card">
              <img src={birthday} alt="" />
            </div>
            <p className="pt-3 fw-5">Birthday Party Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={engagement} alt="" />
            </div>
            <p className="pt-3 fw-5">Engagement Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={party} alt="" />
            </div>
            <p className="pt-3 fw-5">Party Catering</p>
          </div>
        </div>
        <div
          className="row justify-content-around"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={event1} alt="" />
            </div>
            <p className="pt-3 fw-5">Event Catering </p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={outdoor} alt="" />
            </div>
            <p className="pt-3 fw-5">Outdoor Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={office} alt="" />
            </div>
            <p className="pt-3 fw-5">Corporate-Office Party Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={buffet} alt="" />
            </div>
            <p className="pt-3 fw-5">Buffet Catering </p>
          </div>
        </div>

        <div
          className="row justify-content-around"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={internal} alt="" />
            </div>
            <p className="pt-3 fw-5">Marriage-Wedding Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={bbq} alt="" />
            </div>
            <p className="pt-3 fw-5">BBQ Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={kitty} alt="" />
            </div>
            <p className="pt-3 fw-5">Kitty Party Catering</p>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center  ">
            <div className="circle" id="cate-card">
              <img src={funct} alt="" />
            </div>
            <p className="pt-3 fw-5">Functions in Clubs Catering </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footerbg" id="contact">
        <div className="footerdiv">
          <div className="row py-3 my-3 text-light">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="text-center px-4">
                <h2 className="text-warning">Catering Logo</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur fugit, iure quos quas, accusantium quia quasi
                  eveniet
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h4 className="text-warning">Contact Us</h4>
                <div className=" pt-4">
                  <p>
                    {" "}
                    No:34, Tidel Park, Taramani, Chennai - 600 056. Tamilnadu,
                    India
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h4 className="text-warning">Map</h4>
                <div className=" pt-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, fugiat ea atque reiciendis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-center pb-2 text-warning">
          Copyright © All rights reserved 2024 Catering. 
          </h5>
        </div>
      </footer>
    </div>
  );
}

export default Banner;
