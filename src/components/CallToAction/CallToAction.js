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
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              saepe delectus numquam sit laudantium nisi?
            </p>
            <button className="btn feature-btn">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
