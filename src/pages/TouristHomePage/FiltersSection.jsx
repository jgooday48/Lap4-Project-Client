import React, { useEffect } from 'react'
import { filters } from '../../utils/filters'
import { useState } from 'react';
import './FiltersSection.css'

const FiltersSection = ({selectedValues, setSelectedValues}) => {

   
    const [maxSelected, setMaxSelected] = useState(false)

    const handleClick = (value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues((prevSelectedValues) =>
                prevSelectedValues.filter((selectedValue) => selectedValue !== value)
            );
        } else {
            if (selectedValues.length < 5) {
                setMaxSelected(false)
                setSelectedValues((prevSelectedValues) => [...prevSelectedValues, value]);
            } else {
                setMaxSelected(true)
            }
        }
    };

    useEffect(() => {
        if (selectedValues.length < 5) {
            setMaxSelected(false)
        }
        console.log(selectedValues)
    })

    return (
        <div className="filters-section">
            <h3>Tailor Your Experience with Guide Filters!</h3>
            <h4>Choose up to 5 preferences.</h4>

            <div className="filter-container">
                {
                    Object.entries(filters).map(([key, value], idx) => (
                        <div
                            className={`filter ${selectedValues.includes(key) ? 'selected' : ''}`}
                            key={idx}
                            onClick={() => handleClick(key)}
                        >
                            {key}
                        </div>
                    ))
                }
            </div>
            {maxSelected &&
                <div className="filters-message">
                    <h5>Maximum filters selected. Please unselect one filter before selecting new.</h5>
                </div>
            }

        </div>
    )
}

export default FiltersSection