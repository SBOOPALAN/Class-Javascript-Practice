// call stack fuction

let i;

for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 1000);
}

/*set time out

setTimeout(()=>{
    
    console.log("set time out after 1 second")


},1000) */
