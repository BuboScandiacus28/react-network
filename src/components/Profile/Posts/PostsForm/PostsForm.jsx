import React from 'react';
import Style from './PostsForm.module.css';
import {reduxForm} from 'redux-form';
import {requiredField, maxLengthTh} from '../../../../utils/validators/validator';
import {Textarea, createField} from '../../../common/FormControls/FormControls';

const maxLength10 = maxLengthTh(10);

const PostsForm = ({handleSubmit}) => {
    return (
        <form className={Style.form} onSubmit={handleSubmit}>
            {createField([requiredField, maxLength10], Textarea, "textPosts", "ваша лѣтопись...", {className: Style.input})}
            <button className={Style.submit}>Высѣчь ​рꙋны​</button>
        </form>
    );
};

const PostsReduxForm = reduxForm({
    form: "posts"
})(PostsForm);

export default PostsReduxForm;