function calcMun()
{
    var Mass, Thrust, velocity, h, t, a;

    ///////////
    var g=1.63;
    ///////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcMi()
{
    var Mass, Thrust, velocity, h, t, a;

    ////////////
    var g=0.491;
    ////////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcMo()
{
    var Mass, Thrust, velocity, h, t, a;

    ///////////
    var g=2.70;
    ///////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcG()
{
    var Mass, Thrust, velocity, h, t, a;

    ////////////
    var g=0.049;
    ////////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcI()
{
    var Mass, Thrust, velocity, h, t, a;

    ///////////
    var g=1.10;
    ///////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcD()
{
    var Mass, Thrust, velocity, h, t, a;

    ///////////
    var g=1.13;
    ///////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcV()
{
    var Mass, Thrust, velocity, h, t, a;

    ///////////
    var g=2.31;
    ///////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcT()
{
    var Mass, Thrust, velocity, h, t, a;

    ///////////
    var g=7.85;
    ///////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcB()
{
    var Mass, Thrust, velocity, h, t, a;

    ////////////
    var g=0.589;
    ////////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcP()
{
    var Mass, Thrust, velocity, h, t, a;

    ////////////
    var g=0.373;
    ////////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}

function calcE()
{
    var Mass, Thrust, velocity, h, t, a;

    ///////////
    var g=1.69;
    ///////////

    velocity=Number(document.formcalc.velo.value);
    Mass=Number(document.formcalc.Mass.value) * 1000;
    Thrust=Number(document.formcalc.Thrust.value) *1000;

    //deceleration
    a=(Thrust/Mass)-g;
    a=a.toFixed(1);
    console.log(a);
    document.getElementById("Decel").innerHTML = "Deceleration: " +a+ "m/s";
    Decel.style.color = "#5F51FE"

    //Engine start height
    h= (0-(velocity*velocity))/(2*(-a))
    h=h.toFixed(0);
    console.log(h);
    document.formcalc.Hres.value=h;

    //Burn time
    t=velocity/a;
    t=t.toFixed(0);
    console.log(t);
    document.getElementById("Time").innerHTML = "Brun time: " +t+ "s";
    Time.style.color = "#5F51FE";
}