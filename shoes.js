
var bigshoe=document.getElementsByClassName("imghere")[0];
var bigshoepic=bigshoe.getElementsByTagName("img")[0]; //bigpic
var descriptiongreen=document.getElementsByClassName("description")[0];
var greenshoe=document.getElementsByClassName("option1")[0];
var greenshoepic=greenshoe.getElementsByTagName("img")[0];   //oppic
greenshoepic.addEventListener('click',()=>{
   bigshoepic.src=greenshoepic.src;
   descriptiongreen.innerHTML="The Nike green shoe offers a fresh and bold look. Its vibrant green color adds a lively touch to any outfit. Comfort is a priority, with breathable materials and cushioned insoles.";
});

//purpleshoe:-
var bigshoe2=document.getElementsByClassName("imghere")[0];
var bigshoepic2=bigshoe2.getElementsByTagName("img")[0]; //bigpic
var descriptionpurple=document.getElementsByClassName("description")[0];
var purpleshoe=document.getElementsByClassName("option2")[0];
var purpleshoepic=purpleshoe.getElementsByTagName("img")[0];
purpleshoepic.addEventListener('click',()=>{
    bigshoepic2.src=purpleshoepic.src;
    descriptionpurple.innerHTML="The Nike purple shoe is stylish and eye-catching with its vibrant color. It's comfortable, thanks to breathable materials and cushioned support, making it great for both casual wear and workouts.";
 });

 //blueShoe:-
 var bigshoe3=document.getElementsByClassName("imghere")[0];
var bigshoepic3=bigshoe3.getElementsByTagName("img")[0]; //bigpic
var descriptionblue=document.getElementsByClassName("description")[0];
var blueshoe=document.getElementsByClassName("option3")[0];
var blueshoepic=blueshoe.getElementsByTagName("img")[0];
blueshoepic.addEventListener('click',()=>{
    bigshoepic3.src=blueshoepic.src;
    descriptionblue.innerHTML="The Nike blue shoe combines a sleek and versatile design with a striking color. The deep blue hue is both stylish and adaptable, easily pairing with different outfits.";
});





















