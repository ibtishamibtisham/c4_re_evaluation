import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsData, getvalue, sortProducts } from "../Redux/actions";
import { Link } from "react-router-dom";

export const Products = () => {
  // to get all products list on component mounts
  const data = useSelector((store) => store.products);
  const data1 = useSelector((store) => store.sorted);
  console.log(data1, "mda");
  const [query, setQuery] = useState("");
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData());
  }, []);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    // console.log(e.target.value);
    dispatch(sortProducts({ data, name: e.target.value }));
    // dispatch(getvalue(e.target.value));
    // console.log(e.target.value, "myvalue");
  };

  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data.map(({ brand, id, title, price }) => {
          return (
            <div key={id}>
              <Link to={`/products/${id}`}>{title}</Link>
              <p>{brand}</p>
              <p>{price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
