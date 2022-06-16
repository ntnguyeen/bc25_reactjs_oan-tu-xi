import React, { Component } from "react";
import { connect } from "react-redux";
import { actChonKeoBuaBao } from "../redux/actions/oanTuXiActions";

class Player extends Component {
  render() {
    let { mangDatCuoc } = this.props;
    return (
      <div>
        <div className="theThink mx-auto">
          <img
            className="mt-3"
            width={100}
            height={100}
            src={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
            alt={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img width={250} height={250} src="./img/player.png" alt="player" />

        <div className="row">
          <div className="col-12">
            {mangDatCuoc.map((item, index) => {
              let border = {};
              if (item.datCuoc) {
                border = { border: "3px solid orange" };
              }

              return (
                <div className="d-inline-block" key={index}>
                  <button
                    onClick={() => {
                      this.props.datCuoc(item.ma);
                    }}
                    style={border}
                    className="rounded mx-1"
                  >
                    <img
                      width={50}
                      height={50}
                      src={item.hinhAnh}
                      alt={item.hinhAnh}
                    ></img>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.oanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch(actChonKeoBuaBao(maCuoc));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
