class Player extends Base {
    constructor(x,y,width,height){
        super(x,y,width,height)

        
    }
    caminar(){
        this.body.velocity.x = this.body.velocity.x +10;
    }

    display(){
        super.display();
    }

}