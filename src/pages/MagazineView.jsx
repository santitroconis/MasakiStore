import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MagazineList from "../assets/MagazineList";
import HeaderLogo from "../assets/images/logo-white.png";
import "./MagazineView.css";

export default function MagazineView() {
  const { title } = useParams();
  const [magazine, setMagazine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMagazineDetails = () => {
      try {
        const foundMagazine = MagazineList.find((mag) => mag.title === title);
        if (!foundMagazine) {
          throw new Error("Magazine not found");
        }
        setMagazine(foundMagazine);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMagazineDetails();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mag-view-main-container">
      <div className="mag-view-header-container">
        <img
          className="mag-view-header-logo"
          src={HeaderLogo}
          alt="Masaki Logo"
        />
      </div>
      <div className="mag-view-title-container">
        <input className="search-bar" type="text" />
      </div>
      <div className="mag-view-content-container">
        <div className="mag-view-magazine-description">
          <h1 className="mag-view-magazine-description-title">
            {magazine.title}
          </h1>
          <p className="mag-view-magazine-description-text">
            {" "}
            This is where the information would be, everything about the
            magazine and that kinda stuff that doesn't matter at all cuz, anyone
            gonna read that and they just skip this typa shit
          </p>
          <p className="mag-view-magazine-description-price">
            {magazine.price}$
          </p>
        </div>
        <div className="mag-view-magazine-content">
          <img
            className="mag-view-frontpage"
            src={magazine.frontpage}
            alt={magazine.title}
          />
        </div>
      </div>
    </div>
  );
}
