// Advanced features of JS (ES6)
/*
1>- Arrow Function
2>- Let and const
3>- Promise
4>- Destructuring
5>- spread & rest(...)
6>- Modules
7>- filter , map & reduce
8>- class
9>- Template literal(` `)
10>- Fetch
*/
function waitfortwoseconds()
{
    const ms=new Date().getTime()+8000;
    while(new Date().getTime()<ms);
}
function register()
{
    waitfortwoseconds();
    console.log("register end");
}
function sendemail()
{
    waitfortwoseconds();
    console.log("email end");
}
function login()
{
    waitfortwoseconds();
    console.log(" login end");
}
function getData()
{
    waitfortwoseconds();
    console.log("data end");
}
function displayData()
{
    waitfortwoseconds();
    console.log("Display end");
}
register();
sendemail();
login();
getData();
displayData();
console.log("other Application")
