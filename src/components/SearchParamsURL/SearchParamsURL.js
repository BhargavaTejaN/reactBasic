import React from 'react'

const SearchParamsURL = () => {

    const model ="Q3"
    const manufacturer = "AUDI"

    const searchParams = new URLSearchParams(window.location.search);
    

    if(manufacturer){
        searchParams.set('manufacturer',manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }

    
    if(model){
        searchParams.set('model',model)
      } else {
        searchParams.delete('model')
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`

      console.log(newPathName);

  return (
    <div>
        <h1>Search Params URL</h1>
    </div>
  )
}

export default SearchParamsURL