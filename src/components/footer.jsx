import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid  py-5">
      <div className="row">
        <div className="col-md-3">
          <h2 className="h5 text-primary">Ktb</h2>
          <p className="text-dark">
            Interior architecture is the art and science of designing interior spaces, ensuring both aesthetics and functionality. It balances structure and usability to create appealing environments.
          </p>
        </div>

        <div className="col-md-3">
          <h2 className="h5 text-primary">We Are In</h2>
          <ul className="list-unstyled">
            {["Bangalore", "Chennai", "Kerala", "Delhi", "Pune"].map((city) => (
              <li key={city}>
                <a href="#" className="text-dark text-decoration-none">
                  {city}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-3">
          <h2 className="h5 text-primary">Follow Us</h2>
          <ul className="list-unstyled">
            {["Facebook", "LinkedIn", "Twitter", "Instagram"].map((platform) => (
              <li key={platform}>
                <a href="#" className="text-dark text-decoration-none">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-3">
          <h2 className="h5 text-primary">Newsletter</h2>
          <p className="text-danger">Subscribe for the latest updates</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-2"
          />
          <button className="btn btn-primary w-100">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
