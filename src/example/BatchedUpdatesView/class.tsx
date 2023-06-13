import { Button } from "antd";
import { Component } from "react";

class Index extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <>
        <div>number: {this.state.number}</div>
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
            this.setState({
              number: this.state.number + 2,
            });
            this.setState({
              number: this.state.number + 3,
            });

            setTimeout(() => {
              this.setState({
                number: this.state.number + 4,
              });
              this.setState({
                number: this.state.number + 5,
              });
              this.setState({
                number: this.state.number + 6,
              });
            });
          }}
        >
          点击
        </Button>
      </>
    );
  }
}

export default Index;
