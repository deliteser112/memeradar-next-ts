import React from "react";
import Slider from "react-slick";
import NewsCard from "../../common/NewsCard";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute next-prev-button right-[50px] z-10`}
      onClick={onClick}
    >
      Next
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute next-prev-button left-auto right-20 z-10`}
      onClick={onClick}
    >
      Prev
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const LatestMemeNews = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-14 pb-24 px-2 lg:px-auto relative">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto my-6">
        <p className="text-white text-[26px]">Latest Meme News</p>
        <div className="flex items-center">
          <span className="text-white text-[18px] mr-2">See All</span>
          <img
            src="/images/arrow-right.svg"
            className="mt-[1px] h-3 w-3"
            alt="arrow right"
          />
        </div>
      </div>
      <Slider {...settings}>
        {newsData.map((news, idx) => (
          <NewsCard
            key={idx}
            imageSrc={news.imageSrc}
            bannerTitle={news.bannerTitle}
            isBlack={news.isBlack}
            title={news.title}
            date={news.date}
          />
        ))}
      </Slider>
    </div>
  );
};

export default LatestMemeNews;

const newsData = [
  {
    imageSrc: "/images/slide-1.png",
    bannerTitle: "How to attract Active Users with Quests on MemeRadar",
    title: "How to attract Active Users with Quests on MemeRadar",
    isBlack: true,
    date: "3 Days ago",
  },
  {
    imageSrc: "/images/slide-2.png",
    bannerTitle: "Top 10 Best Upcoming Memecoin Airdrops",
    title: "Top 10 Best Upcoming Memecoin Airdrops",
    isBlack: false,
    date: "1 Week ago",
  },
  {
    imageSrc: "/images/slide-3.png",
    bannerTitle: "Top 50 Memecoins of 2023 : A Year of boom and bust",
    title: "Meet the Creators of Top Memecoins of 2024",
    isBlack: false,
    date: "2 Weeks ago",
  },
  {
    imageSrc: "/images/slide-4.png",
    bannerTitle: "Meet the Creators of Top Memecoins of 2024",
    title: "Top 50 Memecoins of 2023 : A Year of 2023",
    isBlack: false,
    date: "2 Weeks ago",
  },
];
