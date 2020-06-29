import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children,isGoogleSignIn,...otherProps}) => (
    // 下面的custom-button 不能有括号
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;


