// by samet ERDÜNER..

var deger,geciciDeger;
var dizi = [];
for(var i = 100;i != 999;i++){

	for(var a = i,b = 100;b!=999;b++){

		deger = a*b;

		geciciDeger = deger.toString();

		if(geciciDeger[0] == geciciDeger[5] && geciciDeger[1] == geciciDeger[4] && geciciDeger[2] == geciciDeger[3]){
			if(dizi.indexOf(deger)==-1)
				dizi.push(deger);
		}
	}
}

dizi.sort();
console.log(dizi.join());



