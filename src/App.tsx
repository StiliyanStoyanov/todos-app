import {ThemeProvider} from "./theme/ThemeProvider";
import Navbar from "./common/Navbar";
import Todos from "./features/todos/Todos";

const App = () => {
  return (
      <ThemeProvider>
          <Navbar/>
          <Todos/>
      </ThemeProvider>
  );
}

export default App;
