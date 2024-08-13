import logo from './logo.svg';
import './App.css';
import Graph from '../src/components/Areachart';
import Example from '../src/components/tabs';

export default function App() {
  return (
    <div>
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40'> 
    <Example />
    <Graph />

    </div>
    </div>
    </div>
  )
}
