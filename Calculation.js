/*var Gravity;
var Dest = document.getElementById(Dest);
var DestValue;
DestValue = Dest.value;
*/


function sumValuesE()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 *1.68732);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesP()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 0.37278);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesB()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 0.5885);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesT()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 7.848);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesV()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 2.30535);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesD()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 1.12815);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesI()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 1.09872);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesMi()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 0.4905);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesMu()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 1.6268);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesG()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 0.04905);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesMo()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 2.69775);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

//Atmosphere

function sumValuesEv()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number((document.formcalc.Thrust.value) * 1000) / 1.7;
    res=num2/(num1 * 16.6861);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesK()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * 9.81);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesDu()
{
    var num1, num2, res;
    num1=Number((document.formcalc.Mass.value) * 1000);
    num2=Number((document.formcalc.Thrust.value) * 1000) * 0.6;
    res=num2/(num1 * 2.943);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}

function sumValuesL()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number((document.formcalc.Thrust.value) * 1000) * 0.9;
    res=num2/(num1 * 7.85);
    res=res.toFixed(3);
    document.formcalc.TWRres.value=res;

    if (res< 1) {
        document.getElementById("Liftoff").innerHTML = "You will not be able to liftoff";
        Liftoff.style.color = "#9c1212"
    
      }
      if (res> 1) {
        document.getElementById("Liftoff").innerHTML = "You will be able to lifotff";
        Liftoff.style.color = "green"
      }
}



//16.6861

/*function sumValues()
{
    var num1, num2, res;
    num1=Number(document.formcalc.Mass.value) * 1000;
    num2=Number(document.formcalc.Thrust.value) * 1000;
    res=num2/(num1 * Gravity);
    document.formcalc.TWRres.value=res;

}

function calcGrav()
{

    if(DestValue = "E"){
        Gravity = 1.68732;
    }

    else if(DestValue = "P"){
        Gravity = 0.37278;
    }

    else if(DestValue = "K"){
        Gravity = 1;
    }
}

if(DestValue = "E"){
        Gravity = 1.68732;
    }

    else if(DestValue = "P"){
        Gravity = 0.37278;
    }

    else if(DestValue = "K"){
        Gravity = 1;
    }


    <div class="content">
                <label>Destination</label>
                <select id="Dest">
                    <option value="E">Eeloo</option>
                    <option value="P">Pol</option>
                    <option value="B">Bop</option>
                    <option value="T">Tylo</option>
                    <option value="V">Vall</option>
                    <option value="L">Laythe</option>
                    <option value="D">Dres</option>
                    <option value="I">Ike</option>
                    <option value="Du">Duna</option>
                    <option value="Mi">Minmus</option>
                    <option value="Mu">Mun</option>
                    <option value="K">Kerbin</option>
                    <option value="G">Gilly</option>
                    <option value="Ev">Eve</option>
                    <option value="M">Moho</option>
                </select>
            </div>
*/
