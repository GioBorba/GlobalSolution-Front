import React from 'react';

interface CardProps {
  imageSrc: string;
  text: string;
  organization: string; 
  website?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text, organization, website }) => {
  return (
    <div className="container mx-auto px-4 my-8 flex flex-col lg:flex-row lg:items-start lg:justify-between">
      <div className="lg:flex lg:flex-col lg:items-start lg:w-3/4 lg:mr-8">
      <h2 className="text-2xl font-bold mb-2 underline">{organization}</h2>
        <p className="text-lg ">{text}</p>
        {website && (
          <p className="mt-2">
            <a href={website} className="text-black hover:underline">Saiba mais sobre &gt;</a>
          </p>
        )}
      </div>
      <div className="mt-4 lg:mt-0 lg:w-1/4 lg:flex lg:justify-end">
        <img src={imageSrc} alt={organization} className="w-full h-auto lg:w-64" />
      </div>
    </div>
  );
};

export default Card;
