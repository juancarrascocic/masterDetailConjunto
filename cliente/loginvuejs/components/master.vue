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

<script type="text/javascript"></script>
<style type="text/css"></style>