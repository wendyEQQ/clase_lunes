var n,a,b,c,i;
n=parseInt(prompt("n: "));
a=-1; b=1;



for(i=1;i<=n;i++){
    c=a+b;
    a=b;
    b=c;
    document.write("<font size='25' color='blue'>")
    document.write(c+",");
    document.write("</font>");
}