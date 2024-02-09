

function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments)) {
        return 'invalid data'
    }
    else if (typeof livingCost !== 'number'){
        return 'invalid data'
    }
        
   
    else {
        let paymentTotal = 0;
        let updatePayments = [];
    
        for (let payment of payments) {
            
            if (typeof payment === "number") {
                if (payment >= 3000) {
                    const rateCutter = 20 / 100;
                    payment =payment-(payment * rateCutter);
                    updatePayments.push(payment)
                    
                }
                else {
                    updatePayments.push(payment)
                }
            }
            else {
                continue
            }
        }
    
        for (const uPayment of updatePayments) {
            paymentTotal += uPayment;
        }
        
        const savings = paymentTotal - livingCost;
        
        
        if (savings < 0) {
            return 'earn more'
        }
        else if (savings >= 0) {
            return savings;
        }
    }
        
}
