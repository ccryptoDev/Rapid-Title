import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <div className='flex items-center fixed bg-white z-20 w-full h-full'>
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
