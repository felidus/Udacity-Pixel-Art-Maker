// Select color and size input


function makeGrid() {
// selecting input of the grid
var width, height, color, canvas, rows;


 canvas = $('#pixelCanvas');
 height =$('#inputHeight').val();
 width =$('#inputWeight').val();
// makeGrid(height,width);

canvas.children().remove();
  for (var i = 0; i < height; i++) {

      canvas.append('<tr></tr>');
  }

rows = $('tr');
      for (var j = 1; j <width; j++) {

          rows.append('<td></td>');
      }
  
cell = canvas.find('td');
//once user clicked on the td change the color
cell.click(function(){
	var color;
	color=$("#colorPicker").val();
	$(this).attr('bgColor', color);
	
	});

		
	}

var submitQuery;

submitQuery =$('input[type="submit"]')
submitQuery.click(function(event){
	event.preventDefault();
	makeGrid();
});


//$("body").css({"background-color", "grey"});


//$("h2").css({"border : 3px solid grey"});