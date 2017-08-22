var rootDiv = Vue.component('rootdiv', {
template : `
<div id="rootDiv">
	<masterdiv @readDetail="readDetail"> </masterdiv>
	<p>{{read}}</p> 	
</div>

`, 
data: function(){
		return{
			read: true

		}
	},
	methods:{
		readDetail(index){
			this.read = false;
		}
	}

})

new Vue({
	el:'#rootDiv'
})