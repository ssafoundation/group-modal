import React from 'react';

const Feature = () => {
    return (
      <div className="feature-main-wrap">
        <div className="row">
          <div className="col-md-6">
            <div className="feature-single-item-left">
              
              <h3>Special Offer</h3>
              <h3>50% Off</h3>
              <p>
                These templates will work well with technology, fashion,
                apparel, jewelry, home goods, gadgets,
              </p>
              <button className="btn feature-btn">Get Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-single-item-right">
              <h3>Special Offer</h3>
              <h2>30% Off</h2>
              <p>
                These templates will work well with technology, fashion,
                apparel, jewelry, home goods, gadgets,
              </p>
              <button className="btn feature-btn">Get Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Feature;