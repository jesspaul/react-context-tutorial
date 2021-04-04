import BookContextProvider from '../../booklist/src/contexts/BookContext';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
