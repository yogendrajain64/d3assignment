
var counttrue=new Array(16).fill(0);
var countfalse=new Array(16).fill(0);
var count=0;
const fs=require('fs');
var input=fs.createReadStream('crimedata.csv');
var rl=require('readline').createInterface(
{
input:input,
terminal:false
});
rl.on('line',function(line)
{
  var arr=line.split(new RegExp(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));

  if(arr[5]=="ASSAULT")
  {
    if(arr[8]=="true")
    {
  counttrue[arr[17]%2000]++;
}
if(arr[8]=="false")
{
countfalse[arr[17]%2000]++;
count++;

}
}


  });


    rl.on("close",function(){
    year=2001;
    var arr=[];
    for(i=1;i<=16;i++)
    {
  var obj={Year:year,Arrest:counttrue[i],NonArrest:countfalse[i]};
  year++;
  arr.push(obj);
}
fs.writeFile('yogi1.json',JSON.stringify(arr),function(err){
  if(err)
  console.log("something went wrong");
  console.log("written succed");});
  console.log(count);
});
