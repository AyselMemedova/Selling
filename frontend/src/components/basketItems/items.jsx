import React, { useContext } from "react";
import MainContext from "../../context/context";

const Items = () => {
  const { basketItem, addToBasket, deleteToBasket } = useContext(MainContext);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Add</th>
            <th scope="col">Count</th>
            <th scope="col">Delete</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {basketItem.map((item, index) => {
            return<tr key={index}>
              <th scope="row">1</th>
              <td><img src={item.item.image} alt="" height={"60px"} width={"60px"}/></td>
              <td>{item.item.title}</td>
              <td>{item.item.price}</td>
              <td><button className="btn btn-warning" height={"60px"} width={"30px"} onClick={()=>{
                addToBasket(item.item)
              }}>Add</button></td>
              <td>{item.count}</td>
              <td><button className="btn btn-danger" height={"60px"} width={"30px"} onClick={()=>{
                deleteToBasket(item.item)
              }}>Delete</button></td>
              <td>{item.totalPrice}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
