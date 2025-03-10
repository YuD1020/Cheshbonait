
const MODEL_NAMES={
    INCOME:'income'
}

const models=[
    {
        name:MODEL_NAMES.INCOME,
        fields:[
            {name:'client',required:{insert:true,update:false,delete:false},type:'string'},
            {name:'date',required:{insert:true,update:false,delete:false},type:new Date},
            {name:'description',required:{insert:true,update:true,delete:false},type:'string'},
            {name:'sum',required:{insert:true,update:true,delete:false},type:'string'}

        ]
    }
]

function getModel(modelName:String){
    return models.find(({name})=>name===modelName)
}
module.exports={getModel,MODEL_NAMES}