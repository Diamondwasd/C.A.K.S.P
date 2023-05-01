
function calcMi()
{

    var dv1,dv2,TargetOrbit,res;

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + 60000;
  dv1= 171.55 * (Math.sqrt((2*TargetOrbit)/(60000+TargetOrbit))-1);
  //dv1=dv1.toFixed(2);
  console.log(dv1);
  dv2=Math.sqrt((1.7658000*1000000000)/(TargetOrbit))*(1-(Math.sqrt((120000)/(60000+TargetOrbit))));
  //dv2=dv2.toFixed(2);
  console.log(dv2);

  dvf= (171.6 - 9.3315 + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcMu()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 200000;
  var OrbitalV = 570.694;
  var Param = 6.5138398*10000000000;
  var rots = 9.0416;    

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcMo()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 250000;
  var OrbitalV = 821.241;
  var Param = 1.6860938*100000000000;
  var rots = 1.2982;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcG()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 13000;
  var OrbitalV = 25.2517;
  var Param = 8289449.8;
  var rots = 2.8909;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcI()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 130000;
  var OrbitalV = 377.933;
  var Param = 1.8568369*10000000000;
  var rots = 12.467;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcV()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 300000;
  var OrbitalV = 831.6279;
  var Param = 2.0748150*100000000000;
  var rots = 17.789;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcT()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 600000;
  var OrbitalV = 2170.176644;
  var Param = 2.8258000*1000000000000;
  var rots = 17.789;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcB()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 65000;
  var OrbitalV = 195.57996;
  var Param = 2.4868349*1000000000;
  var rots = 0.75005;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcP()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 44000;
  var OrbitalV = 128.0715;
  var Param = 7.2170208*100000000;
  var rots = 0.30653;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}

function calcE()
{
    var dv1,dv2,TargetOrbit,res;
  var radius = 210000;
  var OrbitalV = 595.2623;
  var Param = 7.4410815*10000000000;
  var rots = 67.804;     

  TargetOrbit=Number((document.formcalc.TORHeight.value)*1000) + radius;
  dv1= OrbitalV * (Math.sqrt((2*TargetOrbit)/(radius+TargetOrbit))-1);
  console.log(dv1);
  dv2=Math.sqrt((Param)/(TargetOrbit))*(1-(Math.sqrt((2*radius)/(radius+TargetOrbit))));
  console.log(dv2);

  dvf= (OrbitalV - rots + dv1) +dv2;
  dvf=Math.round(dvf);
  console.log(dvf);
  document.formcalc.costAsc.value=dvf;
}





