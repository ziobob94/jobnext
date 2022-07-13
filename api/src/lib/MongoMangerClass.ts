import mongoose, {Model, Mongoose} from "mongoose";
import {MongoManagerInterface}     from "./interfaces";
import {Configs, MongoConfig}                   from "../lib/types";

export class MongoManagerClass implements MongoManagerInterface {
	connected: boolean;
	#config: Configs;
	#mongoCfg: MongoConfig;
	#url: string;


	public constructor(cfg: any) {
		this.#config = cfg;
		this.#mongoCfg = cfg.mongodb;
		this.#url = (cfg.node.mode === "dev") ?  this.#mongoCfg.db_dev : this.#mongoCfg.db_prod;
	}

	public async connect(): Promise<Mongoose> {
		let connection: Mongoose = null;
		while (connection === null) {
			try {
				let conn: Mongoose = await mongoose.connect(this.#url);
				if (conn) {
					connection = conn;
					console.log("[MONGODB] Connection established");
				}
			}
			catch (e) {
				console.error("[MONGODB] Connection failed: " + e.message);
			}
		}
		return connection;
	}

	public async createDocument( model: any, payload: any): Promise<any> {
		let user_inserted: any = null;
		try{
			user_inserted = await model.save(payload);
			if(user_inserted){
				console.log("[MONGODB] User Creation: SUCCESSFUL ");
				return user_inserted;
			}
			else return user_inserted;
		}
		catch (e) {
			console.error("[MONGODB] User Creation: FAILED " + e.message);
			return e;
		}
	}


	public async readDocument( query: any, schema: any, doc: any): Promise<boolean> {
		return false;
	}

	public async updateDocument( query: any, schema: any, doc: any): Promise<boolean> {
		return false;
	}

	public async deleteDocument( query: any, schema: any, doc: any): Promise<boolean> {
		return false;
	}
}