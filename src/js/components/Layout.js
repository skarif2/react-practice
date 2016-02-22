import React from "react";

/*import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}*/


export default class Layout extends React.Component {
   constructor() {
      super();
      this.name = "Sk";
   }
	render(){
		const name = "SK Arif";
		return(
			<h1> Hello World! {this.name}</h1>
		)
	}
}
