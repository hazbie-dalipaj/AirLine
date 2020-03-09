import React from 'react';
import HomePage from '../component/homepage/home.page';
import PageFlights from '../component/flights/page.flights';
import Signin from '../component/signin/signin';
import Register from '../component/register/register';
import DetailsUsers from '../component/details.users/details.users';
import FormCheckInCard from '../component/card/form.check.in.card';
import RequestRating from '../component/rating/request.rating';
import HoverRating from '../component/rating/hover.rating';
import FlightsPageCard from '../component/card/flights.page.card';
import FlightsPageOneWay from '../component/flights/form-checkin/form.oneway/flights.page.oneway';
import FlightsPageReturn from '../component/flights/form-checkin/form.return/flights.page.return';

const Routes = [
    {
        id:1,
        path:'/',
        components:<HomePage />,
        isExact:true
    },
    {
        id:2,
        path:'/flights',
        components:<PageFlights />,
        isExact:false
    },
    {
        id:3,
        path:'/signin',
        components:<Signin />,
        isExact:false
    },
    {
        id:4,
        path:'/register',
        components:<Register />,
        isExact:false
    },
    {
        id:5,
        path:'/users-data',
        components:<DetailsUsers />,
        isExact:false
    },
    {
        id:6,
        path:'/card-flights',
        components:<FormCheckInCard />,
        isExact:false
    },
    {
        id:7,
        path:'/request-rating',
        components:<RequestRating />,
        isExact:false
    },
    {
        id:8,
        path:'/rating',
        components:<HoverRating />,
        isExact:false
    },
    {
        id:9,
        path:'/search-flights-by-company/:param1/:param2/:param3',
        components:<FlightsPageCard />,
        isExact:false
    },
    {
        id:10,
        path:'/search-one-way-flights/:param1/:param2/:param3/:param4',
        components:<FlightsPageOneWay />,
        isExact:false
    },
    {
        id:11,
        path:'/search-return-flights/:parametr1/:parametr2/:parametr3/:parametr4/:parametr5',
        components:<FlightsPageReturn />,
        isExact:false
    }
]
export default Routes;
