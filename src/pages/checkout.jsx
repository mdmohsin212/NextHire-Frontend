import React from 'react';
import { CheckoutHandel } from '../components/app';
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
    const { id, receiver, job_id } = useParams();
    const navigate = useNavigate();

    const handlPayment = (event) => {
      event.preventDefault();
      CheckoutHandel(event, id, receiver);
      navigate(`/make_payment/${id}/${job_id}`);
    };
    return (
      <div>
        <ToastContainer position="top-center" />
        <div className="col-md-7 col-lg-8 m-auto pt-5 w-75">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h4 className="mb-0">Billing address</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row g-3">
                  <div className="col-sm-12 my-1">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-12 my-1">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div className="col-12 my-1">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="col-md-12 my-1">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder="zip code"
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <button
                  type="button"
                  className="w-100 btn btn-success"
                  onClick={handlPayment}
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Checkout;
