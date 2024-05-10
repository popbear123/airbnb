import { request } from "../request";

export const getEntireRoomsData = (offset = 0, size = 20) => {
  return request.get("/airbnb/api/entire/list", {
    offset,
    size
  })
}