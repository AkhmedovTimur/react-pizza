import React, { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const arrCategory = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  // console.log(activeIndex);

  return (
    <div className="categories">
      <ul>
        {arrCategory.map((el, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
