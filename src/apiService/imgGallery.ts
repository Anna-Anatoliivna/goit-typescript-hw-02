import axios from "axios";

const API_KEY = "TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const getImg = async (
  query: string,
  page: number
): Promise<Response> => {
  const { data } = await axios.get<Response>(
    `search/photos?page=${page}&query=${query}`,
  );
  console.log(data);

  return data;
};
