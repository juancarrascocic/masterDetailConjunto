<template>

<div class="detail-div" id="Detail">
		<h1>DETAIL</h1>
		<div id ="Formulario"  class="Formulario">
			<label>Nombre:</label>
			<input :disabled="read" v-model="currentPerson.name" type="text" id="nombreInput" placeholder="Nombre"></input>
			<label>Apellido:</label>
			<input :disabled="read" type="text" v-model="currentPerson.surname" id="apellidoInput" placeholder="Apellido"></input>
			<label>Edad:</label>
			<input :disabled="read" type="number" v-model="currentPerson.age" id="edadInput" placeholder="Edad"></input>
			<div class = "buttonContainer">
			<button v-bind:disabled="disabledOnNoChange"  id="acceptButton" v-on:click="buttonAccept">ACEPTAR</button>
			<button :disabled="read"  id="limpiarButton" v-on:click="buttonClean">LIMPIAR</button>
			<button v-bind:disabled="disabledOnNoChange"  id="resetButton" v-on:click="buttonReset">RESET</button>
			</div>
		</div>
</div>
</template>

<script>
export default {
  // all code for my component goes here
 	 makeGetRequest: function(id){
				$.ajax(url="http://localhost:57470/api/" + this.menuChoice + "/" + id,
					method="GET")
				.done(this.submitDetailValues)
	},
	readDetail: function(index){
	this.makeGetRequest(index);
	this.read = true;
	},
	updateDetail: function(index){
		this.makeGetRequest(index);
		this.previousPerson.index = this.currentPerson.index;
		this.previousPerson.name = this.currentPerson.name;
		this.previousPerson.surname = this.currentPerson.surname;
		this.previousPerson.age = this.currentPerson.age;
		this.read = false;
	},
	newDetail: function(index){
		this.read= false;
		this.currentPerson.index = "";
		this.currentPerson.name = "";
		this.currentPerson.surname = "";
		this.currentPerson.age = "";
	},
	deleteItem: function(index){
		$.ajax({url:"http://localhost:57470/api/ " + this.menuChoice +"/" + index,
			method:"DELETE"})	
		.done(this.makeGetListRequest)
		.fail(function(){
			alert("ELEMENTO NO BORRADO");
		})
	},
}
</script>

<style scoped>
  /* CSS here
   * by including `scoped`, we ensure that all CSS
   * is scoped to this component!
   */
</style>
