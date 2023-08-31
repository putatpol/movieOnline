import React, { useState, useEffect } from 'react'
import requests from '../Requests'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])

    // random movie
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results)
            })
    }, [])
    // console.log(movie)

    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
      };

    return (
        <div className='w-full h-[700px] text-white '>
            <div className='w-full h-full '>
                <div className='absolute w-full h-[700px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className='absolute lg:mx-[8%] mx-[5%] top-[25%] md:p-8 '>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='bg-lime-600 rounded-3xl cursor-pointer text-black py-2 px-5 md:w-36'>
                            Play
                        </button>
                        <button className='border text-white border-gray-300 rounded-3xl  py-2 px-5 ml-4 w-36'>
                            Watch Later
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm'>
                        Released: {movie?.release_date}
                    </p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 200)}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Main
