class Rectangle{
    width;
    height;
    calculateArea()
    {
        return this.width*this.height;
    }
}
let rec = new Rectangle();
rec.width = 8;
rec.height = 10;
console.log(rec.calculateArea());