// OBJECT IS A UNIQUE ENTITY WITH PROPERTIES AND METHOD 

// creating an object 
 // 1 ==> Object Literals syntax

//  const circle = {
//     radius:1, 
//     location:{
//         x:1,
//         y:2
//     },
//     draw : function(){
//         console.log("draw")
//     }
//  };
//================================================================================

 

// 2 ==> Factories Function

// function createCircle (radius){
//     return {
//         radius,
//         draw: function(){
//             console.log("draw");
//         }   
//     };
// }

// // to draw a circle we do it like this
//  const circle = createCircle(1);

// =================================================================================

// 3 ==>  Constructor Function

//   function Circle(radius){
//         this.radius= radius;
//     this.draw = function(){
//         console.log("draw")
//     }
//   }  
//   const anotherCircle = new Circle(2);


//example

// function Phone(price,model,company){
//     this.value = price;
//     this.model = model;
//     this.brand = company;
//     this.specs = function(){
//         console.log(`This ${this.model} belongs to ${this.brand} and its Price is ${this.value}`);
//         return 0;
//     }
//     this.comparison = function(){
//         console.log(`Its price is ${this.value/2} of samsung s5`)

//     }

// }

 



// to access members we use '.' notation
//  circle.draw();



// MUTABILITY

 // js objects are mutable , so that the contents of objects are modified and can be updated
 // JS objects contain arrays and functions 

//   const obj =  {
//     name :"saad",
//     number : 10
//   };
  
  
//   const obj1 = obj;
//   obj.number++;
//   console.log(obj1);

//   const obj2 = {
//     name :"saad",
//     number : 10
//   };

  // obj === obj1;   prints true because the grasp the same object
  // obj === obj2 ;  prints false bcz they may have the same info but not grasp the same object

  let newObj = {
    total:65,
    increment:1
  };
  // function
  const incrementTotal = function(obj,val) {
    obj.increment= val;
    return function() {
        console.log(obj.total)
        obj.increment = obj.total;
        console.log(obj.total);
    };
  };

 const incBy1 = incrementTotal(newObj,1);
 const incBy2 = incrementTotal(newObj,2);


