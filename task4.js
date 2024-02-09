
function password(props) {
  
    if ( typeof props === 'object') {
        if (!Array.isArray(props)) {
            if (Object.keys(props).length >= 0) {
                if (props['birthYear'].toString().length !== 4) {
                    return '\x1b[31m Invalid Birthdate';
                }
                else if (Object.keys(props).length !== 3) {
                    return '\x1b[31m Invalid Properties'
                }
            
                else {
                    let reslultData = `${props['siteName']}#${props['name']}@${props['birthYear']}`;
                    reslultData = reslultData.charAt(0).toUpperCase() + reslultData.slice(1);
            
                    return reslultData;
                }
        
            }
        
            else {
                return "\x1b[31m Invalid Data"
            }
         }   
        }
        else {
            return "\x1b[31m invalid data"
        }
    }
        

