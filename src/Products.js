import React, { useEffect, useState } from 'react';
import restaurants from '/restaurants.json'
function Products() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/restaurants.json'); 
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data.restaurants);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <SingleView key={restaurant.id} data={restaurant} />
      ))}
    </div>
  );
}

export default Products;
