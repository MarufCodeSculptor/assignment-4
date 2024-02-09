

function calculateMoney(ticketSale) {
    if (typeof ticketSale === 'number' && isNaN(ticketSale)!==true && ticketSale >= 0) {
        const securityCost = 500;
        const stufLunchCost = 50 * 8;
        const perTicketPrice = 120;
        const totalTicketSells = ticketSale;
        let profit = perTicketPrice * totalTicketSells - (securityCost + stufLunchCost);
        return profit;
    }
    else{
        return  `\x1b[31m  "Invalid Number" please input correct number and try again `;
        
    }
}

