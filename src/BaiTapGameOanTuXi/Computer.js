import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let { computer } = this.props;

    let keyframe = `@keyframes randomItem${Date.now()}{
        0%{top: -50px;}
        25%{top: 100px;}
        50%{top: -50px;}
        75%{top: 100px;}
        100%{top: 0;}
    }`;

    return (
      <div>
        <style>{keyframe}</style>
        <div className="theThink mx-auto">
          <img
            style={{
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s`,
              left: "25%",
            }}
            className="mt-3"
            width={100}
            height={100}
            src={computer.hinhAnh}
            alt={computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          width={250}
          height={250}
          src="./img/playerComputer.png"
          alt="player"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.oanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
