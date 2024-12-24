import { useContext } from "react";
import "../styles/body.css";
import { AppContext } from "../utils/contextapi.jsx";
import searchIcon from "../assets/search.svg";

export default function Body() {
  const {
    handleFetchingExcuses,
    activeButton,
    setActiveButton,
    categories,
    apiValue,
    setApiValue,
  } = useContext(AppContext);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    console.log(index);
  };

  const handleApiValueChange = (event) => {
    const value = event.target.value;
    const numValue = value;
    if (value === "" || (numValue > 0 && numValue <= 10)) {
      setApiValue(numValue);
    }
  };

  return (
    <div className="body-main">
      <p className="title"> Master the Art of Getting Out of Anything!</p>

      <div className="options">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`button ${activeButton === index ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="input-number">
        <input
          type="number"
          id="input-box"
          value={apiValue}
          min="1"
          max="10"
          onChange={handleApiValueChange}
          placeholder="1-10"
        />
        <button className="search-button" onClick={handleFetchingExcuses}>
          <img src={searchIcon} alt="search" className="search-img" />
        </button>
      </div>
    </div>
  );
}
