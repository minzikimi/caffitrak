
import Drink from "../model/Drink.js"

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
        res.status(201).json({status :"ok", data:newDrink}) //instead of send send status , The syntax here is using method chaining, which allows you to call multiple methods on the same object in a single line
    }
    catch(err){
        res.status(400).json({status:"fail", error:err})
    }
   
};

drinkController.getDrink=async(req,res)=>{
    try{

        const today = new Date();

        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        const drinkList = await Drink.find({
            createdAt: {
                $gte: startOfDay, 
                $lt: endOfDay     
            }
        }).select("-__v"); // exclude __v field

        if (drinkList.length === 0) {
            return res.status(404).json({ status: "fail", message: "No drinks found for today" });
        }
        res.status(200).json({status:"ok", data:drinkList})
    }
    catch(err){
        res.status(400).json({status:"fail", error:err})
    }
}

drinkController.updateDrink=async(req,res)=>{
    try{
        const drink = await Drink.findById(req.params.id);
        if(!drink){
            throw new Error("Cannot find the drink");
        }
        const fields = Object.keys(req.body);
        fields.map((item)=> (drink[item]=req.body[item]));
        await drink.save;

        if (!drink) {
            return res.status(404).json({status: "fail", message: "Drink not found"});
        }

        res.status(200).json({status:"ok", data:drink});
    }
    catch(err){
        res.status(400).json({status:"fail", error:err})
    }
}

drinkController.deleteDrink=async(req,res)=>{
    try{
        const deleteItem = await Drink.findByIdAndDelete(req.params.id);

        if (!deleteItem) {
            return res.status(404).json({status: "fail", message: "Drink not found"});
        }

        res.status(200).json({status:"ok", data:deleteItem})
    }
    catch(err){
        res.status(400).json({status:"fail", error:err})
    }
}

export default drinkController;