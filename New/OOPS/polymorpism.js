 // // overloading 

// same class , same method , different signature
// different class , same method , same signature
class Addition {
    Calculator(a, b, c) {
        if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if(a != undefined && b != undefined){
            console.log(a+b)
        }
        else {
            console.log('please provide correct input')
        }

    }

}

let a = new Addition()
a.Calculator(1)
a.Calculator(1,2)
a.Calculator(2,3,3)


class WorldBank {
    save(){
        console.log('I am world bank save method - 4%')
    }
    loan(){
        console.log('I am world bank loan method 6%')
    }
}

class SBI  extends WorldBank{

    loan(){
        console.log('I am sbi bank loan method 8.6%')
        //super.loan()
    }
    save(){
        console.log('I sbi save method - 16%')
        //super.save()
    }

}

// let wb = new WorldBank()
// wb.loan()
// wb.save()


let sbi = new SBI()
sbi.loan()
sbi.save()








