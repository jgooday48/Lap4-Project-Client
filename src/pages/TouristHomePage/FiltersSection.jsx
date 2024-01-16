import React, { useEffect } from 'react'
import { filters } from '../../utils/filters'
import { useState } from 'react';
import './FiltersSection.css'
import Filters from '../../components/Filters';

const FiltersSection = ({selectedValues, setSelectedValues}) => {

   


    return (
        <div className="filters-section">
            <h3>Tailor Your Experience with Guide Filters!</h3>
            <h4>Choose up to 5 preferences.</h4>

            <div className="filter-container">
                <Filters selectedValues={selectedValues} setSelectedValues={setSelectedValues} isGuide={false} />

                {/* {
                    Object.entries(filters).map(([key, value], idx) => (
                        <div
                            className={`filter ${selectedValues.includes(key) ? 'selected' : ''}`}
                            key={idx}
                            onClick={() => handleClick(key)}
                        >
                            {key}
                        </div>
                    ))
                } */}
            </div>
          

        </div>
    )
}

export default FiltersSection