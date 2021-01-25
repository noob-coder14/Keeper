import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Keeperboard from './components/Keeperboard';
import notes from "./notes";

function App() {
    return (
      <div>
        <Header />
        {notes.map((notes) => {
          return (
            <Keeperboard key={notes.key} title={notes.title} content={notes.content} />
          );
        })}
        ;
        <Footer />
      </div>
    );
  }
  
  export default App;