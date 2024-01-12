import React, { useEffect } from 'react'

const SearchedGuides = ({searchRes}) => {



  useEffect(() => {
    console.log("Searched res: ", searchRes)
  })
  return (
     <section className="guides">
          <div className="result-title">
            <h3>Guides in {searchRes}</h3>
          </div>

        </section>
  )
}

export default SearchedGuides