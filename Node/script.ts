var x = 5;
setTimeout(()=>{
    debugger;  
     //it is break point and execution stop here if we run as node debug script.ts
    //to contineu execution run cmd cont .
    console.log("world")
},1000);
console.log("Hello");