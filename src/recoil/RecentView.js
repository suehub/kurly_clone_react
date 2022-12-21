import { atom } from "recoil";

export const recentViewProduct = atom({
  key: "recentViewProduct",
  default: [
    {
      "id": 5115219,
      "name": "[마켓컬리 X 울워스] 오트 브란",
      "info": "귀리의 영양을 그대로 담은 이색 오트밀",
      "price": "6,500",
      "discount" : "",
      "delivery": "샛별배송",
      "seller" : "컬리",
      "packaging": "상온",
      "unit": "1팩",
      "weight": "500g",
      "origin": "상세페이지 별도표기",
      "url": "https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650430833824l0.jpg"
    }
  ]
});
