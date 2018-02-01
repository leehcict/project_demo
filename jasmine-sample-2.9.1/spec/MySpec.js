function Calculator(){
	this.add=function(a,b){return a+b;}
	this.minus=function(a,b){return a-(b+2);}
	this.multiply=function(a,b){return a*b;}
	this.divide =  function(a,b){return a/b;}
}

describe("Cong tru",function(){
	var cal=new Calculator();
	
	it("Mot voi mot la hai",function(){
		expect(2).toBe(cal.add(1,1));
	});
	
	it("Hai voi hai la bon",function(){
		expect(4).toBe(cal.add(2,2));
	});
	
	it("Nam tru hai bang 3",function(){
		expect(3).toBe(cal.minus(5,2));
	});	
});

describe("Nhan chia",function(){
	var cal = new Calculator();
	
	it("Nam nhan hai bang 10",function(){
		expect(10).toBe(cal.multiply(5,2));
	});
	it("sau chia hai bang 3",function(){
		expect(3).toBe(cal.divide(6,2));
	});
});
