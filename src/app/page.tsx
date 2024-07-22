"use client";

import { useState } from "react";
import TonWeb from "tonweb";
import * as constants from "../../app.config"

import { uploadFile, uploadJson } from "../services/upload";

import { TonConnectButton } from '@tonconnect/ui-react';
const { NftCollection, NftItem } = TonWeb.token.nft;

const tonweb = new TonWeb(
  new TonWeb.HttpProvider(constants.NETWORK, {
    apiKey: constants.API_KEY,
  }),
);

export default function Home() {
  const [walletAddress, setWalletAddress]: any = useState("");

  const connectWallet = async () => {
    try {
      if (window.tonProtocolVersion || window.tonProtocolVersion > 1) {
        if (window.ton.isTonWallet) {
          console.log("TON Wallet Extension found!");
        }

        const provider = window.ton;
        const accounts = await provider.send("ton_requestWallets");

        const walletAddress = new TonWeb.utils.Address(accounts[0].address);

        console.log("Connected accounts:", accounts);

        console.log(
          "Connected wallet address:",
          walletAddress.toString(true, true, true),
        );

        setWalletAddress(walletAddress);
      } else {
        alert("Please update your TON Wallet Extension 💎");
        location.href =
          "<https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd>";
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <header>
        <span>My App with React UI</span>
        <TonConnectButton className="my-button-class" style={{ float: "right" }} />
      </header>
      qqq
    </div>
  );
}