
import {requireFieldsValidation} from  '../services/validations/model'

export function newIncome(income: JSON) {
    if (!requireFieldsValidation(income,MODEL_NAMES.INCOME)){
        throw Error('require field validition')
    }
    
    }
