import React, { useState } from 'react';
import { useEffect } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    fetch('https://630b6045ed18e82516525aee.mockapi.io/utems')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => (
                  <PizzaBlock key={obj.id} {...obj} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
