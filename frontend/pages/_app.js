import App from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

import Page from "../components/Page";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // This exposes the query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }

  state = {
    sidebarOpen: false
  };

  toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page toggleSidebar={this.toggleSidebar} open={this.state.sidebarOpen}>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
