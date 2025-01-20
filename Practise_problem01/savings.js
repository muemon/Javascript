const monthlySavings = (payments , living_cost) =>
    {
        let savings = 0;
    
        if(typeof payments === "number")
        {
            return "Invalid input";
        }
        else
        {
            for(let val of payments)
            {
                if (val >= 3000)
                {
                    savings += 80*val/100;
                }
                else
                {
                    savings += val;
                }
            }
            return savings -= living_cost;
        }
    }
    
    let payments1 = [1000, 1500, 3000];
    let living_cost1 = 4000;
    
    let payments2 = [1200, 2000, 4000];
    let living_cost2 = 6000;
    
    let payments3 = [1000, 1700, 3200];
    let living_cost3 = 8000;
    
    let payments4 = [1500, 2000, 3600];
    let living_cost4 = 10000;
    
    let savings1 = monthlySavings(payments1, living_cost1);
    let savings2 = monthlySavings(payments2, living_cost2);
    let savings3 = monthlySavings(payments3, living_cost3);
    let savings4 = monthlySavings(living_cost4 , payments4);
    
    if(savings1 >= 0)
    {
        console.log(`Total savings_1: ${savings1}`);
    }
    else
    {
        console.log("earn more");
    }
    
    if(savings2 >= 0)
    {
        console.log(`Total savings_2: ${savings2}`);
    }
    else
    {
        console.log("earn more");
    }
    
    if(savings3 >= 0)
    {
        console.log(`Total savings_3: ${savings3}`);
    }
    else
    {
        console.log("earn more");
    }
    
    if(savings4 === "Invalid input")
    {
        console.log(`Total savings_4: ${savings4}`);
    }
    else
    {
        console.log("earn more");
    }