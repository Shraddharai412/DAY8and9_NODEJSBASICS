//task 1

// var url = require('url');
// const urlstring="https://www.vardhaman.org";
// const pasredUrl = url.parse(urlstring,true);
// console.log(pasredUrl.protocol)
// console.log(pasredUrl.host)
// console.log(pasredUrl.hostname)
// console.log(pasredUrl.port)
// console.log(pasredUrl.pathname)
// console.log(pasredUrl.query.id)    

//task 2
// const url=require('url');
// const urlobject={
//     protocol:'https:',
//     hostname:'www.vardhaman.org',
//     pathname:'/admission-procedure/',

// }
// const formatedurl=url.format(urlobject);
// console.log(formatedurl);


// //task 3    
// const url = require('url');
// const urlstring = "https://www.vardhaman.org";
// const relativeurl="/admission-procedure/";
// const resolvedUel=url.resolve(urlstring,relativeurl);

// console.log(resolvedUel);


//TASK 4

// const url= require('url');
// const urlstring="https://www.vardhaman.org/admission-procedure/?id=123&name=shraddha";
// const pasredUrl=url.parse(urlstring,true);
// console.log(pasredUrl.query)


//task 5
// const abc = require('querystring');
// const querystring='id=1234 & name=john & age=20';
// const parsedQuery=abc.parse(querystring);
// console.log(parsedQuery);

//task 6
// const querystring = require('querystring');
// const queryObject = {
//     id: '1234',
//     name: 'john',
//     age: '20'
// };
// const formattedQuery = querystring.stringify(queryObject);
// console.log(formattedQuery); 

