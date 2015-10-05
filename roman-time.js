var hours = process.argv[2];
var minutes = process.argv[3];

var valid = check(hours,minutes);
if (valid)
{
	printTime(hours,minutes)
}
else
{
	console.log('Время указано не верно')
}

function check(hours,minutes)
{
	if (hours<=23 && hours>=0)
	{
		if(minutes<=59 && minutes>=0)
			{
				return true;
			}
	}
	return false
}

function printTime(hours,minutes)
{
	var strHours = convertToRoman(hours);
	var strMinutes = convertToRoman(minutes);
	var result = strHours + ':' + strMinutes;
	console.log(result);
	printInASCII(result);
}
function printInASCII(time)
{
	var result=[[],[],[],[],[],[]]
	for (var i = 0; i < time.length; i++)
	{
		result = addSymbol(result, time[i])
	};
	for (var i = 0; i < result.length; i++)
	{	
		var str = '';
		for (var j = 0; j < result[i].length; j++)
		{
			str+=result[i][j];
		};
		console.log(str);
	};
}

function addSymbol(array, symbol)
{
	var colonSymbol = [['   '],[' _ '],['(_)'],['   '],[' _ '],['(_)']]
	var symbolI = [[' _____ '],[ '|_   _|'],['  | |  '],
					['  | |  '],[' _| |_ '],['|_____|']];
	var symbolV = [['__      __'],['\\ \\    / /'],[' \\ \\  / / '],['  \\ \\/ /  '],
					['   \\  /   '],['    \\/    ']];
	var symbolX = [[' __   __'],[' \\ \\ / /'],['  \\ V / '],
					['   > <  '],['  / . \\ '],[' /_/ \\_\\']];
	var symbolL = [['  _      '],[' | |     '],[' | |     '],[' | |     '],
					[' | |     '],[' |______|']];
	var symbol0 = [['         '],['         '],['         '],
					['         '],['  ______ '],[' |______|']]
	var allSymbols = {':': colonSymbol, 'I': symbolI, 'V' : symbolV,
					   'X' : symbolX, 'L' : symbolL, '_' : symbol0};
    
	for (var i = 0; i < array.length; i++)
	{
		array[i]+= allSymbols[symbol][i];
	};				
	return array;
}


function convertToRoman(number)
{
	var roman = '';
	if(number==0)
	{
		return '_';
	}
	if(number/50 >= 1)
	{
		roman+='L';
		number-=50;
	}
	if(number/40 >= 1)
	{
		roman+='XL';
		number-=40;
	}
	if(number/10 >= 1)
	{
		var n = (number-number%10)/10;
		for (var i = 0; i < n; i++) 
		{
			roman += 'X'
		};
		number-= 10*n;
	}
	var romanNumbers = ['','I','II','III',
                 'IV','V','VI','VII',
                 'VIII','IX'];
    roman+= romanNumbers[number];
    return roman;
}

