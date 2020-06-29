import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange,label,...otherProps}) => (
    <div className='group'>
        {/* 下面的 {...otherProps}不能丢！*/}
        <input className='form-input' onChange={handleChange} {...otherProps}></input>
        {
            label ? 
            (
                <label className={`${otherProps.value.length?'shrink':''} form-input-label`}>
                    {label}
                </label>
            )
            : null
        }
    </div>
)
export default FormInput