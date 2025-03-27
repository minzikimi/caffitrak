import Drink from "../model/Drink";

const drinkController ={}

//request contains header and body
//body has frontend info
drinkController.createDrink=async(req,res)=>{

    try{
        const {
            category,
            size,
            name,
            caffeineContent
        } = req.body;
        const newDrink = new Drink({category, name, size, caffeineContent}) //import model
        await newDrink.save()
        res.status(200).json({status :"ok", data:newDrink}) //instead of send send status , The syntax here is using method chaining, which allows you to call multiple methods on the same object in a single line
    }
    catch(err){
        res.status(400).json({status:"fail", error:err})
    }
   
};

drinkController.getDrink=async(req,res)=>{
    try{
        const drinkList = await Drink.find({})//give me every data
        res.status(200).json({status:"ok", data:drinkList})
    }
    catch(err){
        res.status(400).json({status:"fail", error:err})
    }
}

// drinkController.updateDrink=async(req,res)=>{
//     try{
        
//     }
//     catch(err){
//         res.status(400).json({status:"fail", error:err})
//     }
// }

// drinkController.deleteDrink=async(req,res)=>{
//     try{
//         const 
//     }
//     catch(err){
//         res.status(400).json({status:"fail", error:err})
//     }
// }

export default drinkController;