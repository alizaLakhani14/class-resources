function agreement() {
   let condition = document.querySelector("#terms").checked;

   if(condition == true){
      alert("Congratulations! Your account has been created");
   }

   else{
      alert("Please agree with the terms and condition");
   }

}