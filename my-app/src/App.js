import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting='This is a statful component!' name='Josh' />
    </div>
  );
}

export default App;
