import React, { useState, useEffect } from 'react';
import { apiNoToken } from '../network/api';

const CategorySidebar = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = '/api/v1/product/allcategory'

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiNoToken(apiUrl, 'GET');
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div style={{ width: '290px', border: '1px solid black' }}>
      {categories.map((category) => (
        <CategoryItem key={category.code} category={category} />
      ))}
    </div>
  );
};

const CategoryItem = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle}>
        {category.name}
      </div>
      {isOpen && category.children && category.children.map(child => (
        <div key={child.code} style={{ marginLeft: '20px' }}>
          {child.name}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
