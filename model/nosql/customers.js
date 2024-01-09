const { Schema, model, Types } = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
    },
    firstLastname: {
      type: String,
    },
    secondLastname: {
      type: String,
    },
    email: {
      type: String,
    },
    sex: {
      type: String,
    },
    dateBirth: {
      type: String,
    },
    campus: {
      type: String,
    },
    numberCellphone: {
      type: Number,
    },
    address: {
      type: String,
    },
    neighborhood: {
      type: String,
    },
    terminos: {
      type: Boolean,
      default: false,
    },
    publicidad: {
      type: Boolean,
      default: false,
    },
    papeleria: {
      type: Boolean,
      default: false,
    },
    cosmeticos: {
      type: Boolean,
      default: false,
    },
    variedades: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


CustomerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
module.exports = model("Customers", CustomerSchema);
