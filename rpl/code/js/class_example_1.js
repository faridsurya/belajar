class Rectangle{
    width;
    heigth;
    calculateArea()
    {
        return this.width*this.heigth;
    }
}
let rect = new Rectangle();
rect.width = 10;
rect.heigth = 9;
console.log(rect.calculateArea());