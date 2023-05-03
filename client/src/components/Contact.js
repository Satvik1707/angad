import React from "react";
import phone from "../images/phone.png";
import email from "../images/mail.png";
import address from "../images/address.png";

const Contact = () => {
  return (
    <>
      <div className="contact_info ">
        <div className="container_fluid ">
          <div className="row">
            <div className="col-lg-10 0ffset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex shadow p-3 mb-2 bg-white rounded ">
                <img className="icon_image" src={phone} alt="phone" />
                <div className="contact_info_content ">
                  <div className="contact_info_title">
                    <b>Phone</b>
                  </div>
                  <div className="contact_info_text">+91 1111 543 2198</div>
                </div>
              </div>
              <div className="contact_info_item d-flex shadow p-3 mb-2 bg-white rounded ">
                <img className="icon_image" src={email} alt="email" />
                <div className="contact_info_content ">
                  <div className="contact_info_title">
                    <b>Email</b>
                  </div>
                  <div className="contact_info_text">abc@gmail.com</div>
                </div>
              </div>
              <div className="contact_info_item d-flex shadow p-3 mb-2 bg-white rounded">
                <img className="icon_image" src={address} alt="address" />
                <div className="contact_info_content ">
                  <div className="contact_info_title">
                    <b>Address</b>
                  </div>
                  <div className="contact_info_text">Bhilwara,Rajasthan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="contact shadow p-3 mb-5 bg-white rounded">
          <div className="container">
            <div className="contactcontainer">
              <div className="contactform">
                <h2 className="contact-title">Get in Touch</h2>
                <form className="contact-name">
                  <div className="group">
                    <div className="contact-group">
                      <label htmlfor="name"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        autoComplete="off"
                        placeholder="Your Name"
                        required="true"
                      />
                    </div>
                    <div className="contact-group">
                      <label htmlFor="email"></label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        autoComplete="off"
                        placeholder="Your email"
                        required="true"
                      />
                    </div>
                    <div className="contact-group">
                      <label htmlfor="phone"></label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        autoComplete="off"
                        placeholder="Your Phone_number"
                        required="true"
                      />
                    </div>
                    <div className="contact-group ">
                      <textarea
                        className="form-control text_field"
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        required="true"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-button">
                    <input
                      type="submit"
                      name="sendmessage"
                      id="sendmessage"
                      className="contact-submit btn-primary"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
