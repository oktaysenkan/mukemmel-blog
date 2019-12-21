import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import { Container } from 'reactstrap';
import { Query, graphql } from 'react-apollo';
import axios from "axios";
import gql from 'graphql-tag';
import withData from '../apollo/Init';

const query = gql`
{
  users {
    fullName
  }
}
`;

class Apollo extends Component {
  render() {
    let { users } = this.props;

    console.log(users);
    
    if (users) {
      return (
        <div>
          {
            users.map(u => (u.fullName))
          }
        </div>
      );
    }

    return (
      'yok'
    )

  }
}

Apollo.getInitialProps = async () => {
  const response = await axios.post(`http://localhost:4000/graphql`, {
    query
  });

  return { users: response.data.data.users };
};

export default Apollo;
