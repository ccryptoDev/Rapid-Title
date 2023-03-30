import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <div className='mt-[120px]'>
    <Fragment>
      <img 
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </Fragment>
  </div>
);

export default Spinner;
