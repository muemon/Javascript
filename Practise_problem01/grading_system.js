var result = 85;

if (result < 0)
{
    console.log("Failed");
}
else if(result >= 0 && result < 40)
{
    console.log("Grade C");
}
else if(result >= 40 && result < 60)
{
    console.log("Grade B");
}
else if(result >= 60 && result < 70)
{
    console.log("Grade A-");
}
else if(result >= 70 && result < 80)
{
    console.log("Grade A");
}
else
{
    console.log("Grade A+");
}
