import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import web3 from "web3";

const chainIdTestnet = 8453;

type Props = {
  title?: string;
};

const Header = ({ title = "Home" }: Props) => {
  const [isMenu, setIsMenu] = useState(false);
  const [wallet, setWallet] = useState("");

  const handleConnectWallet = async (): Promise<void> => {
  
    if ((window as any).ethereum) {
      if ((window as any).ethereum.networkVersion !== chainIdTestnet.toString()) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: web3.utils.toHex(chainIdTestnet) }],
          });
        } catch (err) {
          if (err.code === 4902) {
            await (window as any).ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainName: "BASE",
                  chainId: web3.utils.toHex(chainIdTestnet),
                  nativeCurrency: {
                    name: "ETH",
                    decimals: 18,
                    symbol: "ETH",
                  },
                  rpcUrls: ["https://base.llamarpc.com"],
                },
              ],
            });
          }
        }
  
        try {
          const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
          setWallet(accounts[0]);
        } catch (error) {
          // Handle error
          console.error(error);
        }
      } else {
        try {
          const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
          setWallet(accounts[0]);
        } catch (error) {
          // Handle error
          console.error(error);
        }
      }
    } else {
      window.alert("No web3 wallet detected. Please Install metamask!");
    }
  };

  return (
    <div>
      <Head>
        <title>{`MemeRadar | ${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className="bg-[#081225]">
        <nav className="relative navbar max-w-screen-xl min-h-[64px] lg:min-h-[96px] mx-auto px-4 shadow-xl justify-between">
          <div className="absolute inset-y-0 right-4 flex items-center lg:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenu(!isMenu)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <Image
                src={`/images/${!isMenu ? 'menu-icon' : 'close-icon'}.svg`}
                alt="Menu Icon"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </button>
          </div>
          <div className="navbar-start flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="MemeRadar Logo"
                  className="w-8 h-8 mr-2"
                />
                <span className="text-white normal-case text-xl">
                  MemeRadar
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden navbar-end lg:flex">
            {NAV_HEADER.map((item, idx) => (
              <Link href={item.link} key={idx}>
                <div className="flex items-center mr-12 hover:bg-gray-700 hover:text-white block rounded-md  px-3 py-2 text-base font-medium">
                  <span className="text-white normal-case mr-1 ">{item.title}</span>
                  {/* <img
                    src="/images/arrow-down.svg"
                    alt="arrow down"
                    className="mt-1"
                  /> */}
                </div>
              </Link>
            ))}

            <img
              src="/images/notification-dot.png"
              alt="notification"
              className="mr-12"
            />

            <button onClick={handleConnectWallet} className="ease-in duration-200 px-10 py-1 rounded-full border border-[#448EFC] text-white hover:bg-[#448EFC]">
            {wallet
            ? `${wallet.substring(0, 3)}...${wallet.substring(
                wallet.length - 3
              )}`
            : "Connect"}
            </button>
          </div>
        </nav>
        {isMenu && (
          <div className="absolute top-[64px] left-0 w-full bg-[#081225] lg:hidden z-[9999]">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAV_HEADER.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  {item.title}
                </a>
              ))}
              <div className="flex justify-between items-center">
                <div />
                <button onClick={handleConnectWallet} className="ease-in duration-200 px-10 py-1 rounded-full border border-[#448EFC] text-white hover:bg-[#448EFC]">
                {wallet
            ? `${wallet.substring(0, 3)}...${wallet.substring(
                wallet.length - 3
              )}`
            : "Connect"}
                </button>
                <img
                  src="/images/notification-dot.png"
                  alt="notification"
                  className="mr-12"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

const NAV_HEADER = [
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
    title: "Radar",
    link: ""
  }
]
