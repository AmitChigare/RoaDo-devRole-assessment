export const FETCH_DATA = "FETCH_DATA";

export const fetchData = () => ({
  type: FETCH_DATA,
  payload: [
    { id: 1, name: "Item 1", value: 10 },
    { id: 2, name: "Item 2", value: 20 },
    { id: 3, name: "Item 3", value: 30 },
  ],
});
