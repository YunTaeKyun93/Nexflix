import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import YouTube from "react-youtube";
import styles from "../css/MovieDetail.module.css";
import classNames from "classnames/bind";

//영화 트레일러(예고편) 보여주기
const ss = classNames.bind(styles);
const Trailer = ({ item }) => {
  const [lgShow, setLgShow] = useState(false);

  //오피셜트레일러가 있을 때
  const trailer = item.results?.find((item) => {
    if (item.name === "Official Trailer") {
      return item;
    }
  });

  //오피셜트레일러가 없을 때
  const trailer2 = item.results?.find((item) => {
    if (item.type === "Trailer") {
      return item;
    }
  });

  const opts = {
    height: "800px",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
      modestbranding: 1
    }
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className={ss("movieDetail_trailer")}>
 <span onClick={() => setLgShow(true)}>🎥 Show Trailer</span>
      <Modal
        show={lgShow}
        onHide={() => setLgShow(false)}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className={ss("movieDetail_modal")}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <YouTube
            videoId={trailer?.key === undefined ? trailer2?.key : trailer?.key}
            opts={opts}
            onReady={_onReady}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Trailer;
