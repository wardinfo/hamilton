var ctr1=0;
var ctr2=0;
var ctr3=0;
var ctr4=0;
var ctr5=0;
var ctr6=0;
var ctr7=0;
var ctr8=0;
var ctr9=0;
var ctr10=0;
var ctr11=0;
var ctr12=0;
var ctr13=0;
var ctr14=0;
var ctr15=0;

$(document).ready(function() {
$('#graph').append('<img id="graphWard1" src="Age/Ward1.PNG" />');
$('#graph').append($('<img>',{id:'graphWard1Gender',src:'Gender/Ward1.PNG'}))
$('#graph').append($('<img>',{id:'graphWard1Job',src:'Job/Ward1.PNG'}))
$('#graph').append($('<img>',{id:'graphWard1Commute',src:'Commute/Ward1.PNG'}))

	$('.carousel').carousel({
	  interval: 2000
	})
});

function showData1() {
  $("#graph").empty();
	ctr1++;
	if(ctr1 % 2 == 0){
		$('#graph').append($('<img>',{id:'graphWard1Age',src:'Age/Ward1.PNG'}))
		$('#graph').append("<p>Test</p>");
		$('#graph').append($('<img>'p,{id:'graphWard1Gender',src:'Gender/Ward1.PNG'}))
		$('#graph').append($('<img>',{id:'graphWard1Job',src:'Job/Ward1.PNG'}))
		$('#graph').apend($('<img>',{id:'graphWard1Commute',src:'Commute/Ward1.PNG'}))
	}else{
		$("#graph").empty();
	}

}
