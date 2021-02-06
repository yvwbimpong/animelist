import React, { Component } from "react";
import logo from "../assets/logo.png";
import axios from "axios";

const primaryLight = "#3AAF29";
const primaryDark = "#007547";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeList: [],
      currentSelectedAnime: false,
    };
  }

  componentDidMount() {
    this.fetchAnimeList();
  }

  fetchAnimeList() {
    //fetch call to fetch site content
    // fetch(`https://api.jikan.moe/v3/top/anime`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });

    axios // axios call to fetch site content
      .get("https://api.jikan.moe/v3/top/anime")
      .then((response) => {
        console.log(response);
        this.setState({
          animeList: response.data.top,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderAnimeDetailModal(item) {
    //popup view for displaying anime details
    return (
      <div
        style={{
          zIndex: 10,
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <div
          style={{
            borderRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // height: "40vh",
            padding: "30px 30px",
            width: "40vw",
            backgroundColor: "white",
            // zIndex: 3,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                height: "35vw",
                minHeight: 240,
                borderRadius: "1vw",
                background: "#234233",
                overflow: "hidden",
                marginBottom: 10,
              }}
            >
              <a
                style={{
                  width: "24%",
                  minWidth: 150,
                  marginRight: "1%",
                  marginBottom: 30,
                }}
                onClick={() => {
                  this.setState(
                    {
                      currentSelectedAnime: item,
                    },
                    () => {
                      console.log("updated state", this.state);
                    }
                  );
                }}
              >
                <img
                  src={item.image_url}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="logo"
                />
              </a>
            </div>
            <div
              style={{
                marginLeft: 20,
              }}
            >
              <p>Title: {item.title}</p>
              <p>Start: {item.start_date}</p>
              <p>End: {item.end_date}</p>
              <p>Episodes: {item.episodes}</p>
              <p>Members: {item.members}</p>
              <p>Rank:{item.rank}</p>
              <p>Score: {item.score}</p>
              <p>Type: {item.type}</p>
            </div>
          </div>

          <button
            // type="button"
            onClick={() => {
              this.setState({
                currentSelectedAnime: false,
              });
            }}
            style={{
              color: primaryDark,
              padding: "10px 30px",
              cursor: "pointer",
              opacity: 0.6,
              background: "white",
              border: 0,
              outline: 0,
            }}
          >
            cancel
          </button>
        </div>
      </div>
    );
  }

  renderListCard(item) {
    //list item for anime
    return (
      <div
        style={{
          width: "24%",
          minWidth: 150,
          marginRight: "1%",
          marginBottom: 30,
        }}
      >
        <div
          style={{
            height: "35vw",
            minHeight: 240,
            maxHeight: 400,
            borderRadius: "1vw",
            background: "#234233",
            overflow: "hidden",
            marginBottom: 10,
          }}
        >
          <a
            style={{
              width: "24%",
              minWidth: 150,
              marginRight: "1%",
              marginBottom: 30,
            }}
            onClick={() => {
              this.setState(
                {
                  currentSelectedAnime: item,
                },
                () => {
                  console.log("updated state", this.state);
                }
              );
            }}
          >
            <img
              src={item.image_url}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              alt="logo"
            />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 0,
              height: "100%",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "#000",
                margin: 0,
                padding: 0,
                marginBottom: 10,
                overflowWrap: "break-word",
              }}
            >
              {item.title}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 10,
                  color: "#666",
                }}
              >
                {item.start_date}
              </p>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 12,
                  color: "#FFC119",
                }}
              >
                Score: {item.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderContent() {
    //page content
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            width: "100%",
            background: "#39CC85",
            justifyContent: "flex-start",
            display: "flex",
            alignItems: "center",
            paddingTop: 30,
            paddingBottom: 30,
            paddingLeft: 30,
          }}
        >
          <img
            src={logo}
            style={{
              height: 50,
            }}
            alt="logo"
          />
          <p
            style={{
              fontSize: 24,
              color: "#fff",
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            AnimeList
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            height: "100%",
            width: "95%",
            maxWidth: 900,

            alignSelf: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          {this.state.animeList.map((item) => {
            return this.renderListCard(item);
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.state.currentSelectedAnime &&
          this.renderAnimeDetailModal(this.state.currentSelectedAnime)}
        {this.renderContent()}
      </div>
    );
  }
}

export default Landing;
