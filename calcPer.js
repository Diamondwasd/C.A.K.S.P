function calcK()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 600000;
    var Param = 3.5316000*1000000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
    res=res.toFixed(1);
    document.formcalc.PERres.value=res

    ////////////////////////////////////////////////////////////////
    hours=res/60
    hours=hours.toFixed(2);
    document.getElementById("hours").innerHTML = "hours:" +hours;

    days=hours/24
    days=days.toFixed(4);
    document.getElementById("days").innerHTML = "days:" +days;

    min=res*1
    min=min.toFixed(1);
    document.getElementById("min").innerHTML = "minutes:" +min;

    seconds=res*60
    seconds=seconds.toFixed(0);
    document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcMo()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 250000;
    var Param = 1.6860938*100000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
    document.formcalc.PERres.value=res

    ////////////////////////////////////////////////////////////////
    hours=res/60
    hours=hours.toFixed(2);
    document.getElementById("hours").innerHTML = "hours:" +hours;

    days=hours/24
    days=days.toFixed(4);
    document.getElementById("days").innerHTML = "days:" +days;

    min=res*1
    min=min.toFixed(1);
    document.getElementById("min").innerHTML = "minutes:" +min;

    seconds=res*60
    seconds=seconds.toFixed(0);
    document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcEv()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 700000;
    var Param = 8.1717302*1000000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcG()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 13000;
    var Param = 8289449.8;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
    document.formcalc.PERres.value=res

    ////////////////////////////////////////////////////////////////
    hours=res/60
    hours=hours.toFixed(2);
    document.getElementById("hours").innerHTML = "hours:" +hours;

    days=hours/24
    days=days.toFixed(4);
    document.getElementById("days").innerHTML = "days:" +days;

    min=res*1
    min=min.toFixed(1);
    document.getElementById("min").innerHTML = "minutes:" +min;

    seconds=res*60
    seconds=seconds.toFixed(0);
    document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcMu()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 200000;
    var Param = 6.5138398*10000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcMi()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 60000;
    var Param = 1.7658000*1000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcDu()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 320000;
    var Param = 1.2867964*1000000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcI()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 130000;
    var Param = 1.8568369*10000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcD()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 138000;
    var Param = 2.1484489*10000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcJ()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 6000000;
    var Param = 2.8252800*100000000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
    document.formcalc.PERres.value=res

    ////////////////////////////////////////////////////////////////
    hours=res/60
    hours=hours.toFixed(2);
    document.getElementById("hours").innerHTML = "hours:" +hours;

    days=hours/24
    days=days.toFixed(4);
    document.getElementById("days").innerHTML = "days:" +days;

    min=res*1
    min=min.toFixed(1);
    document.getElementById("min").innerHTML = "minutes:" +min;

    seconds=res*60
    seconds=seconds.toFixed(0);
    document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcL()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 500000;
    var Param = 1.9620000*1000000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
    document.formcalc.PERres.value=res

    ////////////////////////////////////////////////////////////////
    hours=res/60
    hours=hours.toFixed(2);
    document.getElementById("hours").innerHTML = "hours:" +hours;

    days=hours/24
    days=days.toFixed(4);
    document.getElementById("days").innerHTML = "days:" +days;

    min=res*1
    min=min.toFixed(1);
    document.getElementById("min").innerHTML = "minutes:" +min;

    seconds=res*60
    seconds=seconds.toFixed(0);
    document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcV()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 300000;
    var Param = 2.0748150*100000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcT()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 600000;
    var Param = 2.8258000*1000000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcB()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 65000;
    var Param = 2.4868349*1000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

function calcP()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 44000;
    var Param = 7.2170208*100000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
  document.formcalc.PERres.value=res

  ////////////////////////////////////////////////////////////////
  hours=res/60
  hours=hours.toFixed(2);
  document.getElementById("hours").innerHTML = "hours:" +hours;

  days=hours/24
  days=days.toFixed(4);
  document.getElementById("days").innerHTML = "days:" +days;

  min=res*1
  min=min.toFixed(1);
  document.getElementById("min").innerHTML = "minutes:" +min;

  seconds=res*60
  seconds=seconds.toFixed(0);
  document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}


function calcE()
{
    var Apoaps; var Periaps; var semiMaxis; var res;

    var radius= 210000;
    var Param = 7.4410815*10000000000;
    var twoPi = 2*Math.PI;
   
  Apoaps=Number(document.formcalc.Apoaps.value)+radius;
  Periaps=Number(document.formcalc.Periaps.value)+radius;

  semiMaxis = (Apoaps + Periaps) / 2;
  semiMaxis=semiMaxis.toFixed(2);
  console.log(semiMaxis);

  res=((twoPi) * (Math.sqrt((semiMaxis*semiMaxis*semiMaxis)/(Param))))/60;
 
  res=res.toFixed(1);
    document.formcalc.PERres.value=res

    ////////////////////////////////////////////////////////////////
    hours=res/60
    hours=hours.toFixed(2);
    document.getElementById("hours").innerHTML = "hours:" +hours;

    days=hours/24
    days=days.toFixed(4);
    document.getElementById("days").innerHTML = "days:" +days;

    min=res*1
    min=min.toFixed(1);
    document.getElementById("min").innerHTML = "minutes:" +min;

    seconds=res*60
    seconds=seconds.toFixed(0);
    document.getElementById("seconds").innerHTML = "seconds:" +seconds;
}

