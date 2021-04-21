class Red extends Box{
    constructor(x,y){
     super(x,y,30,35);
    }
    display(){
        fill("red");
        super.display();
    }
}