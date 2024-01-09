const { check } = require("express-validator");
const { validateResult } = require("../helpers/handleValidator");
const { customerModel } = require("../model");

const validatorCustomer = [
  check("name", "Debes ingresar name valido")
    .exists()
    .notEmpty()
    .isLength({ max: 50 }),
  check("firstLastname", "Debes ingresar  firts lastname")
    .exists()
    .notEmpty()
    .isLength({ max: 15 }),
  check("secondLastname", "Debes ingresar second lastname")
    .exists()
    .notEmpty()
    .isLength({ max: 15 }),
  check("email", "Debes ingresar email")
    .exists()
    .notEmpty()
    .isEmail()
    .isLength({ min: 5, max: 50 })
    // .custom(async (value) => {
    //   const data = await customerModel.findOne({ email: value });
    //   if (data) {
    //     return Promise.reject("El email ya se ha registrado");
    //   }
    // })
    ,
  check("sex", "Debes ingresar el sexo del cliente").exists().notEmpty(),
  check("dateBirth", "Debes ingresar fecha de nacimiento").exists().notEmpty(),
  check("campus", "Debes ingresar la sede").exists().notEmpty(),
  check("numberCellphone", "Debes ingresar tu número de contacto")
    .exists()
    .notEmpty(),
  check("address", "Debes ingresar tu direccion").exists().notEmpty(),
  check("neighborhood", "Debes ingresar el barrio").exists().notEmpty(),
  check("terminos", "Debes seleccionar los terminos y condiciones")
    .exists()
    .isBoolean()
    .notEmpty(),
  check("publicidad", "Parametro no requerido").exists().notEmpty().isBoolean(),
  check("papeleria", "Parametro no requerido").exists().notEmpty().isBoolean(),
  check("cosmeticos", "Parametro no requerido").exists().notEmpty().isBoolean(),
  check("variedades", "Parametro no requerido").exists().notEmpty().isBoolean(),
  // check("status", "Debes ingresar el status").default(false),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validatorID = [
  check("id", "Debes ingresar un id valido").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validatorCustomer, validatorID };
