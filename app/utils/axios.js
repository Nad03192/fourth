import axios from "axios";
 const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
 });
 // var prefferedLang;
 instance.interceptors.request.use((config) => {
  config.headers["Accept-Language"];
  return config;
 });
 instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
 );
 instance.defaults.headers.post["Accept"] = "*/*";
 // instance.defaults.headers.common["Accept-Language"] = prefferedLang;
 export async function getStaticProps({ locale }) {
    let data;
    await axios
      .get("/page/news", {
        headers: {
          "Accept-Language": locale,
        },
      })
      .then((res) => {
        data = res.data;
      })
      .catch(console.error);  return { props: { data } };
   }
   

 export default instance;