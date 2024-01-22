import React from "react";
import taste from "../assets/image/taste.webp";
import service from "../assets/image/service-execellence.webp";
import quality from "../assets/image/quality.webp";
import value from "../assets/image/value.webp";
import food from "../assets/image/food.webp";
import industrial from "../assets/image/industrial-catring-services.webp";
import corporate from "../assets/image/corporate-catering-services.webp";
import serimg from "../assets/image/cat.jpg";

function Banner() {
  return (
    <div>
      <section className="nav-banner">
        <nav class="navbar navbar-expand-lg nav-banner" id="home">
          <div class="container-fluid navbanner">
            <a
              class="navbar-brand"
              href="#"
              style={{ fontFamily: "700", fontSize: "23px" }}
            >
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
              <ul class="navbar-nav ms-auto mb-3 p-4 mb-lg-0 text-center ">
                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="#home"
                  >
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3 "
                    aria-current="page"
                    id="name-nav"
                    href="#aboutus"
                  >
                    About Us
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="#portfolio"
                  >
                    Menu
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="#technical"
                  >
                    Service
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active px-3"
                    aria-current="page"
                    id="name-nav"
                    href="#work"
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
      <section>
        <div className="bannerimg ">
          <p className="display-1 fw-bold text-light text-center">
            {" "}
            Welcome Here
          </p>
        </div>
        <p className="text-center fw-semibold display-2">
          Your Happiness is our Success..!
        </p>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-lg-3 card-h text-center mt-5 g-4">
            <div className="">
              <img src={taste} alt="" className="img-fluid mt-5" />
              <h4 className="mt-5">Taste</h4>
            </div>
          </div>
          <div className="col-lg-3 card-h text-center  mt-5 ">
            <div>
              <img src={service} alt="" className="img-fluid mt-5" />
              <h4 className="mt-5">Service</h4>
            </div>
          </div>
          <div className="col-lg-3 card-h text-center  mt-5">
            <div>
              <img src={quality} alt="" className="img-fluid mt-5" />
              <h4 className="mt-5">Quality</h4>
            </div>
          </div>
          <div className="col-lg-3 card-h text-center  mt-5 ">
            <div>
              <img src={value} alt="" className="img-fluid  mt-5" />
              <h4 className="mt-5">Value</h4>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      <section className="container mt-5">
        <h1 className="text-center fw-semibold display-2 text-capitalize">
          The best offering catering services
        </h1>
        <div className="row mt-5">
          <div className="col-lg-6 ">
            <h2 className="mx-3 text-danger">Wedding Catering</h2>
            <p className="mx-3">
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
        <div className="row mt-5">
          <div className="col-lg-6">
            <img src={corporate} className="img-l" alt="" />
          </div>
          <div className="col-lg-6 ">
            <h2 className="mx-3 text-danger">Wedding Catering</h2>
            <p className="mx-3">
              As a premium and award-winning catering service, Kasikannu
              Catering World takes pride in being exceeding expectations and
              achieving customer delight. With over 1000+ happy customers and
              experience in events all over Tamil Nadu, we have achieved an
              unmatched reputation for our service excellence and culinary
              delights.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 ">
              <h2 className="mx-3 text-danger">Wedding Catering</h2>
              <p className="mx-3">
                As a premium and award-winning catering service, Kasikannu
                Catering World takes pride in being exceeding expectations and
                achieving customer delight. With over 1000+ happy customers and
                experience in events all over Tamil Nadu, we have achieved an
                unmatched reputation for our service excellence and culinary
                delights.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={serimg} className="img-r img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      <section className="ser-v mt-5">
        <div className="container px-5 ">
          <div className="row ">
            <div className="col-lg-6 ">
              <h2 className="text-center">
                Below are few reasons why KKCW is the best catering company in
                Chennai
              </h2>
              <div className="mt-5">
                <h3>
                  <span className="fs-1">👨‍🔧</span>Service Excellence
                </h3>
                <p>We are renowned for our quality and service excellence.</p>
              </div>
              <div className="mt-5">
                <h3>
                  <span className="fs-1">😋</span>Taste
                </h3>
                <p>
                  We are a heritage brand offering authentic taste that leaves
                  the taste buds wanting more!
                </p>
              </div>
              <div className="mt-5">
                <h3>
                  <span className="fs-1">💪</span>Intrastructure
                </h3>
                <p>
                  We have bets in class infrastructure and a central kitchen of
                  over 10,000+ sq feet
                </p>
              </div>
              <div className="mt-5">
                <h3>
                  <span className="fs-1">👨‍🍳</span>Skilled chefs
                </h3>
                <p>
                  We have over 100 employees and 17 master chefs who can prepare
                  any cuisine and satisfy your requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="">
                <img src={serimg} className="img-fluid p-3 img-l" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
    </div>
  );
}

export default Banner;
