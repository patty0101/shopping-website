import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children,isGoogleSignIn,inverted,...otherProps}) => (
    // 下面的custom-button 不能有括号
    <button className={`${inverted?'inverted':''}${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;


