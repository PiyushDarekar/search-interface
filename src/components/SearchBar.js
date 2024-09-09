import React, {useEffect, useState} from 'react'
import {FaSearch} from "react-icons/fa"
const SearchBar = ({setResults}) => {
    const [input,setInput] = useState("")
    
    const fetchData = (value) => {
        fetch("http://openlibrary.org/search.json")
            .then(response => response.json())
            .then(json => {
                const results = json.filter((book) => {
                    return (
                        book && 
                        book.name && 
                        book.name.toLowerCase().includes(value)
                    )
                })
                setResults(results)
            })
    // const [records, setRecords] = useState([])
    // useEffect(()=>{
    //   fetch("http://openlibrary.org/search.json")
    //       .then(response => response.json())
    //       .then(data => setRecords = (data))
    //       .catch(err => console.log(err))
    // },[])
    
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'/>
      <input placeholder='Type to search' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar
