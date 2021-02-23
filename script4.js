let zodiac = prompt("Enter value of Year : ");
let year = parseInt(zodiac); //onvert String to SVGAnimatedInteger(number)
function myZodiac(year,ily){
    switch(year)
    {
        case 1972: case 1984: case 1996: case 2008: case 2020:
            alert(`Rat ZODIAC SIGNS ${ily}`);
            console.log(`Rat ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Rat ZODIAC SIGNS ${ily}`);
            break;
        case 1973: case 1985: case 1997: case 2009: case 2021:
            alert(`Oxen ZODIAC SIGNS  ${ily}`);
            console.log(`Oxen ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Oxen ZODIAC SIGNS ${ily}`);
            break;
        case 1974: case 1986: case 1998: case 2010: case 2022:
            alert(`Tiger ZODIAC SIGNS ${ily}`);
            console.log(`Tiger ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Tiger ZODIAC SIGNS ${ily}`);
            break;
        case 1975: case 1987: case 1999: case 2011: case 2023:
            alert(`Rabbit ZODIAC SIGNS ${ily}`);
            console.log(`Rabbit ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Rabbit ZODIAC SIGNS ${ily}`);
            break;
        case 1976: case 1988: case 2000: case 2012: case 2024:
            alert(`Dragon ZODIAC SIGNS ${ily}`);
            console.log(`Dragon ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Dragon ZODIAC SIGNS ${ily}`);
            break;    
        case 1977: case 1989: case 2001: case 2013: case 2025:
            alert(`Snake ZODIAC SIGNS ${ily}`);
            console.log(`Snake ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Snake ZODIAC SIGNS ${ily}`);
            break;
        case 1978: case 1990: case 2002: case 2014: case 2026:
            alert(`Horse ZODIAC SIGNS ${ily}`);
            console.log(`Horse ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Horse ZODIAC SIGNS ${ily}`);
            break;
        case 1979: case 1991: case 2003: case 2015: case 2027:
            alert(`Sheep ZODIAC SIGNS ${ily}`);
            console.log(`Sheep ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Sheep ZODIAC SIGNS ${ily}`);
            break;
        case 1980: case 1992: case 2004: case 2016: case 2028:
            alert(`Monkey ZODIAC SIGNS ${ily}`);
            console.log(`Monkey ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Monkey ZODIAC SIGNS ${ily}`);
            break;
        case 1981: case 1993: case 2005: case 2017: case 2029:
            alert(`Rooster ZODIAC SIGNS ${ily}`);
            console.log(`Rooster ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Rooster ZODIAC SIGNS ${ily}`);
            break;
        case 1982: case 1994: case 2006: case 2018: case 2030:
            alert(`Dog ZODIAC SIGNS ${ily}`);
            console.log(`Dog ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Dog ZODIAC SIGNS ${ily}`);
            break;
        case 1983: case 1995: case 2007: case 2019: case 2031:
            alert(`Pig ZODIAC SIGNS ${ily}`);
            console.log(`Pig ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`Pig ZODIAC SIGNS ${ily}`);
            break;

        default:
            alert(`ERROR ZODIAC SIGNS ${ily}`);
            console.log(`ERROR ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML= (`ERROR ZODIAC SIGNS ${ily}`);
    }
}

myZodiac(year," I Love You");