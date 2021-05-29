import React from "react";
import callaction from '../../img/callAction.jpg';

const CallToAction = () => {
  return (
    <div
      className="call-action-main-wrap"
      style={{ backgroundImage: `url(${callaction})` }}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="call-to-action-content">
            <h4>Send Newsletter...</h4>
            <p>What do I want people who visit my website to do?”</p>
            <button className="btn feature-btn">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
