import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TSIntro from './components/TSIntro';
import Beginning from './components/Beginning';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
      <div>
          <TSIntro />
        </div>
        <div>
          <Beginning />
        </div>
        <div>
          <Task1 />
        </div>
        <div>
          <Task2 />
        </div>
        <div>
          <Task3 />
        </div>
        <div>
          <Task4 />
        </div>
        <div>
          <Task5 />
        </div>
        <div>
          <Task6 />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
