import Todos from "./features/todos/Todos";
import GlobalStyles from "./globalStyles";
import Navbar from "./common/Navbar";

const App = () => {
  return (
      <>
          <GlobalStyles/>
          <Navbar/>
          <Todos/>
      </>
  );
}

export default App;
