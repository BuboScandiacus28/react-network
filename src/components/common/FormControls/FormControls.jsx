import React from 'react';
import Style from './FormControls.module.css';

export const FormControl = ({input, meta, ...props}) => {
    
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${Style.form_control} ${hasError ? Style.error : ''}`}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...props.input} {...restProps}></textarea></FormControl>
    );
};

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><input {...props.input} {...restProps}></input></FormControl>
    );
};

