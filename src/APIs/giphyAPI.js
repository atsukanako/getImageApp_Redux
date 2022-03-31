import axios from "axios";

const giphyApi = (word) => {
  //　　リクエスト先のURLを作る
  const search = word;
  const key = "HPTQwI1TLOFAVnGY3tY6gJu45sAJXRw1";
  const limit = 50;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  // axiosでリクエストをする最初のところ、.get(url)でプロミスオブジェクトを返すところまで
  return axios.get(url);

  // axios.get(url).then((res) => {
  //   const data = res.data.data;
  //   const imageUrlList = data.map((item) => item.images.downsized.url);
  //   this.setState({ gifUrlList: imageUrlList });
  // });
};

export default giphyApi;
