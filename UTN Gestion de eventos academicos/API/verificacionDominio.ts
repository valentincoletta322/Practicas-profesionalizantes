export function verificarDominio(req: any, res: any, next: any){
    res.header('Access-Control-Allow-Origin', "*");
    //res.header('Content-Type', '*');
    console.log(res)
    next();
}