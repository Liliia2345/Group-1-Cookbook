import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <footer class='bg-warning text-center text-white mt-5'>
      <div class='container p-3 pb-0'>
        <section class=''>
          <form action=''>
            <div class='row d-flex justify-content-center'>
              <div class='col-auto'>
                <p class='pt-2 text-black'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div class='col-md-5 col-12'>
                <div class='form-outline form-white mb-4'>
                  <input
                    type='email'
                    id='form5Example29'
                    class='form-control'
                  />
                  <label
                    class='form-label text-black'
                    for='form5Example29'>
                    Email address
                  </label>
                </div>
              </div>
              <div class='col-auto'>
                <button
                  type='submit'
                  class='btn btn-outline-dark mb-4 text-black'>
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <section class=''>
        <div class='container text-center text-md-start mt-5'>
          <div class='row mt-3'>
            <div class='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 class='text-uppercase fw-bold mb-4'>
                <i class='fas fa-gem me-3'></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div class='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 class='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  Laravel
                </a>
              </p>
            </div>
            <div class='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 class='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  class='text-reset'>
                  Help
                </a>
              </p>
            </div>
            <div class='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 class='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i class='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i class='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i class='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i class='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        class='text-center text-black p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:{' '}
        <a
          class='text-black'
          href='https://mdbootstrap.com/'>
          Perfect Burgers
        </a>
      </div>
    </footer>
  );
}

export default Footer;
