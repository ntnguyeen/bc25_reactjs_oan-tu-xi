import React, { Component } from "react";
import "./BaiTapGameOanTuXi.css";
import Player from "./Player";
import Computer from "./Computer";
import KetQua from "./KetQua";
import { connect } from "react-redux";
import { actEndGame, actRandom } from "../redux/actions/oanTuXiActions";

class BaiTapGameOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQua />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success mt-5"
            >
              PLAY GAME
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        let soNgauNhien = Math.floor(Math.random() * 3);
        dispatch(actRandom(soNgauNhien));

        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);

          dispatch(actEndGame());
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameOanTuXi);
