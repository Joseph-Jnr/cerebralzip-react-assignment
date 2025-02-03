import { PageHelmet } from '@/components'
import { Auth } from '@/services/api'
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  rem,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useState } from 'react'
import { useForm } from '@mantine/form'
import * as yup from 'yup'
import { yupResolver } from 'mantine-form-yup-resolver'
import { notifications } from '@mantine/notifications'
import { IconX } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const loginSchema = yup.object().shape({
  username: yup.string().required('Enter username'),
  password: yup.string().min(6, 'Invalid password'),
})

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: yupResolver(loginSchema),
    validateInputOnChange: true,
    transformValues: (values) => ({
      ...values,
    }),
  })

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true)
    try {
      const res = await Auth(values)

      // Set token and log user in
      console.log(res)
      //router.push('/dashboard')
    } catch (error) {
      console.log(error)
      notifications.show({
        icon: <IconX style={{ width: rem(20), height: rem(20) }} />,
        withCloseButton: false,
        color: 'red',
        title: 'Authentication failed!',
        message: 'Incorrect username or password. Try again',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHelmet title="Login" />
      <Container size={420} my={40}>
        <Title ta="center">Welcome back!</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor
            size="sm"
            component="button"
            onClick={() => navigate('/dashboard')}
          >
            See dashboard 👀
          </Anchor>
        </Text>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Username"
              placeholder="josephjnr"
              required
              {...form.getInputProps('username')}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps('password')}
            />
            <Group justify="space-between" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              disabled={!form.isValid() || isSubmitting}
              loading={isSubmitting}
              fullWidth
              radius="md"
              mt="xl"
            >
              Sign in
            </Button>
          </Paper>
        </form>
      </Container>
    </>
  )
}

export default Login
