import React from "react";
import "./Basket.css";
import MainContext from "../../context/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Basket = () => {
  const { data, setdata,addToBasket } = useContext(MainContext);
  return (
    <div className="basket">
      <div className="basket_text">
        <span>POPULAR PRODUCTS</span>
        <h3>Our Products</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-4">
              <div className="basket_card">
                <div className="basket_card_img">
                  <img src={item.image} alt="" />
                </div>

                <div className="basket_card_text">
                  <h4>{item.title}</h4>
                  <i class="fa-solid fa-star star"></i> <span>5.0</span>
                  <i class="fa-solid fa-heart heart"></i>
                  <span> {item.price}$</span>
                  <p>{item.description}</p>
                  <button>
                    {" "}
                    <Link to={`/detail/${item._id}`}>
                      LEARN MORE <i class="fa-solid fa-arrow-right"></i>
                    </Link>
                  </button>
                  <button onClick={()=>{
                    addToBasket(item)
                  }} className="basket">Basket</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
