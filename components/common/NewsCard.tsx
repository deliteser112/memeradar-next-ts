import React from 'react';

type NewsCardProps = {
  imageSrc: string;
  bannerTitle: string;
  isBlack: boolean;
  title: string;
  date: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ imageSrc, bannerTitle, isBlack, title, date }) => {
  return (
    <div className="p-4 border border-[#47455B] rounded-xl min-h-[320px] max-w-[320px] mx-auto">
      <div className="relative">
        <img src={imageSrc} alt="news slide" />
        <p className={`absolute top-[50%] left-[10px] ${isBlack ? 'text-black' : 'text-white'}`}>{bannerTitle}</p>
      </div>
      <h3 className="text-white my-8">{title}</h3>
      <div className="flex justify-between">
        <p className="text-white text-[10px]">{date}</p>
        <div className="flex items-center">
          <span className="text-white text-[10px] mr-1">Read Now</span>
          <img src="/images/arrow-right.svg" className="mt-[1px]" alt="arrow right" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
