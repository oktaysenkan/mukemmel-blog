import React from 'react'

const categories = [
  "Yazılım",
  "Sektör",
  "Tasarım",
];

const mostReads = [
  "Lorem ipsum dolor sit amet",
  "Suspendisse vitae interdum magna",
  "Lorem ipsum dolor sit amet",
  "Suspendisse vitae interdum magna",
];

const Categories = () => (
  <div className="categories">
    <h4>Kategoriler</h4>
    <ul>
      {categories.map((post, i) => (
        <li key={i}>
          <a href='#'>{post}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default Categories
