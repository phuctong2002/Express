const testAxios = ( req, res)=>{
    console.log( req.query);
    res.status(200).json({
        success: true,
        msg: "Dang Test get nhe"
    });
}

const testPostAxios = ( req, res)=>{
    console.log( req.body);
    res.status(200).json({
        success: true,
        msg: "Dang test post nhe"
    });
}
module.exports = {testAxios, testPostAxios};