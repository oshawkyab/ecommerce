import { Form } from 'react-bootstrap'
import type { FieldValues, Path, UseFormRegister } from "react-hook-form"


type InputProps<FieldValue extends FieldValues> = {
   name: Path<FieldValue>;
   label: string;
   type?: "text" | "password";
   error: string;
   register: UseFormRegister<FieldValue>;
   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
   successText?: string
   checkingText?: string;
   disabled?: boolean
}

const Input = <FieldValue extends FieldValues>({ error, register, label, type = "text", name, disabled, onBlur, successText, checkingText }: InputProps<FieldValue>) => {

   const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
         onBlur(e)
         register(name).onBlur(e)
      } else {
         register(name)
      }
   }

   return (
      <Form.Group className="mb-3 relative">
         <Form.Label>{label}</Form.Label>
         <Form.Control
            isInvalid={!!error}
            {...register(name)}
            onBlur={onBlurHandler}
            type={type}
            isValid={!!successText}
            disabled={disabled}
         />

         <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
         {checkingText && <Form.Text muted>{checkingText}</Form.Text>}
         <Form.Control.Feedback type="valid">{successText}</Form.Control.Feedback>

      </Form.Group>
   )
}

export default Input