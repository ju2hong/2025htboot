class Greeting extends React.Component {
  render() {
    return <h1 className="greeting">Hello World~</h1>;
  }
}

const root = ReactDom.creatRoot(document.getElementById("root"));
root.render(Greeting);
