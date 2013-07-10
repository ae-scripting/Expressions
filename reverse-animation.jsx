//reverse animation after marker

if(effect("compMarker?")("Checkbox")==1){
  mrkr = thisComp.marker;
}
else mrkr = marker

n = 0;
if (mrkr.numKeys > 0){
	n = mrkr.nearestKey(time).index;
if (mrkr.key(n).time > time) n--;
}

if(n>0){

try{
	t = time-mrkr.key(n).time;
	if(n%2==1){
		lastKeyTime = thisProperty.key(thisProperty.numKeys).time;
		thisProperty.valueAtTime(lastKeyTime-t);
	}
	else{
		thisProperty.valueAtTime(t+thisProperty.key(1).time);
	}
	}
catch(err){value};
}
else value
