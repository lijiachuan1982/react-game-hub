import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0713c7ab4c149cf99dde98e78f07a05"
  }
})