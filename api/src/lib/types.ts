export type NodeConfig = {
	mode: string
}

export type MongoConfig = {
	username: string,
	password: string,
	db_prod: string,
	db_dev : string
}

export type AxiosOptions = {
	withCredentials: boolean
};

export type CookieOptions = {
	sameSite: boolean
};

export type JWTOptions = {
	headers: {
		alg: string,
		typ: string
	},
	options: {
		expiresIn: number
	}
}

export type Configs = {
	node: NodeConfig,
	mongodb :  MongoConfig,
	axios_opt: AxiosOptions,
	cookie_opt: CookieOptions
	jsonwebtoken_opt: JWTOptions
}


