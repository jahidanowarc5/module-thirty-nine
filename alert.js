
const momComing = () => {
    alert('mom is coming');
}
const askAgree = () => {
   const response =  confirm('are you going to picnic');
   if(response === true){
       alert('send me money for touring');
   }
   else{
       console.log('dura gia mor');
   }
   console.log(response);
}
const askName = () => {
    const name = prompt('write your name');
    if(name){
        console.log(name);
    }
}