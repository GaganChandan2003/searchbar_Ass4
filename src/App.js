import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import contries from './utilts/country'

function App() {
  const [query, setquery] = useState('');
  const [loading, setloading] = useState(false);
  const [suggestion, setsuggestion] = useState([]);
  
  useEffect(()=>
  {
    if(query==='')
    {
      setsuggestion([]);
    }
    else{
      let newListOfSuggestions=contries.filter(item=>item.country.toLowerCase().indexOf(query)!==-1?true:false).map((item)=>item.country);
      setsuggestion(newListOfSuggestions);
    }
    setTimeout(()=>{setloading(false)},1000)
  },[query])
  
  return (
    <div className="App">
      <h1>Search Bar</h1>
      <SearchBar loading={loading} setloading={setloading} suggestion={suggestion} onChange={(val)=>setquery(val)} />
    </div>
  );
}

export default App;
