import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import CV from './CV';

const CVpage = () => {
  const componentRef = useRef();

  return (
    <>
      <div className="mt-[85px] mb-5 sm:w-[60%] w-[90%] mx-auto shadow rounded">
        <div>
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 text-white p-2 w-full">
                Download CV
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
        <div ref={componentRef}>
          <CV />
        </div>
      </div>
    </>
  );
};

export default CVpage;
