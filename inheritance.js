class parent {
    constructor(){
        this.parent = "schewneger"
    }
}
class child extends parent {
    constructor(name){
        super();
         this.name=name;
    }
   getFullName(){
      return this.parent+" "+ this.name
}
}
const baby = new child ("arlnold");
const baby2 = new child('tom');
console.log(baby.getFullName());
console.log(baby2.getFullName());
