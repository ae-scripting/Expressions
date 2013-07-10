//allows for temp parenting
//you need one layer control and one checkbox control for this

try{
  target = effect(1)(1).transform.position; //target layer

	onOff = effect(2)(1); //checkbox is the second

	near = onOff.nearestKey(time);
	if(time<near.time) nI = near.index-1 else nI = near.index;
	if(nI==0) nI = 1;

	//calculating increment from left to right

	increment = 0;
	for(i = 1; i<=nI; i++){
		if(onOff.key(i).value == 0 && i>1){ //if False - add
			//if 1st is False - pass
			increment+=target.valueAtTime(onOff.key(i).time);
		}
		else{ //if True - subtrackt
			increment-=target.valueAtTime(onOff.key(i).time);
		}
	}

	if(onOff.key(nI).value == 1){
	//if we have true on the left (we move)
		increment+=target;
	}

	value + increment; //add

}

catch(err){value};

//make it recursive
