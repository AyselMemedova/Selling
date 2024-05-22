import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("false");
  const [data, setdata] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [basketItem, setBasketItems] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );
  const addToBasket = (item) => {
    const target = basketItem.find((x) => x.item._id == item._id);
    if (target) {
      target.count += 1;
      target.totalPrice += item.price;
      setBasketItems([...basketItem]);
      localStorage.setItem("basketItems", JSON.stringify(basketItem));
    } else {
      const newItem = {
        item: item,
        count: 1,
        totalPrice: item.price,
      };
      setBasketItems([...basketItem, newItem]);
      localStorage.setItem("basketItems", JSON.stringify(basketItem));
    }
  };

  const deleteToBasket = (item) => {
    const target = basketItem.find((x) => x.item._id == item._id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= item.price;
      setBasketItems([...basketItem]);
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...basketItem.filter((x) => x.item.id != item.id)])
      );
    } else {
      setBasketItems([...basketItem.filter((x) => x.item._id == item._id)]);

      localStorage.setItem(
        "basketItems",
        JSON.stringify([...basketItem.filter((x) => x.item.id = item.id)])
      );
    }
    
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/selling")
      .then((res) => setdata([...res.data]));
  }, []);

  const content={ data, setdata, loading, setLoading, error, setError,basketItem, setBasketItems, addToBasket ,deleteToBasket}

  return (
    <>
      <MainContext.Provider
        value={content}
      >
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
