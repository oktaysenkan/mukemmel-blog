import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import Config from '../server/configs/config';

class Post extends Component {
  decodeMarkup(input) {
    return input
      .replace(/\\r/g, "\r")
      .replace(/\\n/g, "\n")
      .replace(/\\'/g, "'")
      .replace(/\\\"/g, '"')
      .replace(/\\&/g, "&")
      .replace(/\\\\/g, "\\")
      .replace(/\\t/g, "\t")
      .replace(/\\b/g, "\b")
      .replace(/\\f/g, "\f")
      .replace(/\\x2F/g, "/")
      .replace(/\\x3C/g, "<")
      .replace(/\\x3E/g, ">")
  }

  render() {
    const { post } = this.props;
    return (
      <div className='post'>
        <a href={`${Config.BaseURL}/post/${post.slug}`}>
          <div className='image' style={{ backgroundImage: `url(${post.image})` }}></div>
        </a>
        <div className='categories'>
          {
            post.categories.map((item, i) => {
              let result = <a href={`${Config.BaseURL}/category/${item.slug}`}>{item.name}</a>;
              let sign;

              if (i !== post.categories.length - 1) {
                sign = <span className='sign'>|</span>
              }
              return [result, sign]
            })
          }
        </div>
        <h3><a href={`${Config.BaseURL}/post/${post.slug}`}>{post.title}</a></h3>
        <div className="details">
          {this.decodeMarkup(post.details)}
        </div>
        <div className="post-meta">
          <ul>
            <li><span className="date">{post.creationAt}</span></li>
            <li className='sign'>|</li>
            <li>
              <a href="#">
                <span className="highlight">Views </span>
                <span>({post.views})</span>
              </a>
            </li>
            <li className='sign'>|</li>
            <li>
              <a href="#">
                <span className="highlight">Comments </span>
                <span>({post.comments.length})</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <span>By&nbsp;</span>
              <a href="">
                <span className="highlight">{ post.author.fullName }</span>
              </a>
              </li>
          </ul>
        </div>
      </div>
    )
  }
}

function decode(input) {
  return input.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\'/g, "'").replace(/\\\"/g, '"').replace(/\\&/g, "&").replace(/\\\\/g, "\\").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\x2F/g, "/").replace(/\\x3C/g, "<").replace(/\\x3E/g, ">")
}

export default Post
