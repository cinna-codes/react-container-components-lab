import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ''
    }

    // componentDidMount() {
    //     fetch(URL)
    //         .then(res => res.json)
    //         .then(data => console.log(data))
    // }
    
    render() {
        return (
            <div>
                Test Searchable {URL}
                <MovieReviews />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer