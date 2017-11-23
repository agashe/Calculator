$(document).ready(function(){	
	var num = null, op = null;
	
	$("td").click(function(){
		switch ($(this).html()) {	
			case 'C':
				num = null;
				op = null;
				$(".calculator textarea").html("");
			break;
			
			case 'del':
				if (num == null) {
					num = parseFloat($(".calculator textarea").html());
					op = '+';
					$(".calculator textarea").html("");
				}
			break;
			
			case '+/-':
				if (num == null) {
					num = parseFloat($(".calculator textarea").html());
					op = '+';
				}
			break;
			
			case '?':
					$(".calculator textarea").html("Created By Mohamed Yousef");
			break;
			
			case "*":
				if (num == null) {
					num = parseFloat($(".calculator textarea").html());
					op = '*';
					$(".calculator textarea").html("");
				}
			break;
			
			case '/':
				if (num == null) {
					num = parseFloat($(".calculator textarea").html());
					op = '/';
					$(".calculator textarea").html("");
				}
			break;
			
			case '-':
				if (num == null) {
					num = parseFloat($(".calculator textarea").html());
					op = '-';
					$(".calculator textarea").html("");
				}
			break;
			
			case '+':
				if (num == null) {
					num = parseFloat($(".calculator textarea").html());
					op = '+';
					$(".calculator textarea").html("");
				}
			break;
			
			case '=':
				switch (op) {			
					case '*':
						$(".calculator textarea").html(num * parseFloat($(".calculator textarea").html()));
					break;
											
					case '/':
						$(".calculator textarea").html(num / parseFloat($(".calculator textarea").html()));
					break;
					
					case '-':
						$(".calculator textarea").html(num - parseFloat($(".calculator textarea").html()));
					break;
					
					case '+':
						$(".calculator textarea").html(num + parseFloat($(".calculator textarea").html()));
					break;
				}
				
				num = null;
				op = null;
			break;
			
			default:
				temp = $(".calculator textarea").html();
				temp = temp + $(this).html();
				$(".calculator textarea").html(temp);
			break;
		}
	});
});