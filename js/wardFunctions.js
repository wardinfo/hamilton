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
$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 1 the highest population in age is 20-29 years old.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Gender',src:'Gender/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Job',src:'Job/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>Higher average of educational and health jobs.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Commute',src:'Commute/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>More people enjoy walking, cycling, and using the public bus.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Dwelling',src:'Dwelling/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>Ward1 has a higher average of older houses then Hamilton.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Income',src:'Income/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>Ward1 has a higher average of older houses then Hamilton.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Minority',src:'Minority/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>Ward1 has a higher average of older houses then Hamilton.</caption>.");
$('#pictures').append($('<img>',{src:'images/Ward1.PNG'}));
$('#pictures').append($('<img>',{src:'images/golf.PNG'}));
$('#pictures').append($('<img>',{src:'images/dundurn.PNG'}));
$('#pictures').append($('<img>',{src:'images/mac.PNG'}));
	$('.carousel').carousel({
	  interval: 2000
	})
});

function showData1() {
  $("#graph").empty();
	$("#pictures").empty();
	ctr1=2;
	ctr2=0;
	ctr3=0;
	ctr4=0;
	ctr5=0;
	ctr6=0;
	ctr7=0;
	ctr8=0;
	ctr9=0;
	ctr10=0;
	ctr11=0;
	ctr12=0;
	ctr13=0;
	ctr14=0;
	ctr15=0;

	if(ctr1 % 2 == 0){
		$('#graph').append($('<img>',{id:'graphWard1Age',src:'Age/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 1 the highest population in age is 20-29 years old.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Gender',src:'Gender/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Job',src:'Job/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Higher average of educational and health jobs.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Commute',src:'Commute/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>More people enjoy walking, cycling, and using the public bus.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Dwelling',src:'Dwelling/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher average of older houses than Hamilton.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Income',src:'Income/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Ward 1 has a 23% average of household income less than $25,000.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Minority',src:'Minority/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher average South Asian, Chinese, and African American.</caption>.");
		$('#pictures').append($('<img>',{src:'images/Ward1.PNG'}));
		$('#pictures').append($('<img>',{src:'images/golf.PNG'}));
		$('#pictures').append($('<img>',{src:'images/dundurn.PNG'}));
		$('#pictures').append($('<img>',{src:'images/mac.PNG'}));
	}else{
		$("#graph").empty();
		$("#pictures").empty();
	}
}

	function showData2() {
		ctr1=0;
		ctr2=2;
		ctr3=0;
		ctr4=0;
		ctr5=0;
		ctr6=0;
		ctr7=0;
		ctr8=0;
		ctr9=0;
		ctr10=0;
		ctr11=0;
		ctr12=0;
		ctr13=0;
		ctr14=0;
		ctr15=0;
	  $("#graph").empty();
		$("#pictures").empty();

		if(ctr2 % 2 == 0){
			$('#graph').append($('<img>',{id:'graphWard2Age',src:'Age/Ward2.PNG'}))
			$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 2 the highest population in age is 20-34 years old.</caption>.");
			$('#graph').append($('<img>',{id:'graphWard2Gender',src:'Gender/Ward2.PNG'}))
			$("#graph").append(" <caption style='width:500px;'>Ward 2 has a higher male to female ratio as well higher average population of males than Hamilton.</caption>.");
			$('#graph').append($('<img>',{id:'graphWard2Job',src:'Job/Ward2.PNG'}))
			$("#graph").append(" <caption style='width:500px;'>Higher average of Sales and Service jobs.</caption>.");
			$('#graph').append($('<img>',{id:'graphWard2Commute',src:'Commute/Ward2.PNG'}))
			$("#graph").append(" <caption style='width:500px;'>More people enjoy walking, cycling, and using the public bus.</caption>.");
			$('#graph').append($('<img>',{id:'graphWard2Dwelling',src:'Dwelling/Ward2.PNG'}))
			$("#graph").append(" <caption style='width:500px;'>Ward 2 has a higher average of older houses than Hamilton (>1960s & 1961-1980).</caption>.");
			$('#graph').append($('<img>',{id:'graphWard2Income',src:'Income/Ward2.PNG'}))
			$("#graph").append(" <caption style='width:500px;'>Ward 2 has a 35% average of household income less than $25,000.</caption>.");
			$('#graph').append($('<img>',{id:'graphWard2Minority',src:'Minority/Ward2.PNG'}))
			$("#graph").append(" <caption style='width:500px;'>Ward 2 has a higher average South Asian, Chinese, and African American.</caption>.");
			$('#pictures').append($('<img>',{src:'images/Ward2.PNG'}));
			$('#pictures').append($('<img>',{src:'attractions/Ward2Pic1.PNG'}));
			$('#pictures').append($('<img>',{src:'attractions/Ward2Pic2.PNG'}));
			$('#pictures').append($('<img>',{src:'attractions/Ward2Pic3.PNG'}));

		}else{
			$("#graph").empty();
			$("#pictures").empty();
		}
	}

		function showData3() {
			ctr1=0;
			ctr2=0;
			ctr3=2;
			ctr4=0;
			ctr5=0;
			ctr6=0;
			ctr7=0;
			ctr8=0;
			ctr9=0;
			ctr10=0;
			ctr11=0;
			ctr12=0;
			ctr13=0;
			ctr14=0;
			ctr15=0;
		  $("#graph").empty();
			$("#pictures").empty();

			if(ctr3 % 2 == 0){
				$('#graph').append($('<img>',{id:'graphWard3Age',src:'Age/Ward3.PNG'}))
				$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 3 the highest population in age is 25-34 and 55-59 years old.</caption>.");
				$('#graph').append($('<img>',{id:'graphWard3Gender',src:'Gender/Ward3.PNG'}))
				$("#graph").append(" <caption style='width:500px;'>Ward 3 has a higher male to female ratio as well higher average population of males than Hamilton.</caption>.");
				$('#graph').append($('<img>',{id:'graphWard3Job',src:'Job/Ward3.PNG'}))
				$("#graph").append(" <caption style='width:500px;'>Higher average of Sales, Services, Transport, and Operators.</caption>.");
				$('#graph').append($('<img>',{id:'graphWard3Commute',src:'Commute/Ward3.PNG'}))
				$("#graph").append(" <caption style='width:500px;'>Most popular is using the public bus.</caption>.");
				$('#graph').append($('<img>',{id:'graphWard3Dwelling',src:'Dwelling/Ward3.PNG'}))
				$("#graph").append(" <caption style='width:500px;'>Ward 3 has a higher average of older houses than Hamilton.</caption>.");
				$('#graph').append($('<img>',{id:'graphWard3Income',src:'Income/Ward3.PNG'}))
				$("#graph").append(" <caption style='width:500px;'>Ward 3 has a 30% average of household income between $25,000-$49,999.</caption>.");
				$('#graph').append($('<img>',{id:'graphWard3Minority',src:'Minority/Ward3.PNG'}))
				$("#graph").append(" <caption style='width:500px;'>Ward 3 has a higher average South-East Asian, and African American.</caption>.");
				$('#pictures').append($('<img>',{src:'images/Ward3.PNG'}));
				$('#pictures').append($('<img>',{src:'attractions/Ward3Pic1.PNG'}));
				$('#pictures').append($('<img>',{src:'attractions/Ward3Pic2.PNG'}));
				$('#pictures').append($('<img>',{src:'attractions/Ward3Pic3.PNG'}));
				$('#pictures').append($('<img>',{src:'attractions/Ward3Pic4.PNG'}));

			}else{
				$("#graph").empty();
				$("#pictures").empty();
			}
		}

			function showData4() {
				ctr1=0;
				ctr2=0;
				ctr3=0;
				ctr4=2;
				ctr5=0;
				ctr6=0;
				ctr7=0;
				ctr8=0;
				ctr9=0;
				ctr10=0;
				ctr11=0;
				ctr12=0;
				ctr13=0;
				ctr14=0;
				ctr15=0;
			  $("#graph").empty();
				$("#pictures").empty();

				if(ctr4 % 2 == 0){
					$('#graph').append($('<img>',{id:'graphWard4Age',src:'Age/Ward4.PNG'}))
					$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 4 the highest population in age is 50-59 years old.</caption>.");
					$('#graph').append($('<img>',{id:'graphWard4Gender',src:'Gender/Ward4.PNG'}))
					$("#graph").append(" <caption style='width:500px;'>Ward 4 has a higher female to male ratio as well higher average population of males than Hamilton.</caption>.");
					$('#graph').append($('<img>',{id:'graphWard4Job',src:'Job/Ward4.PNG'}))
					$("#graph").append(" <caption style='width:500px;'>Higher average of Sales/Service, Manufacturing, and equipment operators.</caption>.");
					$('#graph').append($('<img>',{id:'graphWard4Commute',src:'Commute/Ward4.PNG'}))
					$("#graph").append(" <caption style='width:500px;'>The public bus and cars are most used.</caption>.");
					$('#graph').append($('<img>',{id:'graphWard4Dwelling',src:'Dwelling/Ward4.PNG'}))
					$("#graph").append(" <caption style='width:500px;'>Ward 4 has a higher average of older houses than Hamilton with 75%!.</caption>.");
					$('#graph').append($('<img>',{id:'graphWard4Income',src:'Income/Ward4.PNG'}))
					$("#graph").append(" <caption style='width:500px;'>Ward 4 has a higher average than Hamilton in the range of $25,000-$99,999.</caption>.");
					$('#graph').append($('<img>',{id:'graphWard4Minority',src:'Minority/Ward4.PNG'}))
					$("#graph").append(" <caption style='width:500px;'>Ward 4 has a lower minority average than Hamilton.</caption>.");
					$('#pictures').append($('<img>',{src:'images/Ward4.PNG'}));
					$('#pictures').append($('<img>',{src:'attractions/Ward4Pic1.PNG'}));
					$('#pictures').append($('<img>',{src:'attractions/Ward4Pic2.PNG'}));
					$('#pictures').append($('<img>',{src:'attractions/Ward4Pic3.PNG'}));
				}else{
					$("#graph").empty();
					$("#pictures").empty();
				}
			}

				function showData5() {
				  $("#graph").empty();
					$("#pictures").empty();
					ctr1=0;
					ctr2=0;
					ctr3=0;
					ctr4=0;
					ctr5=2;
					ctr6=0;
					ctr7=0;
					ctr8=0;
					ctr9=0;
					ctr10=0;
					ctr11=0;
					ctr12=0;
					ctr13=0;
					ctr14=0;
					ctr15=0;
					if(ctr5 % 2 == 0){
						$('#graph').append($('<img>',{id:'graphWard5Age',src:'Age/Ward5.PNG'}))
						$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 5 has a higher average than Hamilton between the ages 60-89 years old.</caption>.");
						$('#graph').append($('<img>',{id:'graphWard5Gender',src:'Gender/Ward5.PNG'}))
						$("#graph").append(" <caption style='width:500px;'>Ward 5 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
						$('#graph').append($('<img>',{id:'graphWard5Job',src:'Job/Ward5.PNG'}))
						$("#graph").append(" <caption style='width:500px;'>Higher average of sales and transport jobs.</caption>.");
						$('#graph').append($('<img>',{id:'graphWard5Commute',src:'Commute/Ward5.PNG'}))
						$("#graph").append(" <caption style='width:500px;'>Most people use the car for commuting.</caption>.");
						$('#graph').append($('<img>',{id:'graphWard5Dwelling',src:'Dwelling/Ward5.PNG'}))
						$("#graph").append(" <caption style='width:500px;'>Ward 5 has a higher average of houses created between 1961-1980.</caption>.");
						$('#graph').append($('<img>',{id:'graphWard5Income',src:'Income/Ward5.PNG'}))
						$("#graph").append(" <caption style='width:500px;'>Ward 5 has a higher average of household income between $25,000-$79,999.</caption>.");
						$('#graph').append($('<img>',{id:'graphWard5Minority',src:'Minority/Ward5.PNG'}))
						$("#graph").append(" <caption style='width:500px;'>Ward 5 has a higher average of South Asian.</caption>.");
						$('#pictures').append($('<img>',{src:'images/Ward5.PNG'}));
						$('#pictures').append($('<img>',{src:'attractions/Ward5Pic1.PNG'}));
						$('#pictures').append($('<img>',{src:'attractions/Ward5Pic2.PNG'}));
						$('#pictures').append($('<img>',{src:'attractions/Ward5Pic3.PNG'}));
						$('#pictures').append($('<img>',{src:'attractions/Ward5Pic4.PNG'}));
					}else{
						$("#graph").empty();
						$("#pictures").empty();
					}
				}

					function showData6() {
					  $("#graph").empty();
						$("#pictures").empty();
						ctr1=0;
						ctr2=0;
						ctr3=0;
						ctr4=2;
						ctr5=0;
						ctr6=2;
						ctr7=0;
						ctr8=0;
						ctr9=0;
						ctr10=0;
						ctr11=0;
						ctr12=0;
						ctr13=0;
						ctr14=0;
						ctr15=0;
						if(ctr6 % 2 == 0){
							$('#graph').append($('<img>',{id:'graphWard6Age',src:'Age/Ward6.PNG'}))
							$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 6 the highest population in age is 50-59 years old.</caption>.");
							$('#graph').append($('<img>',{id:'graphWard6Gender',src:'Gender/Ward6.PNG'}))
							$("#graph").append(" <caption style='width:500px;'>Ward 6 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
							$('#graph').append($('<img>',{id:'graphWard6Job',src:'Job/Ward6.PNG'}))
							$("#graph").append(" <caption style='width:500px;'>Higher average of business, trades, and sales.</caption>.");
							$('#graph').append($('<img>',{id:'graphWard6Commute',src:'Commute/Ward6.PNG'}))
							$("#graph").append(" <caption style='width:500px;'>More people drive cars more frequently than Hamilton.</caption>.");
							$('#graph').append($('<img>',{id:'graphWard6Dwelling',src:'Dwelling/Ward6.PNG'}))
							$("#graph").append(" <caption style='width:500px;'>Ward 6 has a higher average of houses created between 1961-1980.</caption>.");
							$('#graph').append($('<img>',{id:'graphWard6Income',src:'Income/Ward6.PNG'}))
							$("#graph").append(" <caption style='width:500px;'>Ward 6 has a 24% average of household income between $50,000-$79,999.</caption>.");
							$('#graph').append($('<img>',{id:'graphWard6Minority',src:'Minority/Ward6.PNG'}))
							$("#graph").append(" <caption style='width:500px;'>Ward 6 has a higher average African Americans, Arabs, Latin American, and Filipino.</caption>.");
							$('#pictures').append($('<img>',{src:'images/Ward6.PNG'}));
							$('#pictures').append($('<img>',{src:'attractions/Ward6Pic1.PNG'}));
							$('#pictures').append($('<img>',{src:'attractions/Ward6Pic2.PNG'}));
							$('#pictures').append($('<img>',{src:'attractions/Ward6Pic3.PNG'}));
							$('#pictures').append($('<img>',{src:'attractions/Ward6Pic4.PNG'}));
						}else{
							$("#graph").empty();
							$("#pictures").empty();
						}
					}

						function showData7() {
						  $("#graph").empty();
							$("#pictures").empty();
							ctr1=0;
							ctr2=0;
							ctr3=0;
							ctr4=2;
							ctr5=0;
							ctr6=0;
							ctr7=2;
							ctr8=0;
							ctr9=0;
							ctr10=0;
							ctr11=0;
							ctr12=0;
							ctr13=0;
							ctr14=0;
							ctr15=0;
							if(ctr7 % 2 == 0){
								$('#graph').append($('<img>',{id:'graphWard7Age',src:'Age/Ward7.PNG'}))
								$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 7 the highest population in age is 50-59 years old.</caption>.");
								$('#graph').append($('<img>',{id:'graphWard7Gender',src:'Gender/Ward7.PNG'}))
								$("#graph").append(" <caption style='width:500px;'>Ward 7 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
								$('#graph').append($('<img>',{id:'graphWard7Job',src:'Job/Ward7.PNG'}))
								$("#graph").append(" <caption style='width:500px;'>Higher average of sales, trades, and utilities.</caption>.");
								$('#graph').append($('<img>',{id:'graphWard7Commute',src:'Commute/Ward7.PNG'}))
								$("#graph").append(" <caption style='width:500px;'>Most people drive, and take the bus.</caption>.");
								$('#graph').append($('<img>',{id:'graphWard7Dwelling',src:'Dwelling/Ward7.PNG'}))
								$("#graph").append(" <caption style='width:500px;'>Ward 7 has a higher average of houses created before the 1960s.</caption>.");
								$('#graph').append($('<img>',{id:'graphWard7Income',src:'Income/Ward7.PNG'}))
								$("#graph").append(" <caption style='width:500px;'>Ward 7 has a higher average of household income than Hamilton betwen $25,000-$79,999.</caption>.");
								$('#graph').append($('<img>',{id:'graphWard7Minority',src:'Minority/Ward7.PNG'}))
								$("#graph").append(" <caption style='width:500px;'>Ward 7 has a higher average Latin American, Southeast Asian, Arab, Filipino, and African Americans.</caption>.");
								$('#pictures').append($('<img>',{src:'images/Ward7.PNG'}));
								$('#pictures').append($('<img>',{src:'attractions/Ward7Pic1.PNG'}));
								$('#pictures').append($('<img>',{src:'attractions/Ward7Pic2.PNG'}));
								$('#pictures').append($('<img>',{src:'attractions/Ward7Pic3.PNG'}));
							}else{
								$("#graph").empty();
								$("#pictures").empty();
							}
						}
							function showData8() {
							  $("#graph").empty();
								$("#pictures").empty();
								ctr1=0;
								ctr2=0;
								ctr3=0;
								ctr4=2;
								ctr5=0;
								ctr6=0;
								ctr7=0;
								ctr8=2;
								ctr9=0;
								ctr10=0;
								ctr11=0;
								ctr12=0;
								ctr13=0;
								ctr14=0;
								ctr15=0;
								if(ctr8 % 2 == 0){
									$('#graph').append($('<img>',{id:'graphWard8Age',src:'Age/Ward8.PNG'}))
									$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 8 the highest population in age is 20-24 years old.</caption>.");
									$('#graph').append($('<img>',{id:'graphWard8Gender',src:'Gender/Ward8.PNG'}))
									$("#graph").append(" <caption style='width:500px;'>Ward 8 has a higher female to male ratio as well on average population of females to Hamilton.</caption>.");
									$('#graph').append($('<img>',{id:'graphWard8Job',src:'Job/Ward8.PNG'}))
									$("#graph").append(" <caption style='width:500px;'>Higher average of sales/service and health jobs.</caption>.");
									$('#graph').append($('<img>',{id:'graphWard8Commute',src:'Commute/Ward8.PNG'}))
									$("#graph").append(" <caption style='width:500px;'>People drive a car more frequently and take the public bus.</caption>.");
									$('#graph').append($('<img>',{id:'graphWard8Dwelling',src:'Dwelling/Ward8.PNG'}))
									$("#graph").append(" <caption style='width:500px;'>Ward 8 has a higher average of houses created in 1961-1980 and 1991-2000 Hamilton.</caption>.");
									$('#graph').append($('<img>',{id:'graphWard8Income',src:'Income/Ward8.PNG'}))
									$("#graph").append(" <caption style='width:500px;'>Ward 8 has a higher average of household income between $25,000-$49,999 and $80,000-$149,999.</caption>.");
									$('#graph').append($('<img>',{id:'graphWard8Minority',src:'Minority/Ward8.PNG'}))
									$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher average South Asian, Chinese, African American, West Asian, Korean, Filipino, and Arab.</caption>.");
									$('#pictures').append($('<img>',{src:'images/Ward8.PNG'}));
									$('#pictures').append($('<img>',{src:'attractions/Ward8Pic1.PNG'}));
									$('#pictures').append($('<img>',{src:'attractions/Ward8Pic2.PNG'}));
								}else{
									$("#graph").empty();
									$("#pictures").empty();
								}
							}

								function showData9() {
								  $("#graph").empty();
									$("#pictures").empty();
									ctr1=0;
									ctr2=0;
									ctr3=0;
									ctr4=2;
									ctr5=0;
									ctr6=0;
									ctr7=0;
									ctr8=0;
									ctr9=2;
									ctr10=0;
									ctr11=0;
									ctr12=0;
									ctr13=0;
									ctr14=0;
									ctr15=0;
									if(ctr9 % 2 == 0){
										$('#graph').append($('<img>',{id:'graphWard9Age',src:'Age/Ward9.PNG'}))
										$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 9 the higher average population in age between 0-19 years old.</caption>.");
										$('#graph').append($('<img>',{id:'graphWard9Gender',src:'Gender/Ward9.PNG'}))
										$("#graph").append(" <caption style='width:500px;'>Ward 9 has a higher female to male ratio as well same average population of females to Hamilton.</caption>.");
										$('#graph').append($('<img>',{id:'graphWard9Job',src:'Job/Ward9.PNG'}))
										$("#graph").append(" <caption style='width:500px;'>Higher average of business, management, trades, education, and utilities.</caption>.");
										$('#graph').append($('<img>',{id:'graphWard9Commute',src:'Commute/Ward9.PNG'}))
										$("#graph").append(" <caption style='width:500px;'>More people enjoy driving.</caption>.");
										$('#graph').append($('<img>',{id:'graphWard9Dwelling',src:'Dwelling/Ward9.PNG'}))
										$("#graph").append(" <caption style='width:500px;'>Ward 9 has a higher average of houses created between 1981-2016.</caption>.");
										$('#graph').append($('<img>',{id:'graphWard9Income',src:'Income/Ward9.PNG'}))
										$("#graph").append(" <caption style='width:500px;'>Ward 9 has a higher average of household income between $80,000-$150,000.</caption>.");
										$('#graph').append($('<img>',{id:'graphWard9Minority',src:'Minority/Ward9.PNG'}))
										$("#graph").append(" <caption style='width:500px;'>Ward 9 has a higher average of South Asian, and Arab.</caption>.");
										$('#pictures').append($('<img>',{src:'images/Ward9.PNG'}));
										$('#pictures').append($('<img>',{src:'attractions/Ward9Pic1.PNG'}));
										$('#pictures').append($('<img>',{src:'attractions/Ward9Pic2.PNG'}));

									}else{
										$("#graph").empty();
										$("#pictures").empty();
									}
								}

									function showData10() {
									  $("#graph").empty();
										$("#pictures").empty();
										ctr1=0;
										ctr2=0;
										ctr3=0;
										ctr4=2;
										ctr5=0;
										ctr6=0;
										ctr7=0;
										ctr8=0;
										ctr9=0;
										ctr10=2;
										ctr11=0;
										ctr12=0;
										ctr13=0;
										ctr14=0;
										ctr15=0;
										if(ctr10 % 2 == 0){
											$('#graph').append($('<img>',{id:'graphWard10Age',src:'Age/Ward10.PNG'}))
											$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 10 the highest population in age is 50-54 years old.</caption>.");
											$('#graph').append($('<img>',{id:'graphWard10Gender',src:'Gender/Ward10.PNG'}))
											$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher female to male ratio as well higher average population of males than Hamilton.</caption>.");
											$('#graph').append($('<img>',{id:'graphWard10Job',src:'Job/Ward10.PNG'}))
											$("#graph").append(" <caption style='width:500px;'>Higher average of business, management, and finance jobs.</caption>.");
											$('#graph').append($('<img>',{id:'graphWard10Commute',src:'Commute/Ward10.PNG'}))
											$("#graph").append(" <caption style='width:500px;'>More people enjoy driving.</caption>.");
											$('#graph').append($('<img>',{id:'graphWard10Dwelling',src:'Dwelling/Ward10.PNG'}))
											$("#graph").append(" <caption style='width:500px;'>Ward 8 has the highest average of houses between 1981-2000.</caption>.");
											$('#graph').append($('<img>',{id:'graphWard10Income',src:'Income/Ward10.PNG'}))
											$("#graph").append(" <caption style='width:500px;'>Ward 8 has a high percentage of house incomes between $50,000-$79,999 and $150,000+.</caption>.");
											$('#graph').append($('<img>',{id:'graphWard10Minority',src:'Minority/Ward10.PNG'}))
											$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher average South Asian.</caption>.");
											$('#pictures').append($('<img>',{src:'images/Ward10.PNG'}));
											$('#pictures').append($('<img>',{src:'attractions/Ward10Pic1.PNG'}));
											$('#pictures').append($('<img>',{src:'attractions/Ward10Pic2.PNG'}));
											$('#pictures').append($('<img>',{src:'attractions/Ward10Pic3.PNG'}));
										}else{
											$("#graph").empty();
											$("#pictures").empty();
										}
									}

										function showData11() {
										  $("#graph").empty();
											$("#pictures").empty();
											ctr1=0;
											ctr2=0;
											ctr3=0;
											ctr4=0;
											ctr5=0;
											ctr6=0;
											ctr7=0;
											ctr8=0;
											ctr9=0;
											ctr10=0;
											ctr11=2;
											ctr12=0;
											ctr13=0;
											ctr14=0;
											ctr15=0;
											if(ctr11 % 2 == 0){
												$('#graph').append($('<img>',{id:'graphWard11Age',src:'Age/Ward11.PNG'}))
												$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 11 the higher average of population in age between 0-14 and 30-44 years old.</caption>.");
												$('#graph').append($('<img>',{id:'graphWard11Gender',src:'Gender/Ward11.PNG'}))
												$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
												$('#graph').append($('<img>',{id:'graphWard11Job',src:'Job/Ward11.PNG'}))
												$("#graph").append(" <caption style='width:500px;'>Higher average of educational, business, management, and trade jobs.</caption>.");
												$('#graph').append($('<img>',{id:'graphWard11Commute',src:'Commute/Ward11.PNG'}))
												$("#graph").append(" <caption style='width:500px;'>More people drive cars on average than Hamilton.</caption>.");
												$('#graph').append($('<img>',{id:'graphWard11Dwelling',src:'Dwelling/Ward11.PNG'}))
												$("#graph").append(" <caption style='width:500px;'>Ward 12 has a higher average of houses created between 1991-2016.</caption>.");
												$('#graph').append($('<img>',{id:'graphWard11Income',src:'Income/Ward11.PNG'}))
												$("#graph").append(" <caption style='width:500px;'>Ward 11 has a higher average household income between $80,000-$150,000+.</caption>.");
												$('#graph').append($('<img>',{id:'graphWard11Minority',src:'Minority/Ward11.PNG'}))
												$("#graph").append(" <caption style='width:500px;'>Ward 11 has a lower average minority.</caption>.");
												$('#pictures').append($('<img>',{src:'images/Ward11.PNG'}));
												$('#pictures').append($('<img>',{src:'attractions/Ward11Pic1.PNG'}));
												$('#pictures').append($('<img>',{src:'attractions/Ward11Pic2.PNG'}));

											}else{
												$("#graph").empty();
												$("#pictures").empty();
											}
										}

											function showData12() {
											  $("#graph").empty();
												$("#pictures").empty();
												ctr1=0;
												ctr2=0;
												ctr3=0;
												ctr4=0;
												ctr5=0;
												ctr6=0;
												ctr7=0;
												ctr8=0;
												ctr9=0;
												ctr10=0;
												ctr11=0;
												ctr12=2;
												ctr13=0;
												ctr14=0;
												ctr15=0;
												if(ctr12 % 2 == 0){
													$('#graph').append($('<img>',{id:'graphWard12Age',src:'Age/Ward12.PNG'}))
													$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 12 the highest population in age is 50-54 years old and higher average between 5-19 years old.</caption>.");
													$('#graph').append($('<img>',{id:'graphWard12Gender',src:'Gender/Ward12.PNG'}))
													$("#graph").append(" <caption style='width:500px;'>Ward 12 has a higher female to male ratio as well higher average population of males than Hamilton.</caption>.");
													$('#graph').append($('<img>',{id:'graphWard12Job',src:'Job/Ward12.PNG'}))
													$("#graph").append(" <caption style='width:500px;'>Higher average of educational, management, applied sciences, and health jobs.</caption>.");
													$('#graph').append($('<img>',{id:'graphWard12Commute',src:'Commute/Ward12.PNG'}))
													$("#graph").append(" <caption style='width:500px;'>Higher average of people drive a car than the average of Hamilton</caption>.");
													$('#graph').append($('<img>',{id:'graphWard12Dwelling',src:'Dwelling/Ward12.PNG'}))
													$("#graph").append(" <caption style='width:500px;'>Ward 12 has a higher average of houses created between 1981-2016.</caption>.");
													$('#graph').append($('<img>',{id:'graphWard12Income',src:'Income/Ward12.PNG'}))
													$("#graph").append(" <caption style='width:500px;'>Ward 12 has a higher average of household income more than $150,000.</caption>.");
													$('#graph').append($('<img>',{id:'graphWard12Minority',src:'Minority/Ward12.PNG'}))
													$("#graph").append(" <caption style='width:500px;'>Ward 12 has a higher average South Asian, Chinese, Korean, Japanese, and Arab.</caption>.");
													$('#pictures').append($('<img>',{src:'images/Ward12.PNG'}));
													$('#pictures').append($('<img>',{src:'attractions/Ward12Pic1.PNG'}));
													$('#pictures').append($('<img>',{src:'attractions/Ward12Pic2.PNG'}));

												}else{
													$("#graph").empty();
													$("#pictures").empty();
												}
											}

												function showData13() {
												  $("#graph").empty();
													$("#pictures").empty();
													ctr1=0;
													ctr2=0;
													ctr3=0;
													ctr4=0;
													ctr5=0;
													ctr6=0;
													ctr7=0;
													ctr8=0;
													ctr9=0;
													ctr10=0;
													ctr11=0;
													ctr12=0;
													ctr13=2;
													ctr14=0;
													ctr15=0;
													if(ctr13 % 2 == 0){
														$('#graph').append($('<img>',{id:'graphWard13Age',src:'Age/Ward13.PNG'}))
														$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 13 the higher average population in age is between 50-94 years old.</caption>.");
														$('#graph').append($('<img>',{id:'graphWard13Gender',src:'Gender/Ward13.PNG'}))
														$("#graph").append(" <caption style='width:500px;'>Ward 13 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
														$('#graph').append($('<img>',{id:'graphWard13Job',src:'Job/Ward13.PNG'}))
														$("#graph").append(" <caption style='width:500px;'>Higher average of educational, management, applied sciences, agriculture and health jobs.</caption>.");
														$('#graph').append($('<img>',{id:'graphWard13Commute',src:'Commute/Ward13.PNG'}))
														$("#graph").append(" <caption style='width:500px;'>More people enjoy driving a car.</caption>.");
														$('#graph').append($('<img>',{id:'graphWard13Dwelling',src:'Dwelling/Ward13.PNG'}))
														$("#graph").append(" <caption style='width:500px;'>Ward 13 has most houses created between 1960-1980.</caption>.");
														$('#graph').append($('<img>',{id:'graphWard13Income',src:'Income/Ward13.PNG'}))
														$("#graph").append(" <caption style='width:500px;'>Ward 13 has a higher average of household income more than $150,000.</caption>.");
														$('#graph').append($('<img>',{id:'graphWard13Minority',src:'Minority/Ward13.PNG'}))
														$("#graph").append(" <caption style='width:500px;'>Ward 13 has a minority lower than average.</caption>.");
														$('#pictures').append($('<img>',{src:'images/Ward13.PNG'}));
													}
														else{
														$("#graph").empty();
														$("#pictures").empty();
													}
												}

													function showData14() {
														$("#pictures").empty();
													  $("#graph").empty();
														ctr1=0;
														ctr2=0;
														ctr3=0;
														ctr4=2;
														ctr5=0;
														ctr6=0;
														ctr7=0;
														ctr8=0;
														ctr9=0;
														ctr10=0;
														ctr11=0;
														ctr12=0;
														ctr13=0;
														ctr14=2;
														ctr15=0;
														if(ctr14 % 2 == 0){
															$('#graph').append($('<img>',{id:'graphWard14Age',src:'Age/Ward14.PNG'}))
															$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 14 the higher average population in age is between 65-100+ years old.</caption>.");
															$('#graph').append($('<img>',{id:'graphWard14Gender',src:'Gender/Ward14.PNG'}))
															$("#graph").append(" <caption style='width:500px;'>Ward 14 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
															$('#graph').append($('<img>',{id:'graphWard14Job',src:'Job/Ward14.PNG'}))
															$("#graph").append(" <caption style='width:500px;'>Higher average of educational and health jobs.</caption>.");
															$('#graph').append($('<img>',{id:'graphWard14Commute',src:'Commute/Ward14.PNG'}))
															$("#graph").append(" <caption style='width:500px;'>More people enjoy driving a car.</caption>.");
															$('#graph').append($('<img>',{id:'graphWard14Dwelling',src:'Dwelling/Ward14.PNG'}))
															$("#graph").append(" <caption style='width:500px;'>Ward 14 has a higher average of houses created between 1961-1980.</caption>.");
															$('#graph').append($('<img>',{id:'graphWard14Income',src:'Income/Ward14.PNG'}))
															$("#graph").append(" <caption style='width:500px;'>Ward 14 has a higher average of household income between $50,000-$79,999 and Over $150,000.</caption>.");
															$('#graph').append($('<img>',{id:'graphWard14Minority',src:'Minority/Ward14.PNG'}))
															$("#graph").append(" <caption style='width:500px;'>Ward 14 has a higher average South Asian, Chinese, Arab, West Asian, Latin American, Filipino, Korean, Japanese, and African American.</caption>.");
															$('#pictures').append($('<img>',{src:'images/Ward14.PNG'}));
														}else{
															$("#graph").empty();
															$("#pictures").empty();
														}
													}
														function showData15() {
														  $("#graph").empty();
															$("#pictures").empty();
															ctr1=0;
															ctr2=0;
															ctr3=0;
															ctr4=2;
															ctr5=0;
															ctr6=0;
															ctr7=0;
															ctr8=0;
															ctr9=0;
															ctr10=0;
															ctr11=0;
															ctr12=0;
															ctr13=0;
															ctr14=0;
															ctr15=2;
															if(ctr15 % 2 == 0){
																$('#graph').append($('<img>',{id:'graphWard15Age',src:'Age/Ward15.PNG'}))
																$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 15 the highest population in age is 45-54 years old.</caption>.");
																$('#graph').append($('<img>',{id:'graphWard15Gender',src:'Gender/Ward1.PNG'}))
																$("#graph").append(" <caption style='width:500px;'>Ward 15 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
																$('#graph').append($('<img>',{id:'graphWard15Job',src:'Job/Ward15.PNG'}))
																$("#graph").append(" <caption style='width:500px;'>Higher average of business, management, and educational jobs.</caption>.");
																$('#graph').append($('<img>',{id:'graphWard15Commute',src:'Commute/Ward15.PNG'}))
																$("#graph").append(" <caption style='width:500px;'>More people enjoy driving a car.</caption>.");
																$('#graph').append($('<img>',{id:'graphWard15Dwelling',src:'Dwelling/Ward15.PNG'}))
																$("#graph").append(" <caption style='width:500px;'>Ward 15 has a higher average of houses created between 1991 to 2000.</caption>.");
																$('#graph').append($('<img>',{id:'graphWard15Income',src:'Income/Ward15.PNG'}))
																$("#graph").append(" <caption style='width:500px;'>Ward 15 has a higher average of household income over $150,000.</caption>.");
																$('#graph').append($('<img>',{id:'graphWard15Minority',src:'Minority/Ward15.PNG'}))
																$("#graph").append(" <caption style='width:500px;'>Ward 15 has a lower average of minority.</caption>.");
																$('#pictures').append($('<img>',{src:'images/Ward15.PNG'}));
																$('#pictures').append($('<img>',{src:'attractions/Ward15Pic1.PNG'}));
																$('#pictures').append($('<img>',{src:'attractions/Ward15Pic2.PNG'}));

															}else{
																$("#graph").empty();
																$("#pictures").empty();
															}
														}
