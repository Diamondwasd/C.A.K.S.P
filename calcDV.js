function calcDV()
{
    var num1, num2, num3, res;
    num1=Number(document.formcalc.Mass0.value) *1000;
    num2=Number(document.formcalc.Mass1.value) * 1000;
    num3=Number(document.formcalc.ISPs.value) *9.81;
    res= Math.log(num2/num1)*num3;
    res=res.toFixed(0);
    document.formcalc.DVres.value=res;
}