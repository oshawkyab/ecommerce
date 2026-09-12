import { Heading } from '@/components/eCommerce'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { signInSchema, type SignInTypes } from '@/valiations'
import Input from '@/components/forms/Input/Input'


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInTypes>({ mode: "onBlur", resolver: zodResolver(signInSchema) })

  const submit: SubmitHandler<SignInTypes> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Heading title='User Login' />
      <Row>
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
            >
              Submit
            </Button>

          </Form>

        </Col>
      </Row>
    </>
  )
}

export default Login