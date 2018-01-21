const rx =  require('rxjs/Rx');

let myp = new Promise((resolve, reject)=>{
    setTimeout(function(){ resolve("Gekki");},2000);
});

rx.Observable.fromPromise(myp)
    .subscribe((e)=> console.log(e));