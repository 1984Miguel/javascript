<html>

	<head>
	
	<script>
	
	
	function numero(valor)
	{
	console.log(valor);
	
	}
	
	
	
	</script>
	
	
	<head>
	
	
	</body>
	
	
	<form action="./ejemplo.html" method="get" name="ejemplo">
	<label> Ciudad </label>
	<input type="text" name="numero" onclick="numero(this.value())" />
	<input type="submit" value="Enviar" />
	
	</form>
	
	
	
	</body>



</html>



for (i=0; i<document.test.checkgroup.length; i++){
if (document.test.checkgroup[i].checked==true)
alert("Checkbox at index "+i+" is checked!")




function validate() {
var a = 0, rdbtn=document.getElementsByName("gender")
for(i=0;i<rdbtn.length;i++) {
if(rdbtn.item(i).checked == false) {
a++;
}
}
if(a == rdbtn.length) {
alert("Porfavor, seleccione su país");
document.getElementById("pais").style.border = "2px solid red";
return false;
} else {
document.getElementById("pais").style.border = "";
}
}
</script>