const apiurl = 'http://10.14.0.130:5050';
const fake = 'https://dummyjson.com/products';

const result = document.getElementById('odometer');

const getApi = async (path) => {
    try {
        const data = await fetch(`${fake}/${path}`, {
            method: 'GET'
        });
        if (data) {
            return data;
        }
        else {
            throw 'No data';
        }
    }
    catch (error) {
        console.error(error);
    }
    
}

addEventListener('load', (event) => {
    let data = getApi('');
    console.log(data);
});
setTimeout(function(){
    odometer.innerHTML = 1231;
}, 1000);    