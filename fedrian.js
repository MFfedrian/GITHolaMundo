 arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
document.write("Vec Inicial: ");
mostrar(arr);
 result = BubbleSort(arr);
document.write("Vec Ordenado: ");
mostrar(result);

function mostrar(arr){
	document.write("(")
	for(k=0;k<arr.length;k++){
		if(!(k==arr.length-1)){document.write(arr[k]+",");}
		else{document.write(arr[k]+")<br/>");}
	}
}

function BubbleSort(arr){
	var cont=0;
	for(i=0;i<arr.length;i++){
		for(j=0;j<arr.length-i-1;j++){
			document.write("i: "+i+", j:"+j+"<br/>")
			if(arr[j]>arr[j+1]){
				cont++;
				[arr[j],arr[j+1]]=[arr[j+1],arr[j]];
				document.write("<br/>Paso"+cont+": ")
				mostrar(arr);
			}
		}
	}
	return arr;
}

