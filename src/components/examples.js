import React from 'react';
import {Link} from 'react-router';

const Examples = (props) => {
  return(
    <div>
      <h1 className="text-center title-top">Examples</h1>
      <p>Here some examples of locations</p>
      <ol>
        <li>
          <Link to="/?location=Minsk">Minsk, BY</Link>
        </li>
        <li>
          <Link to="/?location=Moscow">Moscow, RU</Link>
        </li>
      </ol>
    </div>
  );
}

export default Examples;
