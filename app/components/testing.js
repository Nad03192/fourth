import { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function MyComponent() {
  const [data, setData] = useState(null);
  const [links, setLinks] = useState(null);
  const [metas, setMetas] = useState(null);

  useEffect(() => {
    axios.get("/page/news")
      .then((response) => setData(response.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios.get("/settings")
      .then((response) => setLinks(response.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios.get("/page/home")
      .then((response) => setMetas(response.data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white">
      <h1>Fetched Data</h1>

      {/* Display News Data */}
      <h2>News</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* Display Settings Data */}
      <h2>Settings</h2>
      <pre>{JSON.stringify(links, null, 2)}</pre>

      {/* Display Home Page Data */}
      <h2>Home</h2>
      <pre>{JSON.stringify(metas, null, 2)}</pre>
    </div>
  );
}
