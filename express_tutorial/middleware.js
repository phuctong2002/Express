const logger = ( req, res, next) =>{
    console.log( 'logger middleware');
    next();
}


const authorize = ( req, res, next)=>{
    console.log('authorize middleware');
    next();
}


module.exports = {logger, authorize}