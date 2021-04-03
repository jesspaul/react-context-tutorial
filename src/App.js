import BookList from "./components/BookList/BookList";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
