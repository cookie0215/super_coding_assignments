import './App.css';
import GlobalStyle from "./styles/GlobalStyles";
import Header from './components/Header';
import ImageGroup from './components/ImageGroup';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header></Header>
        <ImageGroup></ImageGroup>
        <Products></Products>
      </div>
    </>
  );
}

export default App;
