
function requireFieldsValidation(model: Object, object: Object, status: String = 'insert') {
    const arrMissing: [] = []

    const { fields }: any = model

    fields.map(({ name, required }: { name: String, required: Object }) => {
        // if (required[status] && !object[name])
        //     arrMissing.push(name)
    })
    return arrMissing.length === 0 ? true : arrMissing
}

function requireTypeValidation(model: Object, object: Object) {
    const arrMissing: [] = []
    const { fields }: any = model

    fields.forEach(({ name, type }: { name: String, type: any }) => {
        // if (object[name]) {
        //     if (typeof object[name] !== type)
        //         arrMissing.push({ name, type: typeof object[name] })
        // }
    })
    return arrMissing.length === 0 ? true : arrMissing
}

module.exports = {
    requireFieldsValidation,
    requireTypeValidation
}