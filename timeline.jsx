
// function to getting current layer on time line
// || start (int) : first index of layers in comp
// || end (int) : last index of layers

// You should add thwo sliders - "startLayer" and "endLayer"
// by Timur Constantinov

function getCurrentLayer(start, end) {
  arr = [];//array for current layers in time line
	for (var i=start;i<=thisComp.numLayers-end;i++) {
		//if layer start later than current time
		//and not finish yet
		if (time>=thisComp.layer(i).inPoint && time<=thisComp.layer(i).outPoint) {
			arr.push(thisComp.layer(i));//push the layer to array
		}
	}

	arr.sort(function(a, b) {
		//sorting array function
		if (b.marker.numKeys>0) {
			//if have a marker key and time is not earler
			//push it to first index else push to end 
			return time<=b.marker.key(1).time ? -1 : 1;
		} else {
			//if don't have a markers counting by inPoint
			return b.inPoint-a.inPoint;
		}
	});
	
	return arr[0];//return first index of array
}

var layerStart = Math.floor(effect("startLayer")("Slider"))//link to slider of first layer from that we will find.
var layerEnd = effect("endLayer")("Slider");//link to slider of last layer to that we will find.
var sep = "\t\t\t\t\t\t\t\t\t\t\t\t";//seperator
var stampBlock = "CURRENT TIME: "+timeToTimecode(time, 1/thisComp.frameDuration);//timestamp
var _l = getCurrentLayer(layerStart, layerEnd);//finding layer

var layerBlock="THIS SHOT: | "+_l.name.toLowerCase()+" |";//current shot name
var layerFrameBlock="["+timeToTimecode(_l.time-_l.inPoint, 1/thisComp.frameDuration)+"]";//current shot timestamp from inPoint
value=stampBlock+sep+layerBlock+"  ›››  "+layerFrameBlock;//merge all
