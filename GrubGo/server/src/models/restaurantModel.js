import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema(
  {
  
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    mobileNumber: {
      type: String,
      required: true,
    },

    passWord: {
      type: String,
      required: true,
    },

 
    restaurantName: {
      type: String,
      required: true,
    },

    cuisine: {
      type: String,
      required: true,
    },

    isActive: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },

   
    gender: {
      type: String,
      enum: ["male", "female", "others", "N/A"],
      default: "N/A",
    },

    dob: {
      type: String,
      default: "N/A",
    },

  
    address: {
      type: String,
      default: "N/A",
    },

    city: {
      type: String,
      default: "N/A",
    },

    pin: {
      type: String,
      default: "N/A",
    },

    geoLocation: {
      lat: {
        type: String,
        default: "N/A",
      },
      lon: {
        type: String,
        default: "N/A",
      },
    },

    documents: {
      gst: {
        type: String,
        default: "N/A",
      },
      fssai: {
        type: String,
        default: "N/A",
      },
      rc: {
        type: String,
        default: "N/A",
      },
      dl: {
        type: String,
        default: "N/A",
      },
      uidai: {
        type: String,
        default: "N/A",
      },
      pan: {
        type: String,
        default: "N/A",
      },
    },

  
    paymentDetails: {
      upi: {
        type: String,
        default: "N/A",
      },
      account_number: {
        type: String,
        default: "N/A",
      },
      ifsc_Code: {
        type: String,
        default: "N/A",
      },
    },


    photo: {
      url: {
        type: String,
        default: "",
      },
      publicID: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
