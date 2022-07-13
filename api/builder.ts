import * as fs from "fs";
import * as fse from "fs-extra";

/* *****************  UTILITIES DI BUILDING *************** */
// Crea il file "package.json" da inserire nella cartella build del sito
// Copia i file necessari per l'avvio dei processi tramite pm2

fs.readFile("./package.json",async (err : any,res: any) : Promise<any> => {
	if(res) {
		const pkg : any = JSON.parse(res.toString());
		delete pkg.devDependencies;
		delete pkg.scripts.test;
		delete pkg.scripts.build;


		fs.writeFile("./dist/package.json",JSON.stringify(pkg),() : any =>{
			console.log("package.json copied");
		});

	}
	if (err) console.log(err);
});
