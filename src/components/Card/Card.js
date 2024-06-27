import React from 'react';
import { useTranslation } from 'react-i18next';
import './Card.scss';

const Card = ({ title, text, caption, imgSrc, tag, size }) => {
  const { t } = useTranslation();

  return (
    <div className={'max-w-sm rounded-xl overflow-hidden shadow-lg cursor-pointer'}>
      <div className={`relative image-container`}>
        <img className={`w-full size-${size}`} src={imgSrc} alt={caption} />
        <div className="absolute top-2 left-2 bg-green-700 text-white px-2 py-1 rounded uppercase">
          {tag}
        </div>
        <div className="absolute top-2 right-2">
          <button className="bg-white text-blue-600 rounded-full p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
          </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">
          {text}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{caption}</span>
      </div>
    </div>
  );
}

export default Card;
