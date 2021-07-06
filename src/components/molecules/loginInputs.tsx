import Label from "../atoms/label";
import React, { ChangeEvent } from "react";
import TextField from "../atoms/textFields";
import styled from "styled-components";
import { useState } from "react";
import Joi from "joi";
import { ButtonSubmit } from "../atoms/buttons";
import { toast } from "react-toastify";
export interface LoginFormProps {}
interface errorsObjectProps {
  email?: any;
  password?: any;
}
const LoginInput: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({} as errorsObjectProps);
  const [password, setPassword] = useState("");
  //const [errors, setErrors] = useState({});
  const schemaObj = {
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{1,30}$"))
      .min(6)
      .label("password")
      .required(),
  };
  const schema = Joi.object({
    ...schemaObj,
  });
  const validate = () => {
    const options = { abortEarly: false };

    const { error } = schema.validate({ email, password }, options);
    if (!error) return null;
    console.log({ error });

    const errors = {} as errorsObjectProps;
    type errorskey = keyof errorsObjectProps;
    for (let item of error.details)
      errors[item.path[0] as errorskey] = item.message;
    return errors;
  };
  const validateProperty = (input: string, key: keyof errorsObjectProps) => {
    const localschema = Joi.object({ [key]: schemaObj[key] });
    const { error } = localschema.validate(
      { [key]: input },
      { abortEarly: false }
    );
    console.log({ error });
    const updateErrors = errors;
    if (error) updateErrors[key] = error.details[0].message;
    else delete updateErrors[key];
    return updateErrors;
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: keyof errorsObjectProps
  ) => {
    const input = event.target.value;
    const error = validateProperty(input, key);
    setErrors(error);
    if (key === "email") setEmail(input);
    else setPassword(input);
  };
  const handleSubmit = () => {
    toast.info('🦄 Wow so easy!');
    //disabled work
    // const errors = validate();
    // setErrors(errors ? errors : ({} as errorsObjectProps));
    return;
  };

  return (
    <Div>
      <Label text="E-mail" />
      <TextField
        error={errors.email ? true : false}
        right={!errors.email && email ? true : false}
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleChange(event, "email")
        }
        type="email"
        errorText={errors.email}
      />
      <WrapLabel>
        <Label text="password" />
        <TextField
          value={password}
          error={errors.password ? true : false}
          right={!errors.password && password ? true : false}
          type="password"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, "password")
          }
          errorText={errors.password}
        />
      </WrapLabel>
      <WrapButton>
        <ButtonSubmit
          title="submit"
          onClick={() => handleSubmit()}
          disabled={validate() ? true : false}
        />
      </WrapButton>
    </Div>
  );
};

const WrapButton = styled.div`
  margin-top: 80px;
  text-align: center;
`;

const Div: React.FC = styled.div`
  text-align: left;
`;
const WrapLabel = styled.div`
  margin-top: 8px;
`;

export default LoginInput;
