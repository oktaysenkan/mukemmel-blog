import React, { Component } from 'react'

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="categories">
        <h4>Kategoriler</h4>
        <ul>
        {categories.map((category, i) => (
            <li key={i}>
              <a href={`./category/${category.slug}`}>{category.name}</a>
            </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default Categories
