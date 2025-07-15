import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userinfo: {},
    };

  //  console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/rajushah404");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userinfo: json,
    // });

    this.timer = setInterval(()=>{console.log("namaste react OP")},1000);
   // console.log(this.props.name + "child component did mount ");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }

    //console.log("Component did update");

    // this is changed on every randered
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  //  console.log("Component did unmount");

  }
  render() {
    //console.log(this.props.name + "child render");
    const { name, id, url, avatar_url } = this.state.userinfo;
    return (
      <div className="user-card">
        <img src={avatar_url} width="100" height="100" alt="User avatar" />
        <h3>Name:{name}</h3>
        <h3>ID: {id}</h3>
        <h4>Github: {url}</h4>
      </div>
    );
  }
}

export default User;
