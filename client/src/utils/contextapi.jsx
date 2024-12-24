import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [activeButton, setActiveButton] = useState(null);
  const categories = [
    "Family",
    "Office",
    "College",
    "Party",
    "Funny",
    "Unbelievable",
    "Developers",
    "Gaming",
  ];
  const [apiValue, setApiValue] = useState("");
  const [data, setData] = useState([]); // Store fetched data

  const handleFetchingExcuses = () => {
    // Only fetch if both `apiValue` and `activeButton` are set
    // `http://localhost:4000/v1/excuse/${categories[activeButton]}/${apiValue}` for if you are runnning server locally aswell
    if (apiValue && activeButton !== null) {
      fetch(
        `https://excuseapi.vercel.app/v1/excuse/${categories[activeButton]}/${apiValue}`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json); // Save fetched data to state
          console.log(json);
        })
        .catch((error) => console.error("Error fetching excuses:", error));
    } else {
      console.error("Please select both a category and a number!");
    }
  };

  const contextValue = {
    data, // Fetched data
    handleFetchingExcuses, // Function to fetch data
    activeButton,
    setActiveButton,
    categories,
    apiValue,
    setApiValue,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
