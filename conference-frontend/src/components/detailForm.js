import React, { useEffect, useState } from "react";

const detailForm = (initialFieldValues,setCurrentId) => {

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetDetailForm =() =>{
        setValues(initialFieldValues)
        setErrors({})
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetDetailForm
    };
}

export default detailForm;