import styled 

from 

'styled-components'


import { Link } 

from 

'react-scroll'


export const Button = styled( Link )`
    
    border-radius: 80px
    ;
    
    background: ${ ( { primary } ) => ( primary ? '#63FFFD' : '#010606' )
    }
    ;
    
    white-space: nowrap
    ;
    
    padding: ${ ( { big } ) => ( big ? '14px 100px' : '20px 85px' ) 
    }
    ;
    
    color: ${ ( { dark } ) => ( dark ? '#010606' : '#fff' ) 
    }
    ;
    
    font-size: ${ ( { fontBig } ) => ( fontBig ? '20px' : '16px' ) 
    }
    ;
    
    outline: none
    ;
    
    border: none
    ;
    
    cursor: pointer
    ;
    
    display: flex
    ;
    
    justify-content: center
    ;
    
    align-items: center
    ;
    
    transition: all 0.2s ease-in-out
    ;

    &:hover {
        
        transition: all 0.2s ease-in-out
        ;
        
        background: ${ ( { primary } ) => ( primary ? '#fff' : '#63FFFD' ) 
        }
        ;
    
    }

`;