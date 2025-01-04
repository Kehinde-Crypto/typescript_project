 abstract class TakePhoto{
  constructor(public cameraMode:string,
    public filter:string

  ){}
  abstract getSepia():void; // abstract method
  get ReelTime():number{
    return 4;
  }
 
}

//const fila = new TakePhoto("test", "configure", 4);

class Instagram extends TakePhoto{
  constructor(public cameraMode:string,
    public filter:string,
    public burst:number
  ){
    super(cameraMode, filter);
  }
 getSepia():void{
    console.log("GetCameraMode");
   }
}
const fila = new TakePhoto("test", "configure", 4);