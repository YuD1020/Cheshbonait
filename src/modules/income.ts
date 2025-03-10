
// const {requireFieldsValidation,requireTypeValidation}= require('../services/validations/model')

function newIncome(income: JSON) {
    if (!requireFieldsValidation(income,MODEL_NAMES.INCOME)){
        throw Error('require field validition')
    }
    if (!requireTypeValidation(income,MODEL_NAMES.INCOME)){
        throw Error('require type validition')

    }
    }
module.exports = { newIncome }