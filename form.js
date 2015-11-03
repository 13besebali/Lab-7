
function createForm()
{
	var myform = document.createElement("form");
    myform.action = "#";
    myform.method = "post";


    product = document.createElement("input");
    product.value = "value";
    product.name = "name";

    myform.appendChild(product);
    myform.submit();
}

function createButton()
{
	var createButton = document.createElement("BUTTON");
	var name = prompt("Enter the name of Button", "Button");
	var t = document.createTextNode(name);       
	createButton.appendChild(t);
	document.body.appendChild(createButton);
	
}

function createTextArea()
{
	createText();
	var createTextArea = document.createElement("TEXT");
	document.body.appendChild(createTextArea);
	
}

function createText()
{
	var name = prompt("Enter the name of your field", "TEXT");
	var t = document.createTextNode(name);       
	document.body.appendChild(t);
}

function createPassword()
{
	createText();
	var createPW = document.createElement("Password");
	createPW.setAttribute("type", "password");
	document.body.appendChild(createPW);
}

function createSelect()
{
	var sel = document.createElement("select");
	sel.setAttribute("name", "mySelect");
	sel.setAttribute("id", "mySelect");
	sel.style.width = "60px";
	sel.setAttribute("id","ddm");
	document.body.appendChild(sel);
}

function createOption()
{
	var x = document.getElementById("ddm");
	var option = document.createElement("option");
	var name = prompt("Enter the name of your field", "Option");
	option.text = name;
	x.add(option);
	
}

function createRadio()
{
	var radioInput = document.createElement('input');
	radioInput.setAttribute('type', 'radio');
	radioInput.setAttribute('name', name);
	document.body.appendChild(radioInput);
	createText();
}
