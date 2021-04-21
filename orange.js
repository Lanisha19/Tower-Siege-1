class Orange extends Box{
    constructor(x,y){
     super(x,y,30,35);
    }
    display(){
        fill("orange");
        super.display();
    }
}