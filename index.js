code = {
"q":"ض", "w":"ص", "e":"ث", "r":"ق", "t":"ف", "y":"غ", "u":"ع", "i":"ه", "o":"خ", "p":"ح",
"[":"ج", "]":"چ", "a":"ش", "s":"س", "d":"ی", "f":"ب", "g":"ل", "h":"ا", "H":"آ", "j":"ت",
"J":"ـ", "k":"ن", "l":"م",
";":"ک",
"'":"گ",
"\\":"پ", "z":"ظ", "x":"ط", "c":"ز", "v":"ر", "b":"ذ", "n":"د", "m":"ئ", ",":"و",
"?":"؟", "C":"ژ",



};


var decodedText = '';
$(".box").val("");
$(".btn-d").on("click", function() {

	var inputText = $(".box-input").val();


	for (var i = 0; i < inputText.length; i++) {

    var letter = inputText.charAt(i);
        if (letter in code) {
        decodedText = decodedText + code[letter];
        } else {
          decodedText = decodedText + letter;
        }

      $(".box-output").removeAttr("disabled");
      $(".box-output").addClass("r-to-l");
      $(".box-output").val(decodedText);
      $(".box-output").attr("placeholder", "");
    }

});



$(".btn-r").on("click", function () {
$(".box").val("");
$(".box-output").attr("disabled", true);
$(".box-output").attr("placeholder", "Your output will be shown here :)");
$(".box-output").removeClass("r-to-l");
decodedText = "";


});
