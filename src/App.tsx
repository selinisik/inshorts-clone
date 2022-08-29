import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import NavInshorts from './components/NavInshorts';
import { NewsContent } from './components/NewsContent/NewsContent';
import { NewsType } from './components/Types';
import apiKey from './data/config';

function App() {
  const [category, setCategory] = useState('general')
  const [newsArray, setNewsArray] = useState<NewsType[]>([])
  const [newsResults, setNewsResults] = useState()
  const [loadmore, setLoadmore] = useState(20)
  const newsApi = async () => {
    try{
      axios.defaults.headers.get["x-api-key"] = apiKey;
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${loadmore}&apiKey=${apiKey}`)
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    }catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore])
  


  return (
    <div className="App">
      <NavInshorts setCategory = {setCategory}/>

      <NewsContent 
      setNewsArray={setNewsArray}
      setLoadmore={setLoadmore}
      loadmore={loadmore}
      newsArray={newsArray} 
      newsResults={newsResults}/>
      <Footer />
    </div>
  );
}

export default App;
