import React, { useEffect } from 'react'

const SearchedGuides = ({searchRes}) => {



  useEffect(() => {
    console.log("Searched res: ", searchRes)
  })
  return (
     <>
          <div className="result-title">
            <h3>Guides in {searchRes}</h3>
       </div>
        

        </>
  )
}

export default SearchedGuides