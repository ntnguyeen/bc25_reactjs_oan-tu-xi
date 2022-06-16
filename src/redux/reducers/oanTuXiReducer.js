import {
  CHON_KEO_BUA_BAO,
  END_GAME,
  RAN_DOM,
} from "../constants/oanTuXiConstants";

const initialState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "Bạn Win",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
};

const oanTuXiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHON_KEO_BUA_BAO: {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.payload) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case RAN_DOM: {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case END_GAME: {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      if (player.ma === computer.ma) {
        state.ketQua = "Hòa !!!";
      } else if (
        (player.ma === "keo" && computer.ma === "bao") ||
        (player.ma === "bua" && computer.ma === "keo") ||
        (player.ma === "bao" && computer.ma === "bua")
      ) {
        state.ketQua = "Bạn Thắng !!!";
        state.soBanThang++;
      } else {
        state.ketQua = "Bạn Thua !!!";
      }
      state.soBanChoi++;
      return { ...state };
    }

    default:
      return state;
  }
};

export default oanTuXiReducer;
