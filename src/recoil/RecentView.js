import { atom, selector } from "recoil";

export const recentViewList = atom({
  key: "recentViewList",
  default: []
});

const recentProductState = selector({
  key: 'recentProductState',
  get: ({get}) => {
    const product = get(recentViewList);

    return product;
  }
})