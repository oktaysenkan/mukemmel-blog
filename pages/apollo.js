import React, { Component } from 'react'
import Head from 'next/head';
import { Container } from 'reactstrap';
import { Query, graphql } from 'react-apollo';
import { request } from 'graphql-request'
import Config from '../server/configs/config';

class Apollo extends Component {

  render() {
    const { users, errors } = this.props;

    if (errors) {
      return(
        errors.map(error => (<b>{error.message}</b>))
      )
    }
    
    if (users) {
      return (
        <div>
          {
            users.map(u => (u.fullName))
          }
        </div>
      );
    }
  }
}

Apollo.getInitialProps = async () => {
  const query = `{
    users {
      fullName
    }
  }`
  try {
    const data = await request(Config.GraphqlURL, query);
    return { users: data.users };
  } catch (error) {
    console.log(error);
    return { errors: error.response.errors };
  }
};

export default Apollo;
