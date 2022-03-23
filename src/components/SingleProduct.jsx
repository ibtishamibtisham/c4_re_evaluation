import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SingleProductList = () => {
  // make a request to get the details
  const [show, setShow] = useState([]);
  console.log(show);

  useEffect(() => {
    axios
      .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
      .then((res) => setShow(res.data))
      .catch((e) => console.log(e));
  }, []);

  const { id } = useParams();

  return (
    <>
      <div>
        <h2>{show.title}</h2>
        <p>{show.brand}</p>
        <p>{show.price}</p>
      </div>
    </>
  );
};
