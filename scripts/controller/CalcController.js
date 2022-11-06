class CalcController{

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){

       let displayCalcEl = document.querySelector("#display");
       let dateEl = document.querySelector("#data");
       let timeEl = document.querySelector("#hora");

       displayCalcEl.innerHTML = "4567";
       dateEl.innerHTML = "1/1/0000";
       timeEl.innerHTML = "01:01";

    }

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get currentDate(){

        return this._currentDate;
    }

    set currentDate(value){
        this._currentDate= value;
    }
}