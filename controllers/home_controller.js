const Event=require('../models/event');
const db = require('../config/mongoose');
var event_List;
module.exports.shil=function(req,res)
{
    Event.find({},function(err,event)
   {
      if(err)
      {
         console.log('Error in fetching events');
      }
     // console.log(event);
      return res.render('home',{
          title:'My_to_do_list',
         event_List:event
      });
   });
};
module.exports.shr=function(req,res)
{
   Event.create({
       description:req.body.desc,
       category:req.body.category,
       date:req.body.birthday
   },function(err,event)
   {
       if(err)
       {
           console.log('There was an error while putting into db',err);
           return;
       }
       res.redirect('/');
   })
};
module.exports.delete=function(req,res)
{
    //console.log(req.query);
    //var id=req.query;
    //var count=Object.keys(id).length;
    /*for(let i=0;i<count;i++)
    {
        /*Event.findByIdAndDelete(Object.keys(id)[i],function(err)
        {
            if(err)
            {
                console.log('Error finding task');
                return;
            }
            return res.redirect('/');
        })
    }*/
    Event.deleteOne({_id:req.body.hidden},function(err)
    {
          if(err)
          {
              console.log('Error in deleting',err);
              return;
          }
          res.redirect('/');
    });
    
}