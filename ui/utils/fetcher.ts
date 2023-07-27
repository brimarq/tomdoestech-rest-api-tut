import axios from "axios";

// const fetcher = (url: string) =>
//   axios
//     .get(url, {
//       withCredentials: true,
//     })
//     .then((res) => res.data);

const fetcher = <T>(url: string, headers = {}): Promise<T> =>
  axios
    .get<T>(url, {
      headers,
      withCredentials: true,
    })
    .then((res) => res.data);

export default fetcher;
