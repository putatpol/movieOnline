import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
    return (
        <div>
            <Main />
            <Row rowID='1' title="What's Popular" fetchURL={requests.requestPopular} />
            <Row rowID='2' title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
        </div>
    )
}

export default Home
