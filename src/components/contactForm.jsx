import React from "react";

const ContactForm = ({ adult = false }) => {
  return (
    <>
      <section className="page-section p-4 bg-gray1 text-white" id="contact">
        <div className="container pt-4 ">
          <h2 className="text-left mb-4">Contacto</h2>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <form id="contactForm">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label>Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                  ></textarea>
                  <label >Mensaje</label>
                </div>
                <button
                  className="btn text-white bg-morado btn-xl "
                  id="submitButton"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
