class Grey extends Box{
    constructor(x,y){
     super(x,y,30,35);
    }
    display(){
        fill("grey");
        super.display();
    }
}