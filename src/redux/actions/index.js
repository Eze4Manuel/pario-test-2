import axios from 'axios';

export const getCovidData = () => {
    return (dispatch) => {
        axios.get('https://covidnigeria.herokuapp.com/api').then((response) => {
            console.log(response.data);
            dispatch(fetchData(response.data.data))
        });
    }
}

export const fetchData = (data) => {
    return {
        type: 'FETCH_DATA',
        data: data
    }
}