<template>
	<div id="Master" class="master-div">
		<h1>MASTER: {{menuChoice}}</h1>

		<div :class=computedClass(item.Id) v-for="(item, index) in lista" >
			<p class = "nameParagraph">{{index}}    </p>
			<p class = "nameParagraph">{{item.Nombre}}</p>
			<div class ="rowButtonsContainer" >
				<button class="masterButton" v-on:click="readDetail(item.Id)" ><img class="buttonImage" src="images/read.png"/></button>
				<button class="masterButton" v-on:click="updateDetail(item.Id)" ><img class="buttonImage" src="images/update.png"/></button>
				<button class="masterButton" v-on:click="deleteItem(item.Id)" ><img class="buttonImage" src="images/delete.png"/></button>
			</div>
		</div>
		<button class="masterButton buttonNew" v-on:click="newDetail()" ><img class="buttonImage" src="images/new.png"/></button>
	</div>
</template>


<script>
	export default {
  // all code for my component goes here
  name:'masterComponent',
  data: function(){
  	return{
  		menuChoice:"Usuarios",
  		lista:[],
  		currentPerson:{
  			index:"",
  			name:"",
  			surname:"",
  			age:""
  		},
  		previousPerson:{
  			index:"",
  			name:"",
  			surname:"",
  			age:""
  		},

  	}
  },

  methods:{
  	makeGetListRequest: function(){
  		$.ajax(url=urlBase + this.menuChoice,
  			method="GET")
  		.done(this.submitGetListValues)
  	},
  	submitGetListValues: function(datos){
  		this.lista = datos;
  	},
  	computedClass: function (index) {
  		classArray = "master-div-row ";
  		if (this.currentPerson.index != "" && index == this.currentPerson.index) {
  			classArray = classArray + "selected";
  		}

  		return classArray;
  	},
  	deleteItem: function(index){
  		$.ajax({url:urlBase	 + this.menuChoice +"/" + index,
  			method:"DELETE"})	
  		.done(this.makeGetListRequest)
  		.fail(function(){
  			alert("ELEMENTO NO BORRADO");
  		})
  	},
  	readDetail: function(index){
  		this.$emit('readDetail', index);

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
  },
  created(){
  	this.makeGetListRequest();

  },
}
</script>



<style></style>


