class Pink extends Box{
    constructor(x,y){
     super(x,y,30,35);
    }
    display(){
        fill("pink");
        super.display();
    }
}