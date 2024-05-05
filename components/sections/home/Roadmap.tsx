import React from "react";

const Roadmap: React.FC = () => {
  return (
    <div className="bg-[#081225] py-10 px-2 lg:px-auto pt-32">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-white text-[24px] lg:text-[34px] max-w-[644px] mx-auto mb-12 xl:mb-64">
          Roadmap
        </p>

        <div className="text-center xl:hidden">
          <div className="inline-flex flex-col items-center">
            {ROAD_MAP_DATA.map((item, idx) => (
              <div key={idx} className="inline-block mt-[-50px]">
                <p
                  className={`text-white ${
                    idx === 0 ? "mb-2" : "mb-[-10px]"
                  } flex justify-end text-[14px]`}
                >
                  {item.eventTitle}
                </p>
                <div className="relative">
                  <div className={`absolute p-4 ${idx !== 0 ? "pt-8" : ""}`}>
                    {item.eventData.map((event, edx) => (
                      <div
                        key={edx}
                        className="flex text-white text-[10px] xs:text-[14px] mb-0 sm:mb-3"
                      >
                        <span className="mr-2">●</span>
                        <span className="text-left">{event}</span>
                      </div>
                    ))}
                  </div>
                  <img src={`/images/roadmap/${idx}.png`} alt="1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-[963px] mx-auto hidden xl:block">
          <img
            src="/images/roadmap_bg.png"
            alt="road map background"
            className="w-full"
          />

          {ROAD_MAP_DATA.map((item, idx) => (
            <div key={idx} className={`absolute ${item.position}`}>
              <p className="text-white mb-2 text-right">{item.eventTitle}</p>
              <div className="relative">
                <div className="absolute p-4">
                  {item.eventData.map((event, edx) => (
                    <div key={edx} className="flex text-white text-[14px] mb-3">
                      <span className="mr-2">●</span>
                      <span>{event}</span>
                    </div>
                  ))}
                </div>
                <img src={`/images/${idx}.png`} alt="1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

const ROAD_MAP_DATA = [
  {
    position: "top-[-240px] right-[200px]",
    eventTitle: "Development : 2024 May-June",
    eventData: [
      "Finalize the algorithm for detecting trending Memecoins on TON, Solana, and BASE.",
      "Alpha release of Telegram bot integration for real-time alerts. Airdrop campaign for early users.",
      "Publish RADAR Tokenomics, prep marketing materials and set up staking contracts.",
      "Launch RADAR token.",
      "Testing Phase : Closed group testing to refine detection algorithms and testing of Telegram Bot.",
    ],
  },
  {
    position: "top-[135px] right-[-210px]",
    eventTitle: "Launch : 2024 June-July",
    eventData: [
      "Official launch of the Memecoin scanner and Telegram bot.",
      "Start referral campaigns.",
      "Collecting Feedback for fixes and  improvements.",
    ],
  },
  {
    position: "top-[370px] right-[20px]",
    eventTitle: "Expansion : 2024 July-August",
    eventData: [
      "Expand Coin detection capabilities to include new and emerging platforms.",
      "Enhance bot’s features based on user demand and tech advancements.",
    ],
  },
  {
    position: "top-[190px] left-[-210px]",
    eventTitle: "2024 August-October",
    eventData: [
      "TG Bot integration for auto-buying and sniping Memecoins. ",
      "Include mirror sniper and launch sniper.",
      "Implement limit buy/sell targets to automatically buy and sell Memecoins.",
    ],
  },
  {
    position: "bottom-0 left-[-60px]",
    eventTitle: "2024 October-December",
    eventData: [
      "Revenue Share Program implementation. ",
      "Token holders will receive 70% of all revenue generated based on tokens held.",
    ],
  },
];
