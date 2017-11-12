$(document).ready(function(){	
	var num = null, op = null;
	
	$("td").click(function(){
		switch ($(this).html()) {			
			case "*":
				if (num == null) {
					num = parseFloat($(".calculator p").html());
					op = '*';
					$(".calculator p").html("");
				}
			break;
			
			case '/':
				if (num == null) {
					num = parseFloat($(".calculator p").html());
					op = '/';
					$(".calculator p").html("");
				}
			break;
			
			case '-':
				if (num == null) {
					num = parseFloat($(".calculator p").html());
					op = '-';
					$(".calculator p").html("");
				}
			break;
			
			case '+':
				if (num == null) {
					num = parseFloat($(".calculator p").html());
					op = '+';
					$(".calculator p").html("");
				}
			break;
			
			case '=':
				switch (op) {			
					case '*':
						$(".calculator p").html(num * parseFloat($(".calculator p").html()));
					break;
											
					case '/':
						$(".calculator p").html(num / parseFloat($(".calculator p").html()));
					break;
					
					case '-':
						$(".calculator p").html(num - parseFloat($(".calculator p").html()));
					break;
					
					case '+':
						$(".calculator p").html(num + parseFloat($(".calculator p").html()));
					break;
				}
				
				num = null;
				op = null;
			break;
			
			default:
				temp = $(".calculator p").html();
				temp = temp + $(this).html();
				$(".calculator p").html(temp);
			break;
		}
	});
});