import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema(
  {
    /* ===============================
       OWNER / MANAGER DETAILS
    =============================== */
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

    /* ===============================
       RESTAURANT BASIC DETAILS
    =============================== */
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

    /* ===============================
       OWNER PERSONAL INFO
    =============================== */
    gender: {
      type: String,
      enum: ["male", "female", "others", "N/A"],
      default: "N/A",
    },

    dob: {
      type: String,
      default: "N/A",
    },

    /* ===============================
       ADDRESS
    =============================== */
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

    /* ===============================
       DOCUMENTS
    =============================== */
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

    /* ===============================
       PAYMENT DETAILS
    =============================== */
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

    /* ===============================
       PROFILE PHOTO
    =============================== */
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
