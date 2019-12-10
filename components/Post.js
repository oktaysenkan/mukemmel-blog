import React from 'react'

const Post = ({data}) => (
  <div className='holder'>
    <div className='image'></div>
    <div className='categories'>
      {
        data.categories.map((item, i) => {
          let result = <a>{item}</a>;
          let sign = '';

          if (i !== data.categories.length - 1) {
            sign = <span>|</span>
          }
          return [result, sign]
        })
      }
    </div>
    <h3>{data.title}</h3>
    <div className="details">{data.details}</div>

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
        padding-top: 30px;
        font-size: 10px;
        color: rgba(0, 0, 0, 0.4);
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
    `}</style>
  </div>
)

export default Post
