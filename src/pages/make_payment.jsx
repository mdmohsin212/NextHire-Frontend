import React from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { payment } from './../components/payment';

const MakePayment = () => {
    const { id } = useParams();
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        <div className="d-flex flex-column align-items-center">
          <div className="card mb-4 w-50">
            <div className="card-header py-3 bg-light">
              <h5 className="mb-0 text-center">Payment Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <b>Job Payment : </b>
                  <span>
                    <span className="fs-5">৳ </span>
                    {id}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-success m-2" onClick={payment}>Make Payment</button>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5" style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default MakePayment;
