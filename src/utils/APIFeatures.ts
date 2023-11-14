import {Query} from 'mongoose'
export class APIFeatures{
    constructor(public query:Query<any,any>, private querystr:any){
        this.query = query;
        this.querystr = querystr
    }

    filter(){
        const queryObj = {...this.querystr};
        const excludedField = ['page','limit','sort','field'];
        excludedField.forEach(el => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        this.query = this.query.find(JSON.parse(queryStr))
        return this;
    }
    limitedField() {
        if (this.querystr.fields) {
          const fields = this.querystr.fields.split(',').join(' ');
          this.query = this.query.select(fields);
        } else {
          this.query = this.query.select('-__v');
        }
        return this;
      }
      pagination() {
        const page = this.querystr.page * 1 || 1;
        const limit = this.querystr.limit * 1 || 10;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
      }
    
      sort() {
        if (this.querystr.sort) {
          const sortBy = this.querystr.sort.split(',').join(' ');
          this.query = this.query.sort(sortBy);
        } else {
          this.query = this.query.sort('-createdAt');
        }
        return this;
      }

}