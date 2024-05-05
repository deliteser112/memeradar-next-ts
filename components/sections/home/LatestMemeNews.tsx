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
            mlink={news.mlink}
          />
        ))}
      </Slider>
    </div>
  );
};

export default LatestMemeNews;

const newsData = [
  {
    imageSrc: "/images/1article.png",
    bannerTitle: "",
    title: "The Rise of Meme Coins on Base Network: A Layer 2 Phenomenon",
    isBlack: true,
    date: "3 Days ago",
    mlink: "https://medium.com/@memeradar/the-rise-of-meme-coins-on-base-network-a-layer-2-phenomenon-a37478c4799c",
  },
  {
    imageSrc: "/images/2article.png",
    bannerTitle: "",
    title: "Top 50 Memecoins by Market Caps: A Whirlwind Tour of Crypto’s Lighter Side",
    isBlack: false,
    date: "1 Week ago",
    mlink: "https://medium.com/@memeradar/top-50-memecoins-by-market-cap-a-whirlwind-tour-of-cryptos-lighter-side-358fdf823d15"
  },
  {
    imageSrc: "/images/3article.png",
    bannerTitle: "",
    title: "The Surprise Winners of Crypto’s First Quarter",
    isBlack: false,
    date: "2 Weeks ago",
    mlink: "https://medium.com/@memeradar/meme-coins-steal-the-spotlight-the-surprise-winners-of-cryptos-first-quarter-7791bcd08dc5"
  },
  {
    imageSrc: "/images/4article.png",
    bannerTitle: "",
    title: "Top 10 Memecoins on Solana",
    isBlack: false,
    date: "2 Weeks ago",
    mlink: "https://medium.com/@memeradar/top-10-memecoins-on-solana-the-whimsy-the-hype-and-the-community-e4779dc657cf"
  },
];
