import { FC } from 'react';
import { Button, FormInput, FormTextarea } from '@ui';
import { Formik, Form, FieldArray } from 'formik';
import { INPUT_NAMES, EMPTY_GROUP } from './constants';
import { SheetFormProps, SheetFormValues } from './types';
import styles from './styles.module.scss';

export const SheetForm: FC<SheetFormProps> = ({ initialValues, onSubmit, submitButtonLabel }) => {
  return (
    <Formik<SheetFormValues> initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <FormInput name={INPUT_NAMES.name} placeholder='name' className={styles.input} />
        <FormTextarea
          name={INPUT_NAMES.description}
          placeholder='description'
          className={styles.input}
        />
        <FieldArray name={INPUT_NAMES.groups}>
          {({ remove, push, form }) => (
            <div>
              <h4>Groups</h4>
              <Button type='button' onClick={() => push(EMPTY_GROUP)}>
                Add group
              </Button>
              <div>
                {form.values[INPUT_NAMES.groups]?.map((group, index) => (
                  <div key={index}>
                    <FormInput
                      name={`${INPUT_NAMES.groups}.${index}.name`}
                      placeholder='name'
                      className={styles.input}
                    />
                    <Button type='button' onClick={() => remove(index)}>
                      x
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </FieldArray>
        <Button type='submit' primary className={styles.submitButton}>
          {submitButtonLabel}
        </Button>
      </Form>
    </Formik>
  );
};
