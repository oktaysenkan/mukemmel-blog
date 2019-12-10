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

const Sidebar = () => (
  <div className='wrapper'>
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
    <div className="most-reads">
      <h4>En çok okunanlar</h4>
      <ul>
        {mostReads.map((post, i) => (
          <li key={i}>
            <a href='#'>{post}</a>
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      div {
        font-family: 'News Cycle', sans-serif;
        text-transform: uppercase;
      }

      h4 {
        font-size: 14px;
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: #000;
      }

      ul {
        list-style: none;
        padding-inline-start: 0px;
        margin-block-end: 40px;
      }

      .categories {
        border-left: 1.5px solid rgba(0, 0, 0, 0.13);
        padding: 6px 0px 0px 30px
      }

      .most-reads {
        border-left: 1.5px solid rgba(0, 0, 0, 0.13);
        padding: 6px 0px 0px 30px
      }

      .most-reads li {
        padding-top: 20px;
      }

    `}</style>
  </div>
)

export default Sidebar
