import { useState } from "react";
import HeaderLogo from "../assets/images/logo-white.png";
import CategoryList from "../components/CategoryList";
import MagazineRow from "../components/MagazineRow";
import Logout from "../components/Logout";
import "./Home.css";

function Home() {
  const [filter, setFilter] = useState("");

  const handleCategoryClick = (category) => {
    setFilter(category);
  };

  return (
    <div className="main-container">
      <div className="header-container">
        <img className="header-logo" src={HeaderLogo} alt="Masaki Logo" />
        <Logout />
      </div>
      <div className="nav-container">
        <input
          className="search-bar"
          value={filter.toUpperCase()}
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
          type="text"
        />
      </div>
      <div className="content-container">
        <CategoryList onCategoryClick={handleCategoryClick} />
        <div className="preview-magazine-container">
          {filter ? (
            <MagazineRow category={filter} />
          ) : (
            <>
              <MagazineRow category={"science"} />
              <MagazineRow category={"coding"} />
              <MagazineRow category={"mechanic"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
