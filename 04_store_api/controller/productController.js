const { json } = require('body-parser');
const Product = require('../models/product');

const addProduct = async (req, res) => {
    const { name, price, featured, rating, company } = req.body;
    const task = new Product({
        name,
        price,
        featured,
        rating,
        company
    });
    task.save((error) => {
        if (error) {
            console.log(error + "\n in addProduct controller");
            return res.status(400).json({
                success: false,
                msg: "creare failed"
            });
        }
    });
    res.status(201).json({
        name,
        price,
        featured,
        rating,
        company
    });

}



const getAllProducts = async (req, res) => {
    // tai sao lai phai khoi tao ham async boi vi la trong qua trinh su li thi phair doc du lieu tu database ton mot  khoang thoi gian vi vay maf can dung ham async
    var {rating} = req.query;
    // console.log(rating);
    if( rating){   
        console.log("Co rating nhe"); 
        var result = await Product.find({"rating": Number(rating)}).select("name rating price");
        return res.status(200).json(result);
    }
    var a = null;
    // var a = await Product.find({}).select('_id name rating price').limit(10);
    // var id = a[0]._id;
    // console.log( id );

    res.status(200).json(a);
}


const deleteProducts = async( req, res)=>{
    const {name} = req.query;
    if(name){
        const result = await Product.deleteMany({name: name});
        console.log(typeof result.deletedCount);
        return res.status(200).json({
            success: true,
            msg: "Product deleted successfully"
        });
    }
    res.status(400).json({
        success: false,
        msg: "Please provide a name"
    });
}

const updateProduct = async (req, res)=>{
    const {id, rating} = req.body;
    if(id && rating){
        const result = await Product.findByIdAndUpdate( id, {$set: {rating: rating}});
        const listProducts = await Product.find();
        console.log( result);
        return res.status(200).json( listProducts);
    }
    return res.status(400).json({
        success: false,
        msg: "Please provide a id"
    });
}
const sortProduct = async ( req, res)=>{
    const results = await Product.find().select('rating name price').sort({rating: -1});
    results.sort();
    res.status( 200).json( results);
}

module.exports = {
    addProduct: addProduct,
    getAllProducts: getAllProducts,
    deleteProducts: deleteProducts,
    updateProduct: updateProduct,
    sortProduct: sortProduct
}


