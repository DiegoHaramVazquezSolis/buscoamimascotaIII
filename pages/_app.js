import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/styled/Layout';
import { auth } from '../firebase/firebase';

class MyApp extends App {
  state = {
    user: null
  };
  componentDidMount(){
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user: true});
      } else {
        this.setState({user: false});
      }
    });
  }

  render() {
    const { Component, pageProps } = this.props
    const pathname = this.props.router.route;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} user={this.state.user} pathname={pathname} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp