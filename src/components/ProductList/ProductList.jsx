import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import CartItem from '../CartItem/CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://cdn.pixabay.com/photo/2019/05/13/13/54/snake-plant-4199677_1280.jpg',
        description: 'Air-purifying and low maintenance.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://cdn.pixabay.com/photo/2018/07/14/14/03/spider-plant-3537198_1280.jpg',
        description: 'Great for beginners.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: 'https://cdn.pixabay.com/photo/2020/03/15/17/57/peace-lily-4934075_1280.jpg',
        description: 'Removes indoor toxins.',
        cost: '$18',
      },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      {
        name: 'Aloe Vera',
        image: 'https://cdn.pixabay.com/photo/2018/03/25/14/54/succulent-3258849_1280.jpg',
        description: 'Soothing and easy to grow.',
        cost: '$10',
      },
      {
        name: 'Echeveria',
        image: 'https://cdn.pixabay.com/photo/2017/07/16/17/40/echeveria-2510208_1280.jpg',
        description: 'Rosette-shaped and colorful.',
        cost: '$14',
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleCartClick = () => setShowCart(true);
  const handleContinueShopping = () => setShowCart(false);

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Paradise Nursery</h1>
        <div className="cart-icon" onClick={handleCartClick}>
          🛒 Cart ({totalQuantity})
        </div>
      </div>

      {!showCart ? (
        plantsArray.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-section">
            <h2>{categoryGroup.category}</h2>
            <div className="product-grid">
              {categoryGroup.plants.map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p className="cost">{plant.cost}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.name]}
                  >
                    {addedItems[plant.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
