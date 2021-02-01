// import React from "react";

// class App extends React.Component {
//   state = {
//     loading: true
//   };

//   componentDidMount() {
//     this.fakeRequest().then(() => {
//       const el = document.querySelector(".loader-container");
//       if (el) {
//         el.remove(); // removing the spinner element
//         this.setState({ loading: false }); // showing the app
//       }
//     });
//   }

//   render() {
//     if (this.state.loading) {
//       return null; //app is not ready (fake request is in process)
//     }
//   }
// }

// export default App;
