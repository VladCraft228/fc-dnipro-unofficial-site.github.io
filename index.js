document.getElementById("house").onclick = function () 
{
    document.getElementById("house").classList.add('active'); 
    document.getElementById("hist").classList.remove('active');
    document.getElementById("achiev").classList.remove('active');
    document.getElementById("attrib").classList.remove('active');
    document.getElementById("stad").classList.remove('active');
}

document.getElementById("hist").onclick = function () 
{
    document.querySelector("a").classList.remove('active');
    document.getElementById("house").classList.remove('active');
    document.getElementById("hist").classList.add('active'); 
    document.getElementById("achiev").classList.remove('active');
    document.getElementById("attrib").classList.remove('active');
    document.getElementById("stad").classList.remove('active');
}


document.getElementById("achiev").onclick = function () 
{
    document.querySelector("a").classList.remove('active');
    document.getElementById("house").classList.remove('active');
    document.getElementById("hist").classList.remove('active');
    document.getElementById("achiev").classList.add('active'); 
    document.getElementById("attrib").classList.remove('active');
    document.getElementById("stad").classList.remove('active');
}

document.getElementById("attrib").onclick = function () 
{
    document.querySelector("a").classList.remove('active');
    document.getElementById("house").classList.remove('active');
    document.getElementById("hist").classList.remove('active');
    document.getElementById("achiev").classList.remove('active'); 
    document.getElementById("attrib").classList.add('active');
    document.getElementById("stad").classList.remove('active');
}

document.getElementById("stad").onclick = function () 
{
    document.querySelector("a").classList.remove('active');
    document.getElementById("house").classList.remove('active');
    document.getElementById("hist").classList.remove('active');
    document.getElementById("achiev").classList.remove('active'); 
    document.getElementById("attrib").classList.remove('active');
    document.getElementById("stad").classList.add('active');
}