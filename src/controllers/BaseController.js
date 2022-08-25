export default class BaseController{
    Model
    constructor(Model){
        console.log("crrrrrr",Model)
        this.Model=Model
    }

 

    async index() {
        this.Model.all()
       
    }

    async create(item){
        try {
            return await this.mongooseModel.create(item);

        }catch(e){
            console.log("errr ",e.message)
            return {result:false,errorMsg:e.message}
        }
    }

    // async all(cond={}, fields={},options={}, sortOptions={}) {

    //     console.log( "yeeeees")
    //     // return []
    //     let query = this.model.find(cond, fields, options);
    //     if (sortOptions) query = query.sort(sortOptions);
    //     return query.exec();

    // }

    // async findOne(cond: Query<T, T>, fields: OnlyFieldsOfType<T>, options: QueryOptions): Promise<T> {
    //     return <Promise<T>>this.model.findOne(cond, fields, options).exec();
    // }

    // async create(item: T): Promise<T> {
    //     return <Promise<T>>this.model.create(item);
    // }

    // async update(id: ObjectId, newitem: T): Promise<T> {
    //     // return this.model.create(item);
    //     return <Promise<T>>this.model.findByIdAndUpdate(id, newitem, { new: true }).exec();
    // }

    // async upsert(id: ObjectId, item: T): Promise<T> {

    //     // return this.model.create(item);
    //     return <Promise<T>>this.model.findByIdAndUpdate(id, item, { new: true, upsert: true }).exec();
    // }

    // listAll(): Promise<T> {
    //     return this.model.create(item);
    // }

}