
function savecall(){


  var qrname=document.getElementById("qrname").value;
  var phone=document.getElementById("website").value;
  var UserID= auth.currentUser.uid;

  db.collection(UserID).doc(qrname).set({
 
      phone:phone, 
      type:"Call",

  }).then(() => {
    console.log("Call Created");
    window.location.href ="dashboard.html";
})
.catch((error) => {

    console.error("Error Writing Document", error);
    
});



}



