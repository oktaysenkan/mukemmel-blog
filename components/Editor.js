import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown';

export default class Editor extends Component {
  
  constructor(props){
    super(props);
    this.state = {md: null};

    this.textArea = React.createRef();
    this.onChanged = this.onChanged.bind(this);
  }

  decode(input) {
    return input.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\'/g, "'").replace(/\\\"/g, '"').replace(/\\&/g, "&").replace(/\\\\/g, "\\").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\x2F/g, "/").replace(/\\x3C/g, "<").replace(/\\x3E/g, ">")
  }

  onChanged = (e) => {
    let str = JSON.stringify(e.target.value);
    str = str.substring(1, str.length-1);
    console.log(str);
    str = this.decode(str)
    console.log(str);
    this.setState({
      md: str,
    })
  }

  render() {
    return (
      <div>
        <textarea ref={this.textArea} onChange={this.onChanged} rows="4" cols="50"> </textarea>

        <ReactMarkdown source={this.state.md} />
      </div>
    )
  }
}
