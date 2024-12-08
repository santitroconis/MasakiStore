import MagazineList from "../assets/MagazineList.js";
import Magazine from "./Magazine.jsx";
import "./magazinerow.css";

export default function MagazineRow({ category, filter }) {
  return (
    <div className="magazine-row">
      <div className="row-category-name">{category}</div>
      <div className="row-wrapper">
        {MagazineList.filter((magazine) => {
          const title = magazine.title ? magazine.title.toLowerCase() : "";
          const description = magazine.description
            ? magazine.description.toLowerCase()
            : "";
          const searchFilter = filter ? filter.toLowerCase() : "";
          return (
            magazine.category.toLowerCase() === category.toLowerCase() &&
            (title.includes(searchFilter) || description.includes(searchFilter))
          );
        }).map((filteredMagazine) => (
          <Magazine
            key={filteredMagazine.id}
            id={filteredMagazine.id}
            title={filteredMagazine.title}
            frontpage={filteredMagazine.frontpage}
            price={filteredMagazine.price}
          />
        ))}
      </div>
    </div>
  );
}
