const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const notificationSchema = mongoose.Schema(
  {
    
    nearestYard:{
      type: String,
      required: [true, "Please add a nearest yard"],
    },
    
    sDate:{
      type:String,
      required:[true, "please add a date"],
    },
    sTime:{
      type:String,
      required:[true, "Please add a time"],
    },
    itemDetails:{
      type: String,
      required: [true, "Please add a itemDetail"],
    },
    userId:{
       type: mongoose.Schema.Types.ObjectId,
    }
},
  {
    timestamps: true,
  }
);



const Notifications = mongoose.model("pickupschedules", notificationSchema);
module.exports = Notifications;
