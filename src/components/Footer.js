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
