import giphyAPI from "../APIs/giphyAPI";

const getUrls = (word) => {
  return (dispatch) => {
    dispatch({ type: "START_REQUEST" });
    giphyAPI(word).then((res) => {
      const data = res.data.data;
      const imageUrlList = data.map((item) => item.images.downsized.url);
      dispatch({ type: "RECEIVE_DATA", payload: imageUrlList });
    });
  };
};

export default getUrls;
