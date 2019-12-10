import React from 'react'

const Post = ({data}) => (
  <div className='holder'>
    <div className='image'></div>
    <div className='categories'>
      {
        data.categories.map((item, i) => {
          let result = <a>{item}</a>;
          let sign;

          if (i !== data.categories.length - 1) {
            sign = <span>|</span>
          }
          return [result, sign]
        })
      }
    </div>
    <h3>{data.title}</h3>
    <div className="details">{data.details}</div>
    <div className="post-meta">
      <ul>
        <li><span className="date">{data.creationDate}</span></li>
        <li>|</li>
        <li>
          <a href="">
            <span className="highlight">Share </span>
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="#">
            <span className="highlight">Comments </span>
            <span>({data.comments})</span>
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="#">
            <span className="highlight">Views </span>
            <span>({data.views})</span>
          </a>
        </li>
      </ul>

      <div className="author">
        <span>By</span>
        <a href="">
          <span className="highlight">{data.authorName}</span>
        </a> 
      </div>
    </div>


    <style jsx>{`
      .holder {
        display: flex;
        flex-direction: column;
        margin-bottom: 60px;
      }

      .image {
        background: url('${data.image}') no-repeat;
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
      }

      h3 {
        padding-top: 8px;
        font-size: 24px;
        font-family: 'News Cycle', sans-serif;
        font-weight: bold;
      }

      .categories {
        padding-top: 20px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        font-family: 'News Cycle', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
      }
      
      .categories > a,
      .categories > span {
        padding-right: 4px;
      }

      .details {
        padding-top: 8px;
        font-family: 'Playfair Display', sans-serif;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
        font-weight: normal;
      }

      .post-meta {
        text-transform: uppercase;
        font-family: 'News Cycle', sans-serif;
        font-size: 15px;
      }

      .post-meta a{
        text-decoration: none;
        color: #000;
      }

      .post-meta > ul {
        display: flex;
        list-style: none;
        padding-inline-start: 0px;
        margin-block-end: 0px;
        padding-top: 16px;
      }

      .post-meta > ul > li {
        padding-right: 8px;
        display: flex;
        flex-direction: row;
      }

      .post-meta .highlight {
        font-weight: bold;
      }
      
      .author .highlight {
        padding: 0px 4px;
      }
    `}</style>
  </div>
)

export default Post
