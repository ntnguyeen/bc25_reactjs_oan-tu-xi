import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    let { ketQua, soBanThang, soBanChoi } = this.props;
    return (
      <div>
        <div className="display-4 text-warning">{ketQua}</div>
        <div className="display-4 text-success">
          Số Bàn Thắng: <span className="text-warning">{soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Tổng Số Bàn Chơi: <span className="text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.oanTuXiReducer.ketQua,
    soBanThang: state.oanTuXiReducer.soBanThang,
    soBanChoi: state.oanTuXiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(KetQua);
