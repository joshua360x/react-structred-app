import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formInState, setFormInState] = useState(inputs);

  const handleFormToBeChange = (event) => {
    const { name, value } = event.target;
    setFormInState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return { formInState, handleFormToBeChange };
}
