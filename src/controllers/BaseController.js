export default class BaseController{
    
    constructor(Model){
        this.model=Model
    }

 

    async index(req,res) {
        res.send(await this.model.all())
       
    }

    async create(req,res){
        try {
            console.log("llllll",this)
            res.send(await this.model.create(req.body))

        }catch(e){
            console.log("xxx ",e.message)
            res.send({result:false,errorMsg:e.message})
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