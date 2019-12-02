
// notice that we set an empty object for the whole object and for also
// for any params that accept an object. These default values will help prevent
// some nasty bugs
const apiRequest = ({endpoint, method, getParams = {}}= {}) => {
    console.log(`The endpoint is ${endpoint}`);
    console.log(`The method is ${method}`);
    console.log('The params are');
    console.log(getParams);
}

// module.exports = {
//     apiRequest
// }

apiRequest({
    endpoint: 'practice',
    method: 'GET',
    getParams: {
        category: 1,
        subcategory: 3
    }
});

apiRequest({
    endpoint: 'practice',
    method: 'POST'
});

apiRequest();

