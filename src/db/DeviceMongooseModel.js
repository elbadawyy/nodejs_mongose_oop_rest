import  mongoose  from 'mongoose';
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    vendor: {type: String, required: true, max: 100},
    status: {
        type: String,
        enum: {
          values: ['online', 'offline'],
          message: '{VALUE} is not supported'
        }
      },
    ip: {type: String, required: true,validate: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/ },
},{ timestamps: true });


// Export the model
 let DeviceMongooseModel = mongoose.model('Device', DeviceSchema);

 export default DeviceMongooseModel