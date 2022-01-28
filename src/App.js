import "./App.css";
import MyTodos from "./views/todos/MyTodos";
import background from "./assets/img/setup_1.jpg";

function App() {
  return (
    <div
      className="todo-app--container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="todo-app--components-container">
        <MyTodos />
      </div>
    </div>
  );
}

export default App;
