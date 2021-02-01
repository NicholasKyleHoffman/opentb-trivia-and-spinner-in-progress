import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import "./App.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      questions: [],
      score: 0,
      current: 0
    };
  }

  async componentDidMount() {
    try {
      this.setState({
        loading: true
      });
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean"
      );
      const data = await response.json();
      this.setState({
        questions: data.results,
        loading: false,
        score: []
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    if (this.state.loading) {
      // loading: true;
      return null; //app is not ready (fake request is in process)
    }
    return (
      <div>
        <table>
          <tbody>
            <thead id="column-headers">
              <tr>SCORE</tr>
              <tr>CATEGORY</tr>
              <tr>ANSWER</tr>
            </thead>
          </tbody>
        </table>
        <div>
          {this.state.questions.map((question) => {
            return (
              <table>
                <tr>
                  <th>
                    <h3>Score:{this.state.score}</h3>
                  </th>
                  <th>
                    <strong>
                      <h2>Category: {question.category}</h2>
                    </strong>
                    <h4>Question: {question.question}</h4>
                  </th>
                  <td>
                    {/* <input type="radio" id="true-response" name="true-answer" value="TRUE">
                  <input type="radio" id="true-response" name="true-answer" value="FALSE"> */}
                    <button>True</button>
                    <button>False</button>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
