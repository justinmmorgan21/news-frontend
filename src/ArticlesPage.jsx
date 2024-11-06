import { useState, useEffect } from 'react'
import axios from 'axios'

export function ArticlesPage() {

  const [articles, setArticles] = useState([]);
  const [searchTerms, setSearchTerms] = useState("")

  const articlesIndex = () => {
    axios.get(`http://localhost:3000/articles.json?search=${searchTerms}`).then(response => {
      console.log("data", response.data.articles);
      setArticles(response.data.articles);
      console.log("search", searchTerms)
    })
  }

  useEffect(articlesIndex, [])

  return (
    <main>
      <h1>Welcome to React!</h1>
      <input type="text" onChange={event=>setSearchTerms(event.target.value)}/> <button onClick={() => articlesIndex()}>Search</button>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
      {
        articles.map(article => (
          <div key={article.id} className='shadow-md rounded mb-4 p-4'>
            <h3 className='font-bold'>{article.title}</h3>
            <p>by {article.author}</p> 
            <p >{article.description}</p>
          </div>
        ))
        
      }
      </div>
    </main>
  )
}