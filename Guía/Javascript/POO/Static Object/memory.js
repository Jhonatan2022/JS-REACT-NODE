const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },

    editA (){
        this.a = "A";
    }
}


const complexObj = JSON.stringify(obj1);
const obj3 = JSON.parse(complexObj);
