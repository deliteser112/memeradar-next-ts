import React from 'react';

type ServiceCardProps = {
  iconSrc: string;
  title: string;
  description: string;
};

const ServiceCard = ({ iconSrc, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#253452] border border-[#2D35F8] border-2 rounded-md p-8">
      <div className="flex justify-between items-start">
        <img src={iconSrc} alt="meme-logo" />
        <img src="/images/right-top-arrow.png" alt="arrow" />
      </div>
      <p className="text-white text-[22px] py-2">{title}</p>
      <p className="text-white max-w-[260px] font-thin">{description}</p>
    </div>
  );
};

export default ServiceCard;
