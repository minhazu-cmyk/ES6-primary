// const person = { me: "jackson", id : 34, phone:  02884899, address :"kolabagaN", gfName : "ema watson"

// }
// const result = person.phone;
// const {address, id, gfName,me} = person;

// console.log(address,id, gfName,me);

// const friend = ["sakib khan", "rakib khan", "amir khan","salman khan"];
// const [cotoFriend, boroFriend, ...restof] = friend;
// console.log(cotoFriend, boroFriend, ...restof);


const complexObject = {
   name: "jhony",
   info:{
       address: "jamtola",
       leader : "tiger mofij",
   }
}
const {leader} = complexObject.info;
console.log(leader);