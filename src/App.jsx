import React from 'react';
import data from "./data"
import Title from "./Title";
import TagMenu from './TagMenu';
import Categories from "./Categories";

const allCategories = ['all', ...new Set(data.map((item) => {
  return item.category;
}))]

const App = () => {
  const [tagMenuItems, setTagMenuItem] = React.useState(data);
  const [categories, setCategories] = React.useState(allCategories);
  
  const filterItems = (category) => {
    if(category === 'all' ) return setTagMenuItem(data);

    const newTagMenuItems = data.filter((item) => item.category === category)
    setTagMenuItem(newTagMenuItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <TagMenu items={tagMenuItems} />
        <Categories categories={categories} filterItems={filterItems} />
      </section>
    </main>
  );
};
export default App;
