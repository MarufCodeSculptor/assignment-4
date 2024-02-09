





function deleteInvalids(props) {
    if (Array.isArray(props)) {
        let numbers = [];
        for (let i = 0; i < props.length; i++) {
            if (typeof props[i] === 'number' && !isNaN(props[i])) {
                numbers.push(props[i]);
            }
        }
       
        return numbers;

    }

    else {
        return ' \x1b[31m Invalid Array !  use correct data for reslult'
    }
}

        







