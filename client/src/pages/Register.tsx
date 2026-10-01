import { Heading } from "@/components/eCommerce"
import Input from "@/components/forms/Input/Input"
import useRegister from "@/hooks/useRegister"
import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import { Navigate } from "react-router-dom"



const Register = () => {

  const { loading, error, accessToken, registerSubmit, register, errors, handleSubmit, emailAvailabilityStatus, onBlurEmailAddress } = useRegister()

  if (accessToken) {
    return <Navigate to={"/"} />
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
              disabled={emailAvailabilityStatus === "checking" || loading === "pending"}
            >
              {loading === "pending" ? <>
                <Spinner animation="border" size="sm" /> Loading...
              </> : "submit"}
            </Button>

            {error && (
              <p className="text-sm text-red-800">{error}</p>
            )}

          </Form>

        </Col>
      </Row >
    </>
  )
}

export default Register