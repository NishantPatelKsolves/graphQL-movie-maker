import "./App.css";
import Hearder from "./components/Hearder";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import AddMovieForm from "./components/AddMovieForm";


function App() {
  return (
    <div className="">
      <Hearder />
      <Movies />
      <AddMovieForm />
      <Footer />
    </div>
  );
}

export default App;
