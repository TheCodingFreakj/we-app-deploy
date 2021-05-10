import React from "react";
import "./products.css";
import axios from "axios";
const ModalContent = (props) => {
  return (
    <>
      <h2>Order Summery </h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>12344</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>34556</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>33445</td>
        </tr>
        <tr>
          <td>Island Trading</td>

          <td>3345</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>23456</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>334</td>
        </tr>
        <button className="btn">Total: 2233445 </button>
      </table>
    </>
  );
};

export default ModalContent;
