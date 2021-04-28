//@kehomaxd



export class Mobile {

    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:number;
    public color:string;
    public is5G:boolean;
    public cameraNum: number;
    public price:number;

    constructor(namePrm:string, modelPrm:string, trademarkPrm:string, sdSizePrm:number, colorPrm:string, is5GPrm:boolean, cameraNumPrm:number, pricePrm:number){

        this.name = namePrm;
        this.model = modelPrm;
        this.trademark = trademarkPrm;
        this.sdSize = sdSizePrm;
        this.color = colorPrm;
        this.is5G = is5GPrm;
        this.cameraNum = cameraNumPrm;
        this.price = pricePrm;

    }

    // printMobile():void{

    //     console.log (
    //         `Nombre: ${this.name}\n
    //     Modelo: ${this.model}\n
    //     Marca: ${this.trademark}\n
    //     Memoria: ${this.sdSize}G\n
    //     Color: ${this.color}\n
    //     Es 5G: ${this.is5G}\n
    //     Tiene: ${this.cameraNum} camaras
    //     El precio es de: $${this.price}` )

    // }



}
