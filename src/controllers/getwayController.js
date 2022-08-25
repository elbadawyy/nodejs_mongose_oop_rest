import Getway from "../models/Getway.js"
import BaseController from "./BaseController.js"

class GetwayController extends BaseController {
    constructor(Model) {
        super(Model);
    }
  async createGetway(req,res){
    try {
        res.send(await Getway.create(req.body));

    }catch(e){
        res.send( {result:false,errorMsg:e.message})
    }
  }  
}
let getwayController = new GetwayController(Getway);

export default getwayController
