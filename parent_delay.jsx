/**
 * @author [author]
 * @description just a simple expression to delay parenting selected property
 *
 *
 * @todo [description]
 */

delta = index;
n = thisComp.layer(1).transform.position; //choose null and prop
n_k = n.key(2); //out-1, in-2

null_pos = n.valueAtTime(time-delta*thisComp.frameDuration); //shift delta frames left

value + null_pos - n_k;


