import { Heading } from '@/components/eCommerce'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import Input from '@/components/forms/Input/Input'
import { Navigate } from 'react-router-dom'
import useLogin from '@/hooks/useLogin'


const Login = () => {

  const { register, accessToken, searchParams, loading, error, errors, handleSubmit, submit } = useLogin()

  if (accessToken) {
    return <Navigate to={"/"} />
  }

  return (
    <>
      <Heading title='User Login' />
      <Row className='w-full'>
        {searchParams.get("status") === "email_created" ? (
          <div className='p-4 w-1/2! mx-auto border border-green-600! bg-green-200 mb-4 text-green-800 rounded flex items-center justify-center'><p>The account has been created. Login Now</p></div>
        ) : null}
        <Col md={{ span: 6, offset: 3 }}>

          <Form onSubmit={handleSubmit(submit)}>

            <Input
              name='email'
              label='Email Address'
              register={register}
              error={errors.email?.message as string}
            />

            <Input
              name='password'
              label='Password'
              register={register}
              type='password'
              error={errors.password?.message as string}
            />

            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={loading === "pending"}
            >
              {loading === "pending" ? <>
                <Spinner animation='border' size='sm' /> Loading...
              </> : "Submit"}
            </Button>
            {error && (
              <p className='text-sm text-red-800 mt-2'>{error === "Cannot find user" ? "email or password is invalid" : error}</p>
            )}
          </Form>

        </Col>
      </Row>
    </>
  )
}

export default Login