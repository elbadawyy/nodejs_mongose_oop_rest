export default class BaseModel{
    mongooseModel
    constructor(MongooseModel){
        this.mongooseModel=MongooseModel
    }

    async create(item){
        // try {
            return await this.mongooseModel.create(item);

        // }catch(e){
        //     console.log("errr ",e.message)
        //     return {result:false,errorMsg:e.message}
        // }
    }

    async all() {

      
        let query =await this.model.find({});
        if (sortOptions) query = query.sort(sortOptions);
        return await query.exec();

    }

    async findOne(cond={}, includeFrom=[]) {
        if(includeFrom?.length>0){
            return this.mongooseModel.findOne(cond).populate(includeFrom).exec();

        }else{
            return this.mongooseModel.findOne(cond).exec();
        }
    }



    async update(id, newitem) {
        // return this.model.create(item);
        return this.mongooseModel.findByIdAndUpdate(id, newitem, { new: true }).exec();
    }

    // async show(id,includeFrom=[]) {
    //     if(includeFrom?.length>0){

    //     }else{
    //         return await this.mongooseModel.find(id).exec();

    //     }
    //     console.log( "yeeeees")
    //     // return []
    // }

}