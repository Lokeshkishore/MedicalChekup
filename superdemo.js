class A1{
    constructor(name){
         this.a1=name;
        
    }
    A1(){
        console.log(this.a1);
    }
}
class B1 extends A1{
    constructor(name,model){
        super(name);
        this.b1=name;
        this.b2=model;
    }
    B1(){
        console.log(this.b1);
        console.log(this.b2);
    }
}

const obj = new B1("ford","x3");
obj.B1();
obj.A1();
