import React, {useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from '../Search/Search'

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className="banner__search">
                
                <Button variant="outlined" className="banner__searchButton"
                    onClick={() => setShowSearch(!showSearch)}
                >   {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {showSearch && <Search/>}
            </div>
            <div className="banner__info">
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a different kind of gateway to undercover the hidden gems near you.</h5>
                <Button variant="oulined">
                    Explore Nearby
                </Button>
            </div>

        </div>
    )
}

export default Banner
