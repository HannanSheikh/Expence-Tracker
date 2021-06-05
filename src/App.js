import './App.css';
import Child from './Child';
import { TransProvider } from './transContext';

function App() {
  return (
    <div>
      <TransProvider>
     <Child />
     </TransProvider>
    </div>
  );
}

export default App;
