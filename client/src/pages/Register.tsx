import { Heading } from "@/components/eCommerce"
import Input from "@/components/forms/Input/Input"
import useChekEmailAvailability from "@/hooks/useChekEmailAvailability"
import { signUpSchema, type TSignUpFields } from "@/valiations"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useForm, type SubmitHandler } from "react-hook-form"


const Register = () => {
  const { register, trigger, handleSubmit, getFieldState, formState: { errors } } = useForm<TSignUpFields>({ mode: "onBlur", resolver: zodResolver(signUpSchema) })

  const { checkEmailAvailability, resetEmailAvailability, emailAvailabilityStatus, enterdEmail } = useChekEmailAvailability()

  const registerSubmit: SubmitHandler<TSignUpFields> = (data) => {
    console.log(data)
  }

  const onBlurEmailAddress = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email")
    const value = e.target.value
    const { invalid, isDirty } = getFieldState("email")

    if (isDirty && !invalid && enterdEmail !== value) {
      // checking
      checkEmailAvailability(value);
    }

    if (enterdEmail && invalid) {
      resetEmailAvailability()
    }

  }

  return (
    <>
      <Heading title="User Registeration" />
      <Row className="mt-12!">
        <Col md={{ span: 6, offset: 3 }}>

          <Form onSubmit={handleSubmit(registerSubmit)}>

            <Input
              label="First Name"
              name="firstName"
              error={errors.firstName?.message as string}
              register={register}
            />

            <Input
              label="Last Name"
              name="lastName"
              error={errors.lastName?.message as string}
              register={register}
            />

            <Input
              label="Email Address"
              checkingText={emailAvailabilityStatus === "checking" ? "we 're checking the entered email to make sure that email aleardy exist or not" : ""}
              successText={emailAvailabilityStatus === "available" ? "this email is available to use" : ""}
              name="email"
              error={errors.email?.message ? errors.email?.message : emailAvailabilityStatus === "notAvailable" ? "This email address is aleady exist" : emailAvailabilityStatus === "faild" ? "Wrong from server" : ""}
              disabled={emailAvailabilityStatus === "checking" ? true : false}
              register={register}
              onBlur={onBlurEmailAddress}
            />

            <Input
              label="Password"
              name="password"
              error={errors.password?.message as string}
              register={register}
              type="password"
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              error={errors.confirmPassword?.message as string}
              register={register}
              type="password"
            />

            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
            >
              Submit
            </Button>

          </Form>

        </Col>
      </Row >
    </>
  )
}

export default Register