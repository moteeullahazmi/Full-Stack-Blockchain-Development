function prime(n,m)
{
    let j = 0
    let i = 0
    for(i=n;i<=m;i++)
    {
       for(j=2;j<=i;j++)
       {
            if(i%j===0)
                break;        
       }
       if(i===j)
            fact(i);
    }
}

function fact(x)
{
    let ans = 1;
    for(k=x;k>1;k--)
    {  
        ans = ans*k;

    }
    console.log( `${i} ${ans}`)
}


prime(1,100)