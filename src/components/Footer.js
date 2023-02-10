import React from "react";
import myLogo from "./logoCookbook.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-warning text-black">
      <section className="py-5">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">
                <img src={myLogo} alt="logo" style={{ width: 25 }} />
                Perfect Burgers
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad
                ullam fugit totam quisquam vel dolores itaque nihil debitis?
                Officiis.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">Products</h6>
              <p
                className="m-0
                "
              >
                <a className="text-reset text-decoration-none" href="#!">
                  Angular
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  React
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Vue
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Laravel
                </a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 class="text-uppercase fw-bold mb-2">Useful links</h6>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Pricing
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Settings
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Orders
                </a>
              </p>
              <p className="m-0">
                <a className="text-reset text-decoration-none" href="#!">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
              <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
              <p className="m-0 text-decoration-none">New York, NY 10012, US</p>
              <p className="m-0 text-decoration-none">info@example.com</p>
              <p className="m-0 text-decoration-none">+ 01 234 567 88</p>
              <p className="m-0 text-decoration-none">+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center align-items-center pb-5">
          <div className="col-auto">
            <p>
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div className="form-outline mb-4">
              <input
                type="email"
                placeholder="Enter your Email address"
                id="form5Example27"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-sm btn-primary mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <div
        className="text-center py-4 text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        © 2023 Copyright:{" "}
        <a className="text-light" href="https://mdbootstrap.com/">
          Perfect Burgers
        </a>
      </div>
    </footer>
  );
}

export default Footer;
