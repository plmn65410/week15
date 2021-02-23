let zodiac = prompt("Enter value of Year : ");
let year = parseInt(zodiac); //onvert String to SVGAnimatedInteger(number)
function myZodiac(year){
    switch(year)
    {
        case 1972: case 1984: case 1996: case 2008: case 2020:
            alert("Rat ZODIAC SIGNS");
            console.log("Rat ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Rat ZODIAC SIGNS"
            break;
        case 1973: case 1985: case 1997: case 2009: case 2021:
            alert("Oxen ZODIAC SIGNS");
            console.log("Oxen ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Oxen ZODIAC SIGNS"
            break;
        case 1974: case 1986: case 1998: case 2010: case 2022:
            alert("Tiger ZODIAC SIGNS");
            console.log("Tiger ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Tiger ZODIAC SIGNS"
            break;
        case 1975: case 1987: case 1999: case 2011: case 2023:
            alert("Rabbit ZODIAC SIGNS");
            console.log("Rabbit ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Rabbit ZODIAC SIGNS"
            break;
        case 1976: case 1988: case 2000: case 2012: case 2024:
            alert("Dragon ZODIAC SIGNS");
            console.log("Dragon ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Dragon ZODIAC SIGNS"
            break;    
        case 1977: case 1989: case 2001: case 2013: case 2025:
            alert("Snake ZODIAC SIGNS");
            console.log("Snake ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Snake ZODIAC SIGNS"
            break;
        case 1978: case 1990: case 2002: case 2014: case 2026:
            alert("Horse ZODIAC SIGNS");
            console.log("Horse ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Horse ZODIAC SIGNS"
            break;
        case 1979: case 1991: case 2003: case 2015: case 2027:
            alert("Sheep ZODIAC SIGNS");
            console.log("Sheep ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Sheep ZODIAC SIGNS"
            break;
        case 1980: case 1992: case 2004: case 2016: case 2028:
            alert("Monkey ZODIAC SIGNS");
            console.log("Monkey ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Monkey ZODIAC SIGNS"
            break;
        case 1981: case 1993: case 2005: case 2017: case 2029:
            alert("Rooster ZODIAC SIGNS");
            console.log("Rooster ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Rooster ZODIAC SIGNS"
            break;
        case 1982: case 1994: case 2006: case 2018: case 2030:
            alert("Dog ZODIAC SIGNS");
            console.log("Dog ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Dog ZODIAC SIGNS"
            break;
        case 1983: case 1995: case 2007: case 2019: case 2031:
            alert("Pig ZODIAC SIGNS");
            console.log("Pig ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "Pig ZODIAC SIGNS"
            break;

        default:
            alert("ERROR ZODIAC SIGNS");
            console.log("ERROR ZODIAC SIGNS");
            document.getElementById("hContent").innerHTML= "ERROR ZODIAC SIGNS"
    }
}

myZodiac(year);