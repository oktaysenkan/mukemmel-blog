import React, { Component } from 'react'
import Categories from './Categories';
import MostReads from './MostReads';

class Sidebar extends Component {
  render() {
    const { categories, mostReads } = this.props;
    return (
      <div className='sidebar'>
        <Categories categories={categories}/>
        <MostReads mostReads={mostReads}/>
       </div>
    )
  }
}


export default Sidebar
