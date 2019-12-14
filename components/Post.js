import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';

class Post extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='post'>
        <div className='image' style={{ backgroundImage: `url(${data.image})` }}></div>
        <div className='categories'>
          {
            data.categories.map((item, i) => {
              let result = <a href={'./categories/' + item.slug}>{item.name}</a>;
              let sign;

              if (i !== data.categories.length - 1) {
                sign = <span className='sign'>|</span>
              }
              return [result, sign]
            })
          }
        </div>
        <h3>{data.title}</h3>
        <div className="details">
          <ReactMarkdown source={data.details} />
        </div>
        <div className="post-meta">
          <ul>
            <li><span className="date">{data.creationAt.turkeyDateFormat}</span></li>
            <li className='sign'>|</li>
            <li>
              <a href="">
                <span className="highlight">Share </span>
              </a>
            </li>
            <li className='sign'>|</li>
            <li>
              <a href="#">
                <span className="highlight">Comments </span>
                <span>({data.comments})</span>
              </a>
            </li>
            <li className='sign'>|</li>
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
              <span className="highlight">{data.author.fullName}</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function decode(input) {
  return input.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\'/g, "'").replace(/\\\"/g, '"').replace(/\\&/g, "&").replace(/\\\\/g, "\\").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\x2F/g, "/").replace(/\\x3C/g, "<").replace(/\\x3E/g, ">")
}

export default Post
