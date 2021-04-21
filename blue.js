class Blue extends Box{
    constructor(x,y){
     super(x,y,30,35);
    }
    display(){
        fill("blue");
        super.display();
    }
}