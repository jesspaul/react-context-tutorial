import BookContextProvider from '../../booklist/src/contexts/BookContext';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
