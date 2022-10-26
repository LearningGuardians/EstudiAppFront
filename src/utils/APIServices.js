import axios from 'axios';
let UseFetchGET=  () => {
    var URL_API = 'http://localhost:8080/pOperativo/prueba';
    axios.get(URL_API)
        .then(function(res){
        console.log("FUNCIONAL")
        })
        .catch(function (error) {
            console.log(error)
        })
}

const getRequests = {
    UseFetchGET};

export default getRequests;