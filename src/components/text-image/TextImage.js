

import React from 'react';
import { useTranslation } from 'react-i18next';

const TextImage = ({ inverse, children, text, title, address, maxHeight }) => {

  const { t } = useTranslation();
  return (
    <>
      <div class={`${inverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col lg:justify-between mb-4`}>
        <p class={`${inverse ? 'lg:ml-3' : 'lg:mr-3'} w-full lg:basis-2/3 lg:flex-grow-0  mb-5 lg:mb-0`}>
          {text}
        </p>
        <div style={{ maxHeight: maxHeight }} class="w-full lg:basis-1/3 lg:flex-grow-0 lg:sticky lg:top-0  rounded-xl  shadow-lg cursor-pointer p-2.5 py-2 border-2 border-solid ">
          {children}
          <div className="py-4">
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <p className="text-gray-700 text-base">
              {address}
            </p>
          </div>
        </div>

      </div>

    </>
  );
}

export default TextImage;






