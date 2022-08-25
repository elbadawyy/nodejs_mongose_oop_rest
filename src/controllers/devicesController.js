import Device from "../models/Device.js"
import Getway from "../models/Getway.js"
import BaseController from "./BaseController.js"

class DeviceController extends BaseController {
    constructor(Model) {
      super(Model);

     


    }

   

    async createInGetway(req,res){
      console.log("rrrr",req.params)
      let getway=Getway.findOne({_id:req.params.getwayId})
      if (getway){
        const device=await Device.create({...req.body,getwayId:req.params.getwayId})
        this.linkDeviceToGetway(device._id,getway)  
        res.send(device)
  
      }else {
        res.status(404).json({ result: false,errorMsg:"getway not found" }) 
      }
    }

    async  linkDeviceToGetway(device_id,getway){
      let newgetway
      if (getway.devices && getway.devices?.length > 0){
        const devices= getway.devices
        devices=devices.filter(function(dev_id){ return dev_id ==  device_id}).length() > 0 ? devices.push(device_id) : devices
        newgetway=await Getway.update(getway._id, {devices: devices} );

      }else{
        newgetway=await Getway.update(getway._id, {devices: [device_id]} );

      }
      // getway.save()
      return newgetway 


    }
 
}

let devicesController = new DeviceController(Device);

export default devicesController
