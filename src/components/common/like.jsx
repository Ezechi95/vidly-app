import React, { Component } from "react";

class Like extends Component {
  state = {
    movie: this.props.likeableMovie
  };

  render() {
    const toggle = this.state.movie.liked;
    return (
      <i
        // onClick={() => this.onToggleClick(toggle)}
        onClick={() => this.props.onClick(this.state.movie)}
        className={this.handleLike(toggle)}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    );
  }

  onToggleClick = toggle => {
    if (toggle === false) {
      toggle = true;
    } else {
      toggle = false;
    }
    this.setState({ liked: toggle });
  };

  handleLike = toggle => {
    let classes;
    if (toggle === true) {
      classes = "fa fa-heart";
    } else {
      classes = "fa fa-heart-o";
    }
    return classes;
  };
}

export default Like;
