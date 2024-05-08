import React from "react";
import Newsletter from "../common/Newsletter";



const redirectTelegram = async () => {
  
}


const Footer = () => (  
  <div className="bg-[#081225] pt-20">
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-0 pb-12">
        <div className="mb-16 lg:mb-0 lg:pr-24">
          <p className="text-white text-4xl lg:text-[40px]">
            1000 Memes, <br /> One Community
          </p>
          <div className="flex mt-10">
            <button onClick={(e) => {
              e.preventDefault();
              window.open("https://t.me/memeradarxyz", "_blank")
            }} className="p-4 rounded-full border border-[#464D5C] mr-10">
              <img src="/images/telegram.svg" alt="telegram icon" />
            </button>
            <button onClick={(e) => {
                e.preventDefault();
                window.open("https://twitter.com/memeradarxyz", "_blank")
            }} className="p-4 rounded-full border border-[#464D5C]">
              <img src="/images/x-icon.svg" alt="x icon" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mb-16 lg:mb-0">
          <div className="mb-8 lg:mb-0">
            <p className="text-white mb-4">Product</p>
            <ul>
              {PRODUCTS_FOOTER.map((item, idx) => (
                <li key={idx} className="text-[#C1C4C8] mt-2">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <p className="text-white mb-4">Company</p>
            <ul>
              {COMPANIES.map((item, idx) => (
                <li key={idx} className="text-[#C1C4C8] mt-2">
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[338px] bg-[#20293A] p-12 rounded-lg">
          <p className="text-white mb-4">Newsletter Sign Up</p>
          <Newsletter />

          <p className="text-[#A6A9B0] text-[12px] mt-6">
            Get the Week in Review newsletter and all the latest trends directly
            to your inbox.
          </p>
        </div>
      </div>
      <hr className="border-[#394151]" />
      <p className="text-white mb-4 text-center py-4 text-[14px]">© 2024 MemeRadar • All Rights Reserved</p>
    </div>
  </div>
);

const PRODUCTS_FOOTER = [
  {
    title: "Rankings",
    link: ""
  },
  {
    title: "Rewards",
    link: "https://app.galxe.com/quest/JPHBmu7Pdo6PUYtTrFtSwY"
  },
  {
    title: "Contribute",
    link: "https://www.intract.io/project/memeradar"
  },
  {
    title: "Blog",
    link: ""
  },
  {
    title: "Memeradar Token",
    link: ""
  },

]

export default Footer;

const PRODUCTS = [
  "Rankings",
  "Rewards",
  "Contribute",
  "Blog",
  "MemeRadar Token",
];

const COMPANIES = ["Privacy", "Terms of Use"];
