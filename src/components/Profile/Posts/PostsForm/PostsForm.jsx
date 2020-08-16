import React from 'react';
import Style from './PostsForm.module.css';
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthTh} from '../../../../utils/validators/validator';
import {Textarea} from '../../../common/FormControls/FormControls';

const maxLength10 = maxLengthTh(10);

const PostsForm = (props) => {
    return (
        <form className={Style.form} onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLength10]} name={"textPosts"} component={Textarea} className={Style.input} placeholder="ваша лѣтопись..."></Field>
            <button className={Style.submit}>Высѣчь ​рꙋны​</button>
        </form>
    );
};

const PostsReduxForm = reduxForm({
    form: "posts"
})(PostsForm);

export default PostsReduxForm;