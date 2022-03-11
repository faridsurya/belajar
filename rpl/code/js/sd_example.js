const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class RectangleModel {
    width;
    heigth;
    calculateArea() {
        //5
        return this.width * this.heigth;
    }
}
class RectangleController {
    view = new RectangleView();
    displayForm() {
        view.index();
    }
    recordRectangleAttributes(attrs) {
        let rect = new RectangleModel();
        rect.width = attrs.width;
        rect.heigth = attrs.heigth;
        //4
        let area = rect.calculateArea();
        //6
        this.view.viewArea(area);
    }
}
class RectangleView {
    index() {
        //2 
        console.log('Menghitung Luas Segiempat.');
        rl.question("Masukkan Lebar: ", function (lebar) {
            rl.question("Masukkan Panjang: ", function (panjang) {
                let controller = new RectangleController();
                //3
                controller.recordRectangleAttributes({ width: panjang, heigth: lebar });
            });
        });
    }
    viewArea(area) {
        console.log('Luas Segiempat: ' + area);
    }
}
let init = new RectangleController();
//1
init.displayForm();