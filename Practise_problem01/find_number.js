let arr = []
for(var i = 1; i<51; i++)
{
    if(i%3==0 && i%5==0)
    {
        arr.push(i);
    }
    // console.log(i);

}
for(var i = 0; i<arr.length; i++)
{
    console.log(arr[i]);
}