const Category = require("../Model/Category")
const slugify = require('slugify')



// Create
exports.createCategory =async (req,res) =>{
    const {category_name} = req.body
    const category = await Category.create({
        category_name:category_name,
        url_category_name:slugify(category_name)
    })

    if(!category){
        return res.json({
            msg:"Category is not created."
        })
    }

    res.json({
        msg:"Category Created Successfully.",
        category
    })
}




// Delete
exports.deleteCategory = async (req,res)=>{
    const {category_url} = req.params

    const categoryDelete = await Category.findOneAndDelete({url_category_name:category_url})

    if(!categoryDelete){
        return res.json({
            msg:"Category Is Deleted Successfully."
        })
    }

    res.json({
        msg:"Category Is Deleted Successfully."
    })
}

