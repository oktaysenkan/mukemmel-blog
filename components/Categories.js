import React, { Component } from 'react'
import Config from '../server/configs/config';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="categories">
        <h4>Kategoriler</h4>
        <ul>
        {categories.map((category, i) => (
            <li key={i}>
              <a href={`${Config.BaseURL}/category/${category.slug}`}>{category.name}</a>
            </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default Categories
