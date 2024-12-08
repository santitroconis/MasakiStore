const categories = [
  { name: "Science" },
  { name: "Coding" },
  { name: "Mechanic" },
  // Agrega más categorías según sea necesario
];

export default function CategoryList() {
  return (
    <div className="sidebar-container">
      {categories.map((category, index) => (
        <div key={index} className="option-category">
          {category.name}
        </div>
      ))}
    </div>
  );
}
