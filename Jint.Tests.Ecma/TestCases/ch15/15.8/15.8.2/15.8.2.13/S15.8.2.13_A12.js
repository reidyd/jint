// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If x is +Infinity and y<0, Math.pow(x,y) is +0
 *
 * @path ch15/15.8/15.8.2/15.8.2.13/S15.8.2.13_A12.js
 * @description Checking if Math.pow(x,y) equals to +0, where x is +Infinity and y<0
 */

// CHECK#1

x = +Infinity;
y = new Array();
y[0] = -Infinity;
y[1] = -1.7976931348623157E308; //largest (by module) finite number
y[2] = -1;
y[3] = -0.000000000000001;
ynum = 4;

for (i = 0; i < ynum; i++)
{
	if (Math.pow(x,y[i]) !== +0)
	{
		$ERROR("#1: Math.pow(" + x + ", " + y[i] + ") !== +0");
	}
}

