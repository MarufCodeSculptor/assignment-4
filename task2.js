function checkName(props) {
    if (typeof props === 'string') {
        let withoutWhiteSpaces = props.replace(/\s/g, "");
        const nameIs = withoutWhiteSpaces;
        const lastLetter = nameIs[nameIs.length - 1];
        if (lastLetter==='a' || lastLetter==='e' || lastLetter==='i' || lastLetter==='o' || lastLetter==='u' || lastLetter==='y' || lastLetter==='w') {
            return '\x1b[32m Good name'
        }
        else if (lastLetter === 'A' || lastLetter === 'E' || lastLetter === 'I' || lastLetter === 'O' || lastLetter === 'U' || lastLetter === 'Y' || lastLetter === 'W') {
            return '\x1b[32m Good Name'
        }

        else {
            return "\x1b[33m Bad name"
        }
    }
    else {
        return "\x1b[31m Invalid";
    }
                
}




        
        
        
        









  
     
 













    





