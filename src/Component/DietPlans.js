// App.js
import React from "react";
import "../App";
import axios from "axios"; // uimport axios
import Container from "react-bootstrap/Container";
class Dietplans extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({
        items: res.data,
        DataisLoaded: true,
      });
    });
  }
  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <div className="bgimg">
            <Container className="content">
              <h1 className="text-center text-light">Welcome to Dietplans</h1>
              <button type="button" className="btn btn-primary">
                Dietplans
              </button>
            </Container>
          </div>
        </div>
      );

    return (
      <div className="bgimg">
        <Container className="content">
          <h1 className="geeks">Geeks for Geeks</h1>
          <h3>Fetch data from an api in react</h3>
          <div className="container1">
            {items.map((item) => (
              <div className="item">
                <ol key={item.id}>
                  <div>
                    <strong>{"User_Name : "}</strong>
                    {item.username},
                  </div>
                  <div>Full_Name : {item.name},</div>
                  <div>Address : {item.address.street},</div>
                  <div>User_Email : {item.email}</div>
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Dietplans;


