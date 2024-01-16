import React, { useState, useEffect } from 'react'
import { filters } from '../../utils/filters'
import './'

const Filters = ({ selectedValues, setSelectedValues, isGuide }) => {
    const [maxSelected, setMaxSelected] = useState(false)

    const handleClick = value => {
        if (!isGuide) {
            if (selectedValues.includes(value)) {
                setSelectedValues(prevSelectedValues =>
                    prevSelectedValues.filter(selectedValue => selectedValue !== value)
                )
            } else {
                if (selectedValues.length < 5) {
                    setMaxSelected(false)
                    setSelectedValues(prevSelectedValues => [...prevSelectedValues, value])
                } else {
                    setMaxSelected(true)
                }
            }
        } else {
          
            if (selectedValues.includes(value)) {
                setSelectedValues(prevSelectedValues =>
                    prevSelectedValues.filter(selectedValue => selectedValue !== value)
                )
            } else {
              setSelectedValues(prevSelectedValues => [...prevSelectedValues, value])
            }
            
        }
    }

    useEffect(() => {
        if (selectedValues.length < 5) {
            setMaxSelected(false)
        }
    }, [selectedValues])

    return (
        <>
            {Object.entries(filters).map(([key, value], idx) => (
                <div
                    className={`filter ${selectedValues.includes(key) ? 'selected' : ''}`}
                    key={idx}
                    onClick={() => handleClick(key)}
                >
                    {key}
                </div>
            ))}
            {maxSelected && !isGuide && (
                <div className='filters-message'>
                    <h5>
                        Maximum filters selected. Please unselect one filter before
                        selecting new.
                    </h5>
                </div>
            )}
        </>
    )
}

export default Filters
