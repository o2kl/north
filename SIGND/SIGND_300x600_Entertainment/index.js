(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back_ = function() {
	this.initialize(img.back_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.back_0 = function() {
	this.initialize(img.back_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,112);


(lib.box_ = function() {
	this.initialize(img.box_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,191);


(lib.frame_ = function() {
	this.initialize(img.frame_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,212);


(lib.HAND = function() {
	this.initialize(img.HAND);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,371,516);


(lib.shadowbox = function() {
	this.initialize(img.shadowbox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,67);


(lib.SigndLogo = function() {
	this.initialize(img.SigndLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,23);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HAND();
	this.instance.parent = this;
	this.instance.setTransform(-137,-161,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-161,237.5,330.3);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61FFFF").s().p("AjUBUQgXgCgQgKQgQgLgHgTQgIgSADgYQAEgZAOgTQANgTAVgLQAVgKAYABQAXACAQALQAQALAIATQAHASgDAXQgDATgIAQQgJAQgNALQgNALgQAFQgOAFgPAAIgGAAgAjSglQgKAFgGAKQgHAKgCAMQgCAMADAKQADAJAIAGQAHAGALABQAMAAAKgGQAJgFAHgKQAGgKACgNQACgLgDgKQgDgKgIgFQgHgGgLAAIgCAAQgKAAgJAFgAmCBOQgMgEgHgHQgIgHgEgKIAdgZQAFAIAIAFQAHAFAKAAIAGAAQADgBADgDQADgCABgDQAAgFgDgFIgJgIIgMgHQgKgGgHgHQgHgHgCgJQgDgKACgLQADgMAIgKQAIgJANgFQAMgFAOgBQALABAKADQAJAEAHAGQAHAGAEAJIgdAYQgDgGgGgEQgGgDgHAAQgFAAgEADQgEACAAAEQgBAEADAEQAEADAFADIAMAHQAKAGAHAHQAIAHADAKQADAJgCAMQgCANgJAKQgIAKgNAGQgNAFgRAAQgOAAgLgEgAAIBSIg7hPIgPBNIgrAAIAfiiIAPAAIA8BPIAOhNIAsAAIggCigAKeBQIAfigIA1AAQANAAANAEQANAEALAJQAKAKAGAPQAFAQgCAWQgDAUgHAOQgIAOgKAIQgKAJgLAFQgMAFgKACIgSADIgMAAgALRAoIAIAAQAHAAAIgCQAIgCAHgFQAIgEAFgIQAFgIACgLQABgNgDgJQgEgJgJgEQgIgFgLAAIgIAAgAIhBQIAfigIBlAAIgIAoIg4AAIgFAWIAuAAIgHAjIguAAIgEAXIA4AAIgHAogAGWBQIBKh4IgzAAIAIgoIB1AAIhKB4IAzAAIgIAogAFTBQIAfigIAsAAIgfCggADcBQIAfigIAtAAIgYB4IA5AAIgIAogACfBQIgEgTIg2AAIgLATIgyAAIBmiiIAXAAIAnCigACVAeIgIgmIgWAmIAeAAgAndBQIgdg+IgNA+IgrAAIAfigIA2AAQARAAAMAHQAMAHAGAMQAGAMgDARQgCAQgKAKQgKAMgOAEIAhA/gAn1gKIAMAAQAIAAAFgEQAFgEACgHQABgHgEgEQgEgFgHAAIgMAAgAqvBQIAfigIBlAAIgIAoIg4AAIgFAWIAuAAIgHAjIguAAIgEAXIA4AAIgHAogAs2BQIAfigIA4AAQAQAAAMAHQAMAHAGANQAGANgCASQgDARgJAMQgJAMgQAHQgPAHgVAAIgLAAIgKAvgAr6gGIAMAAQALAAAGgEQAGgFABgHQABgJgFgFQgEgEgJgBIgMAAg");
	this.shape.setTransform(23.4391,-18.0719);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-34.6,197,170.5);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiBUQgXgCgQgKQgQgLgIgTQgHgSADgYQAEgZANgTQAOgTAUgLQAVgKAZABQAXACAQALQAQALAHATQAHASgDAXQgCATgJAQQgIAQgOALQgNALgQAFQgOAFgPAAIgFAAgAhgglQgKAFgHAKQgGAKgCAMQgCAMADAKQADAJAHAGQAIAGALABQAMAAAJgGQAKgFAGgKQAHgKACgNQACgLgDgKQgEgKgHgFQgIgGgKAAIgCAAQgLAAgIAFgAAfBOQgLgEgIgHQgHgHgFgKIAegZQAFAIAHAFQAIAFAJAAIAGAAQAEgBADgDQACgCABgDQABgFgDgFIgJgIIgNgHQgJgGgHgHQgHgHgDgJQgDgKACgLQADgMAIgKQAJgJAMgFQAMgFAPgBQALABAJADQAKAEAHAGQAHAGADAJIgcAYQgEgGgFgEQgGgDgHAAQgGAAgEADQgDACgBAEQAAAEADAEQADADAGADIALAHQALAGAHAHQAHAHADAKQAEAJgCAMQgDANgIAKQgIAKgNAGQgNAFgRAAQgPAAgLgEgAHgBSIg8hPIgPBNIgsAAIAgiiIAPAAIA8BPIAPhNIArAAIgfCigAp+BSIgmiiIAtAAIARBUIAxhUIAzAAIhmCigAILBQIAfigIA1AAQANAAANAEQANAEALAJQALAKAFAPQAGAQgDAWQgCAUgIAOQgHAOgKAIQgLAJgLAFQgLAFgLACIgSADIgLAAgAI/AoIAIAAQAHAAAIgCQAIgCAHgFQAHgEAFgIQAGgIABgLQACgNgEgJQgEgJgIgEQgJgFgLAAIgIAAgAEsBQIgEgTIg2AAIgLATIgyAAIBmiiIAXAAIAnCigAEiAeIgIgmIgWAmIAeAAgAkqBQIAfigIBkAAIgHAoIg5AAIgEAWIAuAAIgHAjIguAAIgFAXIA5AAIgIAogAnJBQIAfigIA1AAQANAAANAEQANAEALAJQAKAKAGAPQAFAQgCAWQgDAUgHAOQgIAOgKAIQgKAJgLAFQgMAFgKACIgSADIgMAAgAmWAoIAIAAQAHAAAIgCQAIgCAHgFQAIgEAFgIQAFgIACgLQABgNgDgJQgEgJgJgEQgIgFgLAAIgIAAgAoRBQIAfigIAsAAIggCgg");
	this.shape.setTransform(14.9891,-27.1719);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,-35.5,135.4,16.7);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao5BMQgNgJgFgPQgGgPADgTIAUhiIArAAIgTBiQgBAMAEAHQAFAHAJAAQAIAAAEgEQAGgEACgGQADgFACgHIAThiIAsAAIgUBiQgEAWgLAOQgKAPgQAIQgPAIgSAAQgVAAgNgJgAhrBJQgRgLgIgTQgHgTAEgYQADgUAJgQQAJgPAOgLQANgLARgFQARgGASABQALAAAKAEQAJADAHAGQAHAGAGAGIgeAhQgFgIgGgFQgIgFgKAAQgLAAgKAFQgKAFgGAKQgIAKgCANQgDANAEAKQAEAKAIAFQAJAGAKAAQAKAAAIgFQAHgEAFgFQAEgGACgFIghAAIAGgeIBOAAIAAAIIgBAGQgEAYgNASQgLASgTAKQgTALgZAAQgZAAgSgLgAj3BUQgWgCgRgKQgPgLgIgTQgIgSADgYQAEgZAOgTQAOgTAUgLQAVgKAZABQAWACAQALQARALAHATQAIASgEAXQgDATgIAQQgIAQgOALQgNALgQAFQgOAFgPAAIgGAAgAj0glQgKAFgHAKQgGAKgCAMQgCAMADAKQACAJAIAGQAHAGALABQAMAAAKgGQAJgFAHgKQAGgKACgNQACgLgDgKQgDgKgIgFQgHgGgKAAIgCgBQgLAAgIAGgAKeBOQgMgEgHgHQgHgHgFgKIAdgZQAGAIAHAFQAIAFAJAAIAGAAQAEgBADgDQACgCABgDQAAgFgCgFIgJgIIgNgHQgKgGgGgHQgIgHgCgJQgDgKACgLQADgMAIgKQAJgJAMgFQAMgFAOgBQALABAKADQAKAEAGAGQAIAGADAJIgdAYQgDgGgGgEQgGgDgGAAQgGAAgEADQgDACgBAEQgBAEAEAEQADADAGADIALAHQAKAGAIAHQAHAHADAKQAEAJgDAMQgCANgIAKQgIAKgNAGQgOAFgRAAQgOAAgLgEgAI6BQIAMg9IgqAAIgLA9IgsAAIAfigIAsAAIgLA8IAoAAIAMg8IAsAAIggCggAFeBQIAeigIA4AAQARAAAMAHQAMAHAGANQAGANgCASQgDARgJAMQgJAMgQAHQgPAHgVAAIgLAAIgKAvgAGagGIAMAAQAKAAAHgEQAFgFABgHQACgJgFgFQgFgEgIgBIgMAAgAEgBQIgDgTIg3AAIgLATIgyAAIBmiiIAXAAIAnCigAEXAeIgJgmIgWAmIAfAAgAB2BQIgdg+IgNA+IgrAAIAfigIA2AAQARAAAMAHQANAHAFAMQAHAMgDARQgDAQgKAKQgKAMgOAEIAhA/gABegKIAMAAQAIAAAFgEQAGgEABgHQABgHgEgEQgEgFgHAAIgMAAgAmkBQIAYh4IgkAAIAIgoIBzAAIgIAoIgjAAIgYB4gAqIBQIgFgTIg2AAIgLATIgyAAIBmiiIAXAAIAnCigAqSAeIgIgmIgXAmIAfAAg");
	this.shape.setTransform(35.5,-36.3521);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-44.8,153.8,16.9);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANvBSQgGgDgCgGQgCgFABgHQABgHAEgGQAFgFAGgEQAGgDAHAAQALAAAGAHQAGAHgCALQgBAHgEAFQgEAGgHADQgGADgHAAQgHAAgFgDgAHeBTQgXgBgQgLQgQgLgHgSQgIgTADgXQAEgZAOgUQANgTAVgKQAVgKAYABQAXABAQAMQAQALAIASQAHATgDAXQgDATgIAQQgJAPgNALQgNALgQAGQgOAEgPAAIgGAAgAHggmQgKAGgGAKQgHAJgCANQgCALADAKQADAKAIAGQAHAGALAAQAMAAAKgFQAJgGAHgKQAGgKACgMQACgMgDgJQgDgKgIgGQgHgFgLgBIgCAAQgKAAgJAFgAnJBTQgXgBgQgLIgHgFQgLgKgGgOQgHgTADgXQAEgZANgUIAEgEQAMgQASgJQAVgKAZABQAXABAQAMQAQALAHASQAIATgEAXQgCATgJAQQgIAPgOALQgNALgQAGQgOAEgPAAIgFAAgAnHgmQgKAGgHAKQgGAJgCANQgCALADAKQADAKAHAGQAIAGALAAQAMAAAJgFQAKgGAGgKQAHgKACgMQACgMgDgJQgEgKgHgGQgIgFgKgBIgCAAQgLAAgIAFgAEkBMQgOgGgJgMQgJgMgDgQQgEgPADgRQAEgVAKgQQAKgPAOgLQAOgLAQgEQAQgFAQABQALABAKAEQALAEAIAHQAIAHAGAJIggAdQgGgKgIgFQgIgFgKAAQgKAAgKAFQgJAGgHAJQgHAJgDAMQgCALADALQADAKAIAGQAIAGAMABQAJAAAJgEQAJgEAJgHIATAiQgJAHgKAFQgKAEgLADQgLACgLAAQgSAAgPgHgAMDBOQgMgEgHgIQgIgHgEgJIAdgaQAFAJAIAFQAHAFAKAAIAGgBQADgBADgCQADgCABgEQAAgFgDgEIgJgIIgMgIQgKgGgHgGQgHgIgCgJQgDgJACgMQADgMAIgJQAIgJANgGQAMgFAOAAQALAAAKAEQAJADAHAHQAHAGAEAIIgdAYQgDgGgGgDQgGgEgHAAQgFAAgEADQgEADAAAEQgBAEADADQAEAEAFADIAMAGQAKAHAHAHQAIAHADAJQADAJgCAMQgCAOgJAKQgIAKgNAFQgNAGgRAAQgOAAgLgEgAK7BRIg8hPIgPBOIgrAAIAfiiIAPAAIA8BOIAPhNIAsAAIggCigAp6BRIgmiiIAsAAIARBUIAyhUIAyAAIhlCigACvBQIAfihIAsAAIgfChgAgLBQIAeihIBlAAIgIAoIg4AAIgFAXIAuAAIgHAiIguAAIgEAYIA4AAIgHAogAhtBQIAYh5IgkAAIAIgoIByAAIgHAoIgjAAIgYB5gAjPBQIAfihIAsAAIgfChgAkNBQIgeg+IgMA+IgsAAIAfihIA3AAQAQAAAMAHQANAHAGAMQAGANgDARQgDAQgKAKQgJALgPAFIAiA/gAklgKIALAAQAIAAAGgEQAFgEABgHQABgHgEgFQgEgEgHgBIgLAAgArFBQIgEgTIg2AAIgLATIgyAAIBmijIAXAAIAnCjgArPAeIgIgnIgWAnIAeAAgAuXBQIAfihIBlAAIgIAoIg5AAIgFAaIAuAAIgHAjIguAAIgMA8g");
	this.shape.setTransform(28.64,-55.3673);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.4,-63.9,184.1,17.1);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGFBLQgNgJgFgPQgGgPAEgSIAThjIAsAAIgUBiQgBAMAEAHQAFAHAJAAQAHAAAGgDQAFgEACgGQADgGABgHIAThiIAtAAIgUBjQgEAVgLAPQgKAPgQAHQgPAIgSAAQgUAAgOgJgAECBTQgXgBgQgLQgQgLgIgSQgHgTADgXQAEgZAOgUQANgTAVgKQAUgKAZABQAXABAQAMQAQALAIASQAHATgDAXQgDATgIAQQgJAPgOALQgNALgQAGQgNAEgQAAIgFAAgAEEgmQgKAGgGAKQgHAJgCANQgCALADAKQADAKAIAGQAHAGALAAQAMAAAJgFQAKgGAGgKQAHgKACgMQACgMgDgJQgEgKgHgGQgHgFgLgBIgCAAQgKAAgJAFgAkxBTQgXgBgQgLQgQgLgHgSQgIgTADgXQAEgZANgUQAOgTAVgKQAVgKAYABQAXABAQAMQAQALAIASQAHATgEAXQgCATgJAQQgIAPgNALQgNALgRAGQgNAEgQAAIgFAAgAkvgmQgKAGgHAKQgGAJgCANQgCALADAKQADAKAHAGQAIAGALAAQAMAAAKgFQAJgGAHgKQAGgKACgMQACgMgDgJQgEgKgHgGQgIgFgKgBIgCAAQgKAAgJAFgAJVBQIgdg+IgNA+IgrAAIAfihIA2AAQARAAAMAHQANAHAFAMQAHANgDARQgDAQgKAKQgKALgOAFIAhA/gAI9gKIAMAAQAIAAAFgEQAFgEACgHQABgHgEgFQgEgEgHgBIgLAAgABWBQIAOhDIgcheIAuAAIAKAyIAcgyIA0AAIhBBeIgNBDgAhPBQIAMg/Ig0A8IgBAAIgbg7IgMA+IgsAAIAgiiIAUAAIAqBcIBShcIAXAAIgfCigAm7BQIgeg+IgMA+IgrAAIAeihIA3AAQARAAALAHQANAHAGAMQAGANgDARQgDAQgKAKQgJALgOAFIAhA/gAnTgKIAMAAQAHAAAGgEQAFgEABgHQABgHgDgFQgFgEgGgBIgMAAgAqHBQIAfihIBkAAIgIAoIg5AAIgFAaIAvAAIgHAjIguAAIgMA8g");
	this.shape.setTransform(11.8,-45.9795);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-54.4,129.7,16.9);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61FFFF").s().p("Ai3BJQgRgLgHgTQgIgTAEgYQADgTAJgQQAJgPANgLQAOgLAQgFQAQgFASAAQAMABAJADQAKAEAHAFQAIAGAFAGIgeAhQgFgIgHgFQgHgFgLgBQgKABgKAFQgKAFgGAKQgHAJgDANQgDANAEAKQAEAKAIAFQAJAGALAAQAKgBAHgEQAHgEAFgGQAEgFABgEIggAAIAGgfIBOAAIAAAIIgBAHQgEAXgMARQgNASgTALQgTAKgYAAQgZAAgRgKgABoBQIAXh3IgjAAIAHgoIByAAIgHAoIgkAAIgXB3gAgsBQIAfifIBiAAIgIAoIg4AAIgEAWIAtAAIgGAiIguAAIgEAXIA4AAIgIAog");
	this.shape.setTransform(-65.2807,-19.9021);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-43.6,182.5,146);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61FFFF").s().p("AAiBTQgXgBgPgLQgPgLgIgSQgHgTADgXQADgZAOgSQANgUAUgKQAUgKAZACQAWABARALQAPALAHASQAIATgDAWQgDATgJAQQgIAPgNALQgNALgQAFQgOAFgPAAIgFAAgAAjglQgJAGgHAJQgGAKgCAMQgCAMADAJQADAKAIAGQAHAGALAAQALAAAKgFQAKgGAGgKQAHgJACgMQABgMgDgKQgDgJgIgGQgHgGgLAAQgLAAgKAFgAiMBNQgLgEgIgHQgHgHgEgJIAcgZQAGAIAHAFQAIAFAJAAIAGgBQADgBADgCQADgCAAgEQABgFgDgEIgJgIIgLgHQgKgGgHgGQgHgIgDgJQgDgJADgMQACgMAIgJQAJgJAMgFQAMgFAOAAQALAAAJADQAKAEAHAGQAGAGAEAIIgcAYQgDgGgGgDQgGgEgHAAQgFAAgEADQgEADgBAEQAAAEAEADQADAEAGADIALAGQAKAGAHAHQAIAHACAJQADAKgCALQgCAOgIAKQgIAJgMAGQgOAGgRAAQgOAAgLgFgAD8BRIg7hOIgPBMIgrAAIAgigIAOAAIA8BOIAOhMIArAAIgfCggAHQBPIAfieIAsAAIgYB3IA5AAIgIAngAGUBPIgDgSIg2AAIgMASIgxAAIBligIAXAAIAmCggAGKAeIgIgmIgWAmIAeAAgAjlBPIgeg9IgMA9IgrAAIAgieIA1AAQAQAAAMAHQANAGAFANQAGAMgDARQgCAPgKAKQgJAMgPAEIAiA+gAj9gKIALABQAIAAAGgEQAFgFABgGQABgHgEgFQgEgEgGAAIgMAAgAm1BPIAfieIBjAAIgHAnIg4AAIgFAWIAuAAIgHAjIgtAAIgFAXIA4AAIgHAngAo6BPIAeieIA3AAQAQAAAMAHQANAHAFANQAGAMgCASQgCARgKAMQgJAMgPAHQgQAGgTAAIgMAAIgJAvgAn/gGIAMAAQALAAAFgEQAHgFAAgHQACgIgFgFQgEgFgKAAIgLAAg");
	this.shape.setTransform(-15.6,-24.0021);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-32.2,114.30000000000001,16.500000000000004);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFjBTQgXgCgQgKQgPgLgHgSQgIgTADgXQAEgZANgTQAOgTAUgKQAUgKAZACQAXABAQALQAPALAIASQAHATgDAWQgDATgIAQQgJAPgNALQgNALgQAFQgNAFgPAAIgGAAgAFlglQgJAGgHAJQgHAKgCAMQgCAMADAJQAEAKAHAGQAHAFALABQAMAAAKgFQAJgGAGgKQAHgKACgMQABgLgDgKQgDgJgHgGQgIgGgKAAQgMAAgJAFgACOBIQgRgLgIgTQgHgSAEgYQADgUAJgPQAJgQANgLQAOgKAQgFQAQgGASABQALAAAKAEQAKADAHAGQAIAGAEAGIgdAgQgFgHgHgGQgHgFgLAAQgKAAgKAFQgKAGgGAJQgIAKgCANQgDANAEAKQAEAJAIAGQAIAFALAAQAKAAAIgEQAHgEAFgGQAEgFABgFIggAAIAGgeIBOAAIAAAIIgBAGQgEAXgNASQgMASgTAKQgTALgZAAQgYAAgRgLgAicBRIg7hOIgPBMIgrAAIAfigIAPAAIA7BOIAPhNIArAAIgfChgAhxBPIAfieIA0AAQANAAANAEQAMAEAKAJQALAJAGAPQAFAQgDAWQgCAUgIANQgHAOgKAJQgKAIgKAFQgLAFgLACIgSADIgLAAgAg+AnIAIAAQAHAAAIgCQAIgCAHgEQAHgFAFgIQAFgHACgLQACgMgEgJQgEgJgJgFQgHgFgMAAIgIAAgAlNBPIgDgTIg2AAIgLATIgyAAIBligIAXAAIAmCggAlXAeIgHgmIgXAmIAeAAg");
	this.shape.setTransform(-36.63,-28.2444);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-36.5,90.39999999999999,16.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJpBQQgFgEgDgFQgCgGABgHQABgGAFgGQAEgFAGgEQAGgDAHAAQALAAAGAHQAGAHgCAKQgBAHgEAGQgFAFgGAEQgGADgHAAQgHAAgFgDgAEEBPIgmigIAsAAIARBTIAxhTIAyAAIhkCggAocBPIg7hOIgPBMIgrAAIAfifIAPAAIA7BNIAPhMIArAAIgfCggAHqBNIAfieIArAAIgXB3IA4AAIgHAngAFvBNIAfieIBjAAIgIAnIg4AAIgEAXIAtAAIgGAiIguAAIgEAXIA4AAIgIAngABQBNIAfieIBjAAIgIAnIg3AAIgFAXIAtAAIgGAiIguAAIgEAXIA4AAIgIAngAglBNIAfieIAqAAIgXB3IA4AAIgHAngAjEBNIAXh3IgjAAIAIgnIByAAIgIAnIgjAAIgYB3gAkcBNIgPgvIgiAvIg1AAIBChTIgehLIAtAAIAPAqIAegqIA0AAIg9BOIAfBQgAnxBNIAfieIBjAAIgHAnIg4AAIgFAXIAuAAIgHAiIguAAIgEAXIA4AAIgIAng");
	this.shape.setTransform(-4.01,-32.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.8,-41,131.7,16.7);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back_0();
	this.instance.parent = this;
	this.instance.setTransform(-228,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-300,300,600);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.992],0,0,0,0,0,114.6).s().p("AsfMgQlLlMAAnUQAAnUFLlLQFMlMHTAAQHUAAFMFMQFLFLAAHUQAAHUlLFMQlMFLnUABQnTgBlMlLg");
	this.shape.setTransform(0,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.1,-135,226.3,226.3);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.back_();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SigndLogo();
	this.instance.parent = this;
	this.instance.setTransform(-52,328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,328,106,23);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKwBXQgFgDgDgGQgCgGABgIQABgHAFgGQAFgGAGgEQAHgDAIgBQALABAGAHQAHAIgCALQgBAIgFAGQgEAGgHADQgHAEgHAAQgIAAgGgEgAFrBZQgZgCgRgMQgRgLgIgUQgIgUADgZQAEgbAPgVQAOgUAWgLQAXgLAaABQAZACARALQARAMAIAUQAIAUgDAZQgDAVgJAQQgKARgOAMQgOAMgRAGQgPAFgRAAIgFAAgAFtgpQgKAGgIAKQgHALgCANQgCAMADALQAEAKAIAHQAIAGAMAAQAMABALgGQAKgGAHgLQAHgLACgMQACgOgDgKQgEgKgIgGQgIgGgMgBIgCAAQgLAAgJAGgAqUBZQgZgCgRgMQgRgLgIgUQgIgUADgZQAEgbAPgVQAOgUAWgLQAXgLAaABQAZACARALQARAMAIAUQAIAUgDAZQgDAVgJAQQgKARgOAMQgOAMgRAGQgPAFgRAAIgFAAgAqSgpQgKAGgIAKQgHALgCANQgCAMADALQAEAKAIAHQAIAGAMAAQAMABALgGQAKgGAHgLQAHgLACgMQACgOgDgKQgEgKgIgGQgIgGgMgBIgCAAQgLAAgJAGgABFBWIhBhUIgPBTIgvAAIAiiuIAQAAIBABUIAQhTIAvAAIgiCugAJbBVIANhDIg4BAIgdg/IgNBCIgvAAIAiiuIAVAAIAuBjIBXhjIAZAAIghCugABxBVIAiisIA4AAQAOgBAOAFQAPAEALAKQAMAKAFARQAGARgCAYQgDAVgIAPQgIAPgLAJQgLAKgMAFQgMAFgLADIgUACIgMABgACpApIAIAAQAIAAAIgCQAJgCAIgFQAIgFAFgIQAGgIABgMQACgOgEgKQgEgJgJgFQgJgFgMAAIgJAAgAh5BVIgEgUIg7AAIgLAUIg2AAIBuivIAYAAIAqCvgAiDAfIgJgpIgYApIAhAAgAlqBVIAiitIBsAAIgJArIg8AAIgGAcIAxAAIgHAmIgxAAIgNBAgAooBVIAiitIBrAAIgIArIg9AAIgFAcIAxAAIgIAmIgxAAIgMBAg");
	this.shape.setTransform(-0.9788,-2.834);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-11.9,146.7,18.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61FFFF").s().p("AIwBYIgoiuIAwAAIASBaIA1haIA2AAIhsCugAk5BYIhAhVIgQBTIgvAAIAiitIAQAAIBBBUIAPhTIAwAAIgiCugAMrBWIAhisIAwAAIgaCBIA9AAIgIArgAKlBWIAiisIBsAAIgJArIg9AAIgEAYIAxAAIgIAmIgxAAIgFAYIA9AAIgIArgAFuBWIAhisIBsAAIgJArIg8AAIgFAYIAyAAIgIAmIgyAAIgEAYIA9AAIgIArgADuBWIAhisIAwAAIgZCBIA9AAIgJArgAA8BWIAZiAIgnAAIAIgsIB9AAIgIAsIgnAAIgZCAgAgjBWIgRgyIgkAyIg5AAIBHhaIghhSIAyAAIAPAuIAiguIA3AAIhCBVIAiBXgAkKBWIAhisIBsAAIgIArIg9AAIgEAYIAxAAIgIAmIgxAAIgFAYIA9AAIgIArgAqABWIAhisIBsAAIgJArIg8AAIgFAYIAyAAIgIAmIgyAAIgEAYIA9AAIgIArgArOBWIAOhBIgtAAIgNBBIgvAAIAiisIAvAAIgMBBIArAAIAOhBIAuAAIgiCsgAuSBWIAaiAIgmAAIAIgsIB8AAIgIAsIgnAAIgZCAg");
	this.shape.setTransform(0.85,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-10.5,185.5,17.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkDBOQgSgLgIgVQgJgUAEgaQAEgVAKgRQAKgRAOgMQAPgLARgGQASgGATABQANAAALAEQAKAEAIAGQAIAGAFAHIgfAjQgGgIgIgGQgHgFgMgBQgLABgLAFQgLAGgHAKQgHALgDAOQgDAOAEALQAFAKAIAGQAJAGAMAAQALAAAIgFQAIgEAEgGQAFgGACgFIgjAAIAHghIBUAAIAAAJIgBAHQgFAZgNATQgOAUgUALQgVALgaAAQgbAAgTgMgAGZBUQgMgEgHgIQgJgIgFgKIAggbQAGAJAHAFQAJAGAJAAIAHgBQAEgBADgDQADgCAAgEQABgFgDgFQgEgEgFgEIgNgIQgLgHgHgHQgIgIgDgKQgDgKACgMQAEgNAJgKQAIgKANgGQAOgFAPAAQAMAAAKADQAKAEAIAHQAHAHAEAJIgfAaQgDgHgHgEQgFgDgIAAQgGAAgEADQgEADgBAEQAAAEADAEIAKAHIAMAHQALAHAIAHQAIAIADAKQAEAKgCANQgDAOgJALQgJALgNAGQgOAGgTAAQgPAAgNgFgAniBUQgMgEgIgIQgIgIgFgKIAggbQAFAJAIAFQAIAGAKAAIAHgBQAEgBADgDQADgCAAgEQABgFgDgFQgEgEgGgEIgNgIQgLgHgHgHQgIgIgDgKQgDgKADgMQADgNAJgKQAJgKANgGQANgFAPAAQANAAAKADQAKAEAHAHQAHAHAFAJIggAaQgDgHgGgEQgGgDgHAAQgHAAgDADQgFADgBAEQAAAEADAEIAKAHIANAHQAKAHAIAHQAJAIADAKQADAKgCANQgCAOgKALQgIALgOAGQgOAGgTAAQgPAAgMgFgAATBYIhAhVIgQBTIgvAAIAiiuIAQAAIA/BVIAQhTIAvAAIgiCugAEuBWIAiisIAvAAIgiCsgABBBWIAiisIA4AAQAOAAAOAEQAPAFALAKQAMAKAFARQAGAQgDAYQgDAVgHAPQgIAPgLAKQgLAJgNAFQgMAGgKACIgVADIgMAAgAB5ArIAIAAQAIAAAIgCQAJgCAIgFQAHgFAGgJQAFgIACgMQACgNgEgKQgEgKgKgFQgJgFgLAAIgJAAgAl4BWIAhisIAwAAIgiCsg");
	this.shape.setTransform(1,-0.1769);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-9.2,103.2,18.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.frame_();
	this.instance.parent = this;
	this.instance.setTransform(-59.6,-93.85,0.8764,0.8766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-93.8,142,185.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.box_();
	this.instance.parent = this;
	this.instance.setTransform(-72,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.shadowbox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-95,19,1.618,1.618);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-106,288,233.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(5,-45,0.9243,0.9239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-45,73,103.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFJBSQgXgCgPgKQgQgLgHgSQgIgSAEgXQADgYANgTQAOgTATgKQAVgKAYABQAWACAQALQAQAKAHATQAHASgDAWQgDATgIAPQgJAPgMALQgNALgQAFQgOAFgOAAIgFAAgAFKgkQgJAFgHAKQgGAJgCAMQgCAMADAJQADAKAIAFQAGAGAMAAQALABAKgGQAJgFAGgKQAGgKADgMQABgLgDgJQgDgKgIgFQgGgGgLAAIgCAAQgKAAgJAFgAgmBQIg7hNIgOBLIgsAAIAfieIAPAAIA7BNIAOhLIAqAAIgeCegAI9BOIAficIBiAAIgIAnIg3AAIgEAWIAtAAIgHAiIgtAAIgEAWIA3AAIgHAngAIABOIgdg8IgLA8IgrAAIAeicIA1AAQAQAAAMAHQAMAGAGAMQAGAMgCARQgEAPgJAKQgJALgOAFIAgA9gAHpgKIALABQAIAAAFgEQAFgEACgHQAAgHgDgFQgEgEgHAAIgMAAgAC5BOIALg9IgzA7Igbg6IgMA8IgqAAIAfieIATAAIAqBaIBPhaIAXAAIgfCegAjYBOIgcg8IgMA8IgrAAIAficIA0AAQARAAAMAHQAMAGAFAMQAGAMgCARQgDAPgKAKQgJALgOAFIAgA9gAjvgKIAMABQAHAAAFgEQAGgEABgHQABgHgEgFQgEgEgGAAIgMAAgAlnBOIgDgSIg2AAIgKASIgxAAIBkieIAWAAIAmCegAlwAdIgIglIgWAlIAeAAgApJBOIAficIBiAAIgHAnIg4AAIgEAWIAsAAIgGAiIgtAAIgEAWIA3AAIgIAngAq9BOIAficIAqAAIgWB1IA3AAIgIAng");
	this.shape.setTransform(2.5,0.8781);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-16.2,144.60000000000002,32.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-12.5,106,25);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CFFFF").s().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-12.5,106,25);


(lib.frame300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EAXcgu3MAAABdvMgu3AAAMAAAhdvg");
	this.shape.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame300x250, new cjs.Rectangle(-151,-126,302,602), null);


(lib.TXTcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_15
	this.instance = new lib.Symbol26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.05,104.95);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:false},0).to({x:-29.55,alpha:1},21,cjs.Ease.get(1)).wait(87).to({startPosition:0},0).to({x:-11.05,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(56));

	// Layer_14
	this.instance_1 = new lib.Symbol25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58.6,71.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({_off:false},0).to({x:-40.1,alpha:1},21,cjs.Ease.get(1)).wait(87).to({startPosition:0},0).to({x:-21.6,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// Layer_13
	this.instance_2 = new lib.Symbol27("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-69.85,37.75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).to({x:-51.35,alpha:1},21,cjs.Ease.get(1)).wait(87).to({startPosition:0},0).to({x:-32.85,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(62));

	// Layer_12
	this.instance_3 = new lib.Symbol28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-57.85,4.15);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({x:-39.35,alpha:1},21,cjs.Ease.get(1)).wait(87).to({startPosition:0},0).to({x:-20.85,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(65));

	// Layer_11
	this.instance_4 = new lib.Symbol29("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-52.15,-29.45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(139).to({_off:false},0).to({x:-33.65,alpha:1},21,cjs.Ease.get(1)).wait(87).to({startPosition:0},0).to({x:-15.15,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(68));

	// Layer_7
	this.instance_5 = new lib.Symbol20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-39.45,58.25);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:-22.65,alpha:1},20,cjs.Ease.get(1)).wait(93).to({startPosition:0},0).to({x:-4.15,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(193));

	// Layer_6
	this.instance_6 = new lib.Symbol21("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28,29.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({x:-11.2,alpha:1},20,cjs.Ease.get(1)).wait(93).to({startPosition:0},0).to({x:7.3,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(196));

	// Layer_5
	this.instance_7 = new lib.Symbol22("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-36.6,0.75);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({x:-19.8,alpha:1},20,cjs.Ease.get(1)).wait(93).to({startPosition:0},0).to({x:-1.3,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(199));

	// Layer_9
	this.instance_8 = new lib.Symbol23("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-21.9,-27.95);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-5.1,alpha:1},20,cjs.Ease.get(1)).wait(93).to({startPosition:0},0).to({x:13.4,alpha:0},23,cjs.Ease.get(-1)).to({_off:true},1).wait(202));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-56.1,344.8,189.6);


(lib.TXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-37.9,27.35);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:-17.9,alpha:1},23,cjs.Ease.get(1)).wait(173).to({startPosition:0},0).to({x:3.1,alpha:0},22,cjs.Ease.get(-1)).to({_off:true},1).wait(91));

	// Layer_2
	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:0,alpha:1},23,cjs.Ease.get(1)).wait(173).to({startPosition:0},0).to({x:21,alpha:0},22,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// Layer_1
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62.25,-27.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-42.25,alpha:1},23,cjs.Ease.get(1)).wait(173).to({startPosition:0},0).to({x:-21.25,alpha:0},22,cjs.Ease.get(-1)).to({_off:true},1).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-36.5,227.39999999999998,70.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10.85,-0.6,0.5555,0.5535,0,0,0,-0.4,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:-0.85,alpha:1},22,cjs.Ease.get(1)).wait(524));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqiB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_1 = new cjs.Graphics().p("Ap/B9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_2 = new cjs.Graphics().p("ApdB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_3 = new cjs.Graphics().p("Ao8B9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_4 = new cjs.Graphics().p("AodB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_5 = new cjs.Graphics().p("An/B9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_6 = new cjs.Graphics().p("AnhB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_7 = new cjs.Graphics().p("AnFB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_8 = new cjs.Graphics().p("AmrB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_9 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_10 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_11 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_12 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_13 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_14 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_15 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_16 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_17 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_18 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_19 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_20 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_21 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_22 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_23 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_24 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_25 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_26 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_27 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_28 = new cjs.Graphics().p("AmUB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAIMpAAQA0AAAlAlQAkAkAAAzQAAA0gkAkQglAlg0AAg");
	var mask_graphics_29 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");
	var mask_graphics_30 = new cjs.Graphics().p("AmUB9Qg0AAgkglQglgkAAg0QAAgzAlgkQAkglA0AAIMpAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-80,y:0}).wait(1).to({graphics:mask_graphics_1,x:-76.4928,y:0}).wait(1).to({graphics:mask_graphics_2,x:-73.1044,y:0}).wait(1).to({graphics:mask_graphics_3,x:-69.835,y:0}).wait(1).to({graphics:mask_graphics_4,x:-66.6844,y:0}).wait(1).to({graphics:mask_graphics_5,x:-63.6528,y:0}).wait(1).to({graphics:mask_graphics_6,x:-60.74,y:0}).wait(1).to({graphics:mask_graphics_7,x:-57.9461,y:0}).wait(1).to({graphics:mask_graphics_8,x:-55.2711,y:0}).wait(1).to({graphics:mask_graphics_9,x:-52.43,y:0}).wait(1).to({graphics:mask_graphics_10,x:-47.5556,y:0}).wait(1).to({graphics:mask_graphics_11,x:-42.9189,y:0}).wait(1).to({graphics:mask_graphics_12,x:-38.52,y:0}).wait(1).to({graphics:mask_graphics_13,x:-34.3589,y:0}).wait(1).to({graphics:mask_graphics_14,x:-30.4356,y:0}).wait(1).to({graphics:mask_graphics_15,x:-26.75,y:0}).wait(1).to({graphics:mask_graphics_16,x:-23.3022,y:0}).wait(1).to({graphics:mask_graphics_17,x:-20.0922,y:0}).wait(1).to({graphics:mask_graphics_18,x:-17.12,y:0}).wait(1).to({graphics:mask_graphics_19,x:-14.3856,y:0}).wait(1).to({graphics:mask_graphics_20,x:-11.8889,y:0}).wait(1).to({graphics:mask_graphics_21,x:-9.63,y:0}).wait(1).to({graphics:mask_graphics_22,x:-7.6089,y:0}).wait(1).to({graphics:mask_graphics_23,x:-5.8256,y:0}).wait(1).to({graphics:mask_graphics_24,x:-4.28,y:0}).wait(1).to({graphics:mask_graphics_25,x:-2.9722,y:0}).wait(1).to({graphics:mask_graphics_26,x:-1.9022,y:0}).wait(1).to({graphics:mask_graphics_27,x:-1.07,y:0}).wait(1).to({graphics:mask_graphics_28,x:-0.4756,y:0}).wait(1).to({graphics:mask_graphics_29,x:-0.1189,y:0}).wait(1).to({graphics:mask_graphics_30,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(535));

	// Layer_2
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(566));

	// Layer_1
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9,2,0.6981,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance_2.cache(-55,-14,110,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({scaleX:1,x:2,alpha:0.6406},21,cjs.Ease.get(1)).wait(533));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-24.5,126,59);


(lib.block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// phone
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-120.15,0.1,0.8262,0.8264,0,0,0,0.3,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:-4.15},32,cjs.Ease.get(1)).to({_off:true},218).wait(2));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_53 = new cjs.Graphics().p("ADYJsIAKgKImbgvIgZAAIjpgfIgFyVIN5ATIAITxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_graphics_53,x:161.625,y:-18.75}).wait(74).to({graphics:null,x:0,y:0}).wait(131));

	// Layer_6
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41,-180.75);
	this.instance_1.alpha = 0.3086;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({x:322.6,y:17.7,alpha:0.1602},73).to({_off:true},1).wait(131));

	// Layer_3
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(339.1,44.2,0.7763,0.7763,0,0,0,23.4,72.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:179.1},38,cjs.Ease.get(1)).wait(206));

	// Layer_2
	this.instance_3 = new lib.Symbol6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(340,-28.5,0.69,0.69,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:81},30,cjs.Ease.get(1)).to({_off:true},223).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-101.6,589.2,161.2);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(79,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-125,300,600);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FRAME
	this.instance = new lib.frame300x250();
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(533));

	// Layer_5
	this.instance_1 = new lib.TXT("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(141,117.2,1.2963,1.2942,0,0,0,0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).wait(240));

	// Layer_9
	this.instance_2 = new lib.Symbol("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(151,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(512).to({_off:false},0).to({alpha:1},20).wait(1));

	// cta
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(223,562.45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(511));

	// Layer_7
	this.instance_4 = new lib.Symbol13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(77,224);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},19).wait(514));

	// Layer_5_copy
	this.instance_5 = new lib.TXTcopy("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.35,123.5,1.3881,1.377,0,0,0,0.4,0.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},287).wait(236));

	// Layer_3
	this.instance_6 = new lib.block("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(4.65,363.4,1.3155,1.315,0,0,0,-0.1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(300).to({_off:false},0).wait(233));

	// back_
	this.instance_7 = new lib.Symbol14("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(273).to({_off:false},0).to({alpha:1},25).wait(235));

	// Layer_4
	this.instance_8 = new lib.Symbol161("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(530.8,608.75,1.0286,1.0282,-28.2384,0,0,0.6,0.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(139).to({_off:false},0).to({rotation:0,x:238.75,y:402.8},31,cjs.Ease.get(1)).to({_off:true},130).wait(233));

	// back_2
	this.instance_9 = new lib.Symbol("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(149,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},300).wait(233));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,299,701.4,529.5);
// library properties:
lib.properties = {
	id: 'B3CBE47BE7A3F14D9FA6DB9D6CDFC044',
	width: 300,
	height: 600,
	fps: 45,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"back_.jpg", id:"back_"},
		{src:"back_0.jpg", id:"back_0"},
		{src:"Bitmap1.png", id:"Bitmap1"},
		{src:"box_.png", id:"box_"},
		{src:"frame_.png", id:"frame_"},
		{src:"HAND.png", id:"HAND"},
		{src:"shadowbox.png", id:"shadowbox"},
		{src:"SigndLogo.png", id:"SigndLogo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B3CBE47BE7A3F14D9FA6DB9D6CDFC044'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;