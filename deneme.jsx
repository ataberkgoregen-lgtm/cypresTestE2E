import { useState } from "react";

const initialForm = {
  name: "",
};

export default function ataberk() {
  const [isim, setIsim] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    mail: false,
    password: false,
    terms: false,
  });

  function handleChange(event) {
    const { value, name } = event.target;
    value = type == checkbox ? event.target.checked : value;

    setIsim({ ...isim, [name]: value });

    if (isim == name) {
      setErrors({ ...errors, [name]: value });
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="texture">Ataberking</label>
        <input
          id="texture"
          name="isim"
          type="text"
          placeholder="lütfen sayilar giriniz"
          value={isim}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}
