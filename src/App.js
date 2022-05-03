import Header from "./components/Header/Header.js";


const booksData = [
  { title: "Harry Potter", author: "Joane Roaling" },
  { title: "Catcher In The Rye", author: "Selinger" },
  { title: "Idiot", author: "Dostoevsky" }
]

function App() {
  return (
    <div className="App">
     <Header></Header>
    </div>
  );
}

export default App;
