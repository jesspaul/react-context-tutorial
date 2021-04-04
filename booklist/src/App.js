import BookContextProvider from '../../booklist/src/contexts/BookContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
