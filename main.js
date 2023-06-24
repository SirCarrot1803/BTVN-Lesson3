
//Bài 1
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
    
// } 

// class Rabbits extends Animal {
//     super (name) {
//         this.name = name;
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbits("White Rabbit");
// console.log(rabbit.name);

//Bài 2
// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
//   }


// class ExtendedClock extends Clock {
//         super (options) {
//             let { precision = 1000 } = options;
//             this.precision = precision;
//             // let precision = 1000;
//             // this.milisecs = precision;
//         }

//         start() {
//             this.render();
//             this.timer = setInterval(() => this.render(), this.precision);
//           }
//     };
// let clock = new Clock;
// console.log(clock);


//Bài 3
class PhanSo {
    constructor (tu,mau){
        this.tu = tu;
        this.mau = mau;
    }


    PS(tu, mau){
      return tu , mau;  
    }
    
    

    timUSCLN(a,b){
        while (a != b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
        return a;
    }
    ToigianPS(){
        let i = this.timUSCLN(a,b)
        TuSo = a / i;
        MauSo = b / i;
    }

    Plus(){
        ts = this.tu * PS().mau + this.mau * PS().tu;
        ms = this.mau * PS().mau;
        PhanSoTong = ToigianPS(ts,ms);
        console.log(PhanSoTong);
    }
    Minus(){
        ts = this.tu * PS().mau - this.mau * PS().tu;
        ms = this.mau * PS().mau;
        PhanSoHieu = ToigianPS(ts,ms);
        console.log(PhanSoHieu);
    }
    Multiply(PS){
        ts = this.tu * PS().tu;
        ms = this.mau * PS().mau;
        PhanSoNhan = ToigianPS(ts,ms);
        console.log(PhanSoNhan);
    }
    Divide(PS){
        ts = this.tu * PS().mau;
        ms = this.mau * PS().tu;
        PhanSoNhan = ToigianPS(ts,ms);
        console.log(PhanSoNhan);
    }
}
let phanSo1 = new PhanSo(16,3);   
let phanSo2 = new PhanSo(4,8);

phanSo1.Plus(phanSo2);
phanSo1.Minus(phanSo2);
phanSo1.Multiply(phanSo2);
phanSo1.Divide(phanSo2);



