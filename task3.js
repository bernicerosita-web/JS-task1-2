function eligible(){
let username=prompt("Enter your name:");
let age=prompt("Enter your age");
age=Number(age);
if(age>=18){
    alert("Hello "+username+" you are eligible to vote!");

}
else{
    alert("Hello "+username+" you are not eligible to vote")
}
}
function a(){
    eligible();
let a=confirm("Do you want to check again?");
if(a){
    eligible();
}
else{
    alert("Good bye!");
}
}
a();

