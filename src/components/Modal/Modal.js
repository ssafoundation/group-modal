
import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";
import modalBg from "../../img/modal.jpg";
const Modal = () => {
     const [isOpen, setOpen] = useState(false);
    return (
      <div
        style={{ backgroundImage: `url(${modalBg})` }}
        className="video-modal-wrap"
      >
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => setOpen(false)}
          />

          <button className="btn-primary" onClick={() => setOpen(true)}>
            <i className="fab fa-youtube    "></i>
          </button>
        </React.Fragment>
      </div>
    );
};

export default Modal;