import { useState } from "react";
import "../style/Menu.css"

function Menu() {

  const [category, setCategory] = useState("All");

  const foods = [
    {
      name: "Mezze Platter",
      category: "Starters",
      description: "Hummus, baba ganoush, warm pita & pickled veg",
      price: "320",
      tag: "Vegetarian",
      icon: "🥗"
    },
    {
      name: "Coastal Prawn Masala",
      category: "Starters",
      description: "Tiger prawns, curry leaf, butter, coconut vinaigrette",
      price: "480",
      tag: "Seafood",
      icon: "🍤"
    },
    {
      name: "Seekh Kebab",
      category: "Starters",
      description: "Minced lamb, chargrilled, mint chutney",
      price: "390",
      tag: "Grilled",
      icon: "🍢"
    },
    {
      name: "Slow Lamb Tagine",
      category: "Mains",
      description: "8-hour slow cook, saffron rice, toasted almonds",
      price: "680",
      tag: "Chef's Special",
      icon: "🍲",
      special: true
    },
    {
      name: "Kerala Fish Curry",
      category: "Mains",
      description: "Red snapper in coconut-tamarind gravy",
      price: "560",
      tag: "Local Favourite",
      icon: "🐟"
    },
    {
      name: "Dum Chicken Biryani",
      category: "Mains",
      description: "Aged basmati, whole spices, saffron, raita",
      price: "490",
      tag: "Bestseller",
      icon: "🍛"
    },
    {
      name: "Dal Makhani",
      category: "Mains",
      description: "Black lentils slow-simmered 12 hours, cream",
      price: "340",
      tag: "Vegetarian",
      icon: "🥘"
    },
    {
      name: "Watalappan",
      category: "Desserts",
      description: "Coconut custard with jaggery & cashews",
      price: "220",
      tag: "Signature",
      icon: "🍮"
    },
    {
      name: "Coconut Sorbet",
      category: "Desserts",
      description: "Fresh coconut water, lime zest, served in shell",
      price: "180",
      tag: "Light",
      icon: "🍧"
    },
    {
      name: "Coconut Cooler",
      category: "Drinks",
      description: "Fresh coconut, crushed mint, lime soda",
      price: "120",
      tag: "Signature",
      icon: "🥥"
    },
    {
      name: "Filter Kaapi",
      category: "Drinks",
      description: "South Indian drip coffee, frothed milk",
      price: "80",
      tag: "Hot",
      icon: "☕"
    },
    {
      name: "Cardamom Chai",
      category: "Drinks",
      description: "Whole spice tea, ginger, tulsi, hand-poured",
      price: "90",
      tag: "Hot",
      icon: "🍵"
    }
  ];

  const categories = [
    "All",
    "Starters",
    "Mains",
    "Desserts",
    "Drinks"
  ];

  const filteredFoods =
    category === "All"
      ? foods
      : foods.filter((food) => food.category === category);

  return (
    <div className="menu-page">

      <div className="menu-heading">
        <p>OUR MENU</p>

        <h1>Crafted with passion</h1>

        <span>
          Farm-to-table freshness, bold spices, unforgettable plates
        </span>
      </div>

      <div className="categories">

        {categories.map((item) => (

          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>

        ))}

      </div>

      <div className="menu-grid">

        {filteredFoods.map((food) => (

          <div
            className={`menu-item ${
              food.special ? "special" : ""
            }`}
            key={food.name}
          >

            {food.special && (
              <div className="special-label">
                Chef's Special
              </div>
            )}

            <div className="food-icon">
              {food.icon}
            </div>

            <p className="food-category">
              {food.category}
            </p>

            <h2>{food.name}</h2>

            <p className="food-description">
              {food.description}
            </p>

            <div className="food-footer">

              <strong>₹ {food.price}</strong>

              <small>{food.tag}</small>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Menu;