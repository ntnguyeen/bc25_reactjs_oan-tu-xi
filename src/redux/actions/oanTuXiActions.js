import * as ActionType from "../constants/oanTuXiConstants";

const actChonKeoBuaBao = (maCuoc) => {
  return {
    type: ActionType.CHON_KEO_BUA_BAO,
    payload: maCuoc,
  };
};

const actRandom = (soNgauNhien) => {
  return {
    type: ActionType.RAN_DOM,
    payload: soNgauNhien,
  };
};

const actEndGame = () => {
  return {
    type: ActionType.END_GAME,
  };
};

export { actChonKeoBuaBao, actRandom, actEndGame };
