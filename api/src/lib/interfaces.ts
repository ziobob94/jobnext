import {Model, Mongoose} from "mongoose";


export interface MongoManagerInterface {


	connect: () => Promise<Mongoose> ,

	createDocument: (model: any, payload: any) => Promise<any>,

	readDocument: ( query: any, schema: any, doc: any) => Promise<boolean>,

	updateDocument: ( query: any, schema: any, doc: any) => Promise<boolean>,

	deleteDocument: ( query: any, schema: any, doc: any) => Promise<boolean>
}