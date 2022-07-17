export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = (keyword) => {
  return {
    type: RECEIVE_SEARCH,
    keyword
  }
}