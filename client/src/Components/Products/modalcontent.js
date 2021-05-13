import React from "react";
import "./products.css";

const ModalContent = (props) => {
  const [cartTotal, setCartTotal] = React.useState(0);
  React.useEffect(() => {
    total();
  }, [props.selected]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < props.selected.length; i++) {
      totalVal = totalVal + Number(props.selected[i].price);
    }
    setCartTotal(totalVal);
  };
  const showorders = (products) => {
    return products.map((r) => {
      return (
        <table key={r._id}>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>{r.prodName}</td>
            <td>{r.price}</td>
            <td>
              <select>
                <option value="1">1</option>
              </select>
            </td>
            <td>
              <button
                type="submit"
                id={r._id}
                className="btn"
                onClick={props.removeFromCart}
              >
                delete
              </button>
            </td>
          </tr>
        </table>
      );
    });
  };
  return (
    <div>
      {showorders(props.selected)}
      <button className="btn" onClick={props.removeFromCart}>
        Pay {cartTotal}
      </button>
    </div>
  );
};

export default ModalContent;
