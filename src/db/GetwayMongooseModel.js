import  mongoose  from 'mongoose';
var Schema = mongoose.Schema;

var GetwaySchema = new Schema({
    name: {type: String, required: true, max: 100},
    uid: {type: String, required: true, max: 100,    unique: true},
    ip: {type: String, required: true,validate: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/ },
    devices:[{type:Schema.ObjectId, ref:'Device'}]
},{ timestamps: true });


// Export the model
 let GetwayMongooseModel = mongoose.model('Getway', GetwaySchema);

 export default GetwayMongooseModel