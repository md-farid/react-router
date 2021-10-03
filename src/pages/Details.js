import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h2>Details pages</h2>
      <p>{params.productId}</p>
    </section>
  );
};

export default Details;
