const mongoose=require('mongoose');
const EventSchema=new mongoose.Schema({
    description:{
        type:String,
        
    },
    category:{
        type:String,
    },
    date:
    {
        type:String,
        
    }
},{
    timestamps:true
});
const Event=mongoose.model('Event',EventSchema);
module.exports=Event;