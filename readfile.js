var countover=new Array(16).fill(0);
var countunder=new Array(16).fill(0);
var count2=0;
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
  if(arr[17]=="2001"){ if(arr[6]=='OVER $500'){countover[0]++;}if(arr[6]=='$500 AND UNDER'){countunder[0]++;}}
  else if(arr[17]=="2002"){ if(arr[6]=='OVER $500'){countover[1]++;}if(arr[6]=='$500 AND UNDER'){countunder[1]++;}}
  else   if(arr[17]=="2003"){ if(arr[6]=='OVER $500'){countover[2]++;}if(arr[6]=='$500 AND UNDER'){countunder[2]++;}}
    else   if(arr[17]=="2004"){ if(arr[6]=='OVER $500'){countover[3]++;}if(arr[6]=='$500 AND UNDER'){countunder[3]++;}}
      else   if(arr[17]=="2005"){ if(arr[6]=='OVER $500'){countover[4]++;}if(arr[6]=='$500 AND UNDER'){countunder[4]++;}}
        else   if(arr[17]=="2006"){ if(arr[6]=='OVER $500'){countover[5]++;}if(arr[6]=='$500 AND UNDER'){countunder[5]++;}}
          else   if(arr[17]=="2007"){ if(arr[6]=='OVER $500'){countover[6]++;}if(arr[6]=='$500 AND UNDER'){countunder[6]++;}}
            else   if(arr[17]=="2008"){ if(arr[6]=='OVER $500'){countover[7]++;}if(arr[6]=='$500 AND UNDER'){countunder[7]++;}}
              else   if(arr[17]=="2009"){ if(arr[6]=='OVER $500'){countover[8]++;}if(arr[6]=='$500 AND UNDER'){countunder[8]++;}}
                else   if(arr[17]=="2010"){ if(arr[6]=='OVER $500'){countover[9]++;}if(arr[6]=='$500 AND UNDER'){countunder[9]++;}}
                  else   if(arr[17]=="2011"){ if(arr[6]=='OVER $500'){countover[10]++;}if(arr[6]=='$500 AND UNDER'){countunder[10]++;}}
                    else   if(arr[17]=="2012"){ if(arr[6]=='OVER $500'){countover[11]++;}if(arr[6]=='$500 AND UNDER'){countunder[11]++;}}
                      else   if(arr[17]=="2013"){ if(arr[6]=='OVER $500'){countover[12]++;}if(arr[6]=='$500 AND UNDER'){countunder[12]++;}}
                        else   if(arr[17]=="2014"){ if(arr[6]=='OVER $500'){countover[13]++;}if(arr[6]=='$500 AND UNDER'){countunder[13]++;}}
                          else   if(arr[17]=="2015"){ if(arr[6]=='OVER $500'){countover[14]++;}if(arr[6]=='$500 AND UNDER'){countunder[14]++;}}
                            else   if(arr[17]=="2016"){ if(arr[6]=='OVER $500'){countover[15]++;}if(arr[6]=='$500 AND UNDER'){countunder[15]++;}}
                            else{}


}

);
rl.on("close",function(){
  var output="";
  var arr=[];
  var j=0;
for(i=2001;i<=2016;i++)
{
var aobject={
  Year:i,
  over$500:countover[j],
  under$500:countunder[j]
};
arr.push(aobject);

j++;
}
fs.writeFile('yogi.txt',JSON.stringify(arr),function(err){
  if(err)
  console.log("something went wrong");
  console.log("written succed");

});
});
