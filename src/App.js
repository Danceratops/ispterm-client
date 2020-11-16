import Footer from './components/footer'
import Login from './components/login'
import './styles/imports.scss'

function App() {
  return (
    <div className="App">
      <h1>hello from outside login</h1>
      <Login>
        <h1>inside the login</h1>
      </Login>
      <Footer/>
    </div>
  );
}

export default App;
