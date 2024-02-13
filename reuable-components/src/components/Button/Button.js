import React from 'react'
import PropTypes from 'prop-types';
import className from 'classnames';



const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    // ...rest  bring all the propersties of the buttons 
    ...rest
}) => {
    const classNames = className('px-1.5 py-1.5 border text-white',{
        'border-blue-600 bg-blue-500':primary,
        'border-green-600 bg-green-500':success ,
        'border-yellow-600 bg-yellow-500':warning,
        'border-red-600 bg-red-500':danger,
        'rounded-full':rounded
        // 'border-slate-600 bg-slate-500':secondary,
        // 'border-blue-600 bg-slate-500':outline,
        // 'border-blue-600 rounded-sm':rounded,

    })
 return <button {...rest} className= {classNames}> {children}</button>
}

Button.propTypes = {
    checkVariationValue : ({primary,secondary,success,warning,danger}) =>{
     const count = Number(!!primary)
     + Number(!!secondary)
     + Number(!!warning)
     + Number(!!success)
     + Number(!!danger)
     if (count > 1){
        return new Error ('Only one of primary , secondary, success, danger can be true')
    }
    },
   
}


export default Button