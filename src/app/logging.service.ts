export class LoggingService{
  countfromactivetoinactive:number=0;
  countfrominactivetoactive:number=0;
  logStatusChange(status:string){
    if(status==='active'){
         this.countfrominactivetoactive++;
         console.log("Inactive to active users: "+ this.countfrominactivetoactive);
       }
    else{
       this.countfromactivetoinactive++;
       console.log("Active to inactive users: "+ this.countfromactivetoinactive);
    }
  }
}
