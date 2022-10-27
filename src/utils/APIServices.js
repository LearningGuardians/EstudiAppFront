import axios from 'axios';
const UseFetchGET=  () => {
    var URL_API = 'http://localhost:8080/operativo/all/Diego';
    axios.get(URL_API)
        .then(function(response){
            response.headers("Access-Control-Allow-Origin", "*");
            response.status(200);
        console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

const getRequests = {
    UseFetchGET};

export default getRequests;