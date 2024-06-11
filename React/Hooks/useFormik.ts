import { useFormik as useFormikOfficial, FormikConfig, FormikProps, FormikTouched } from 'formik';
import isEmpty from 'lodash/isEmpty';
import { useEffect } from 'preact/hooks';

const useFormik = <Values extends Record<string, unknown>>(
  config: FormikConfig<Values>,
  currentLanguage: string,
): FormikProps<Values> => {
  const formik = useFormikOfficial(config);

  useEffect(() => {
    if (isEmpty(formik.touched)) {
      return;
    }
    const errorKeys = Object.keys(formik.errors);
    const newTouched = errorKeys.reduce((acc, key) => {
      if (formik.touched[key as keyof typeof formik.touched]) {
        return { ...acc, [key]: true };
      }
      return acc;
    }, {} as FormikTouched<Values>);

    formik.setTouched(newTouched);
  }, [currentLanguage, formik.errors, formik.touched, formik.setTouched]);

  return formik;
};

export default useFormik;
