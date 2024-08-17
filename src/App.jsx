import './App.css';
import Header from './components/Header.jsx'
import List from './components/List.jsx'
import Evento from './components/Evento.jsx'
import Form from './components/Form.jsx'

function App(props) {
  return (
    <div className="App">
      <Header />
      <List/>

      <h1>Using events</h1>

      <Evento numero="1"/>
      <Evento numero='2' />
      <Form/>
    </div>
  )
}

export default App;
