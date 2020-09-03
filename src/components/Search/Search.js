import React, { useEffect } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Search = () => {
    const [startDate, setStartDate] = useEffect(new Date())
    const [endDate, setEndDate] = useEffect(new Date())

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
    )
}

export default Search
