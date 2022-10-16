class CustomAPIError extends Error{
    constructor(message, statusCode){
        super( message);
        this.statusCode = statusCode;
    }
}


const createCustomer = ( msg, statusCode) =>{
    return new CustomAPIError(msg, statusCode);
}


module.exports = {createCustomer, CustomAPIError};