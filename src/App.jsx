import "./index.css";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';
import Empty from "./components/Empty.jsx";
import List from "./components/List.jsx";
import { useState } from 'react';
import { notes as notesData } from '../data';

function App() {

  const [notes, setNotes] = useState(notesData);

  const add = (note) => {
    notes.push(note);
    setNotes([...notes]);
  };

  return (
    <>


      <Header />

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <Form add={add} />
            <List notes={notes} />
            <Empty notes={notes} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App;
