import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>Products pages</h2>
      <section>
        <ul>
          <li>
            <Link to="/products/p1">A Book</Link>
          </li>
          <li>
            <Link to="/products/p2">A Carpet</Link>
          </li>
          <li>
            <Link to="/products/p3">Online Courses</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Products;
