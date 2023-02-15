import React, { Component } from "react";
import News_item from "./news_item";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class news_component extends Component {
  static defaultProps = {
    category: "general",
    country: "in",
    pagesize: 8,
  };

  //  static propTypes = {
  //   category: this.propTypes.String,
  //   country: this.propTypes.String

  // }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      status: "loading",
      page: 1,
      loading: false,
    };
    document.title = `${
      this.state.page == 1 && this.props.category == "General"
        ? "Home"
        : this.capitalizeFirstLetter(this.props.category)
    }-NewsApp`;
  }

  async update() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d286efba0b54f1c8f35b6743cbb232c&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json(); // it is used to retrieve our data in json format....
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page,
      loading: false,
      totalresults: parsedData.totalResults,
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d286efba0b54f1c8f35b6743cbb232c&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json(); // it is used to retrieve our data in json format....

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalresults: parsedData.totalResults,
    });
  };

  // async is used to indicate that we are going to use asynchronous programming here
  // componentDidMount will run after the render().....
  async componentDidMount() {
    this.update();
  }
  // component did mount has a duty to initialize the page

  // handleprevclick = async () => {
  //   this.update();
  //   this.setState({ page: this.state.page - 1 });
  // };

  // handlenextclick = async () => {
  //   this.update();
  //   this.setState({ page: this.state.page + 1 });
  // };

  render() {
    {
      return (
        <>
          <div className="text-center" style={{ margin: "50px" }}>
            <h1>Top headlines from {this.props.category}</h1>
          </div>

          <div className="container my-4">
            <div className="row">
              {/* ** map is basically used to iterate over the elements in my array that i have defined here */}
              <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
                // inverse={true} //
                hasMore={this.state.articles.length !== this.totalResults}
                // scrollableTarget="scrollableDiv"
                // loader={<h4>Loading...</h4>}
              ></InfiniteScroll>
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <News_item
                      title={element.title ? element.title.slice(0, 49) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 93)
                          : ""
                      }
                      ImgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                      }
                      news={element.url}
                      author={element.author}
                      date={new Date(element.publishedAt).toGMTString()} // GMT string is used to get our time in the
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {this.state.loading ? <Spinner /> : ""}
        </>
      );
    }
  }
}
