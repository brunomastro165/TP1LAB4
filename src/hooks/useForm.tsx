import { ChangeEvent, useState } from "react";

interface FormValues {
    [key: string]: string | number | boolean | Date;
}

export const useForm = <T extends FormValues>(initialValue: T) => {
    const [values, setValues] = useState<T>(initialValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setValues({ ...values, [`${name}`]: value });
    };

    const resetForm = () => {
        setValues(initialValue);
    };

    return {
        values,
        handleChange,
        resetForm,
    };
};
