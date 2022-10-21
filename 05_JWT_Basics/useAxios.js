/*
const result = await axios.get('http://localhost:3000/api/v1/testAxios');
-khi nay result se la du lieu tra ve sau khi thuc hien get data from url
-await dung truoc 1 promise gia tri tra ve la gia tri resolve promise


*/ 





const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000/api/v1';


const getEx = async ()=>{
    await axios.get('/testAxios',{
        params: {
            name: "Tong Phuc",
            age: 20
        }
    })
        .then( ( result)=>{
            console.log("Get : ");
            console.log(result.data);
        })
}
// getEx();




const postEx = async() =>{
    const result = await axios.post('/testAxios',{
       name: "Tong Phuc",
       address: "Thanh Hoa" 
    });
    console.log( result.data);
}
postEx();
getEx();







