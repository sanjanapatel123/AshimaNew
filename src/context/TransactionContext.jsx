import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { parseEther } from "ethers";
import { contractABI, contractAddress } from "../../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = async () => {
  if (typeof window === "undefined") {
    throw new Error("window is undefined. This code runs only in the browser.");
  }

  const { ethereum } = window;
  if (!ethereum) {
    throw new Error("MetaMask not found");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log({
    provider,
    signer,
    transactionContract,
  });

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = await getEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              Number(transaction.timestamp) * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: Number(transaction.amount) / 10 ** 18,
          })
        );

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(transactions);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("Wallet connected:", accounts[0]);
        getAllTransactions();
      } else {
        console.log("No wallet connected");
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };
  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = await getEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = await getEthereumContract();
      const parsedAmount = parseEther(amount); // ethers v6

      // ✅ Send ETH using MetaMask (not calling contract)
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000 Gwei
            value: parsedAmount.toString(), // make sure it's a hex string
          },
        ],
      });

      // ✅ Log transaction on the blockchain via contract
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log("Transaction sent: ", transactionHash.hash);
      await transactionHash.wait();
      setIsLoading(false);
      console.log("Transaction confirmed: ", transactionHash.hash);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(Number(transactionCount));
      window.reload();
      // localStorage.setItem("transactionCount", Number(transactionCount));
    } catch (error) {
      console.error("sendTransaction error:", error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExists();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        transactionCount,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
