import Getway from "../models/Getway.js"
import BaseController from "./BaseController.js"

class GetwayController extends BaseController {
    constructor(Model) {
        super(Model);
    }
  async createGetway(item){
    // try {
        return await Getway.create(item);

    // }catch(e){
    //     console.log("errr ",e.message)
    //     return {result:false,errorMsg:e.message}
    // }
  }  
}

export default new GetwayController(Getway);
