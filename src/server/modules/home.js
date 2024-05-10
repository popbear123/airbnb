import { request } from "../request";

export function getHighScoreData() {
  return request.get("/airbnb/api/home/highscore")
}

export function getGoodPriceData() {
  return request.get("/airbnb/api/home/goodprice")
}

export function getHotRecommendData() {
  return request.get("/airbnb/api/home/hotrecommenddest")
}

export function getDiscountData() {
  return request.get("/airbnb/api/home/discount")
}

export function getLongforData() {
  return request.get("/airbnb/api/home/longfor")
}

export function getPlusData() {
  return request.get("/airbnb/api/home/plus")
}