import axios from "axios";
import { BASE_API_URL } from "./config";

export default {
  medias: {
    fetchAll: () => axios.get(BASE_API_URL + "/files").then(res => res.data.books),
    create: media => axios.post(BASE_API_URL + "/files/upload", { media }).then(res => res.data)
  }
};
