import { Grid, TextField, Paper, Typography, Button } from '@mui/material';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../Constants/schema';

import './auth.css';
import Colors from '../../Constants/Colors';
import { ISignUp } from '../../types/auth';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ISignUp>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        resolver: yupResolver(signUpSchema)
    })

    const onSubmit: SubmitHandler<ISignUp> = (data: ISignUp) => {
        console.log(data)
    }

    return (
        <Grid
            container
            className='auth_container'
            display="flex"
            justifyContent="center"
            alignItems="center"
        >

            <Grid item xs={10} md={4}>
                <Paper className='auth_form_container'>
                    <Typography color={Colors.secondary} variant='h3'>Signup</Typography>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='auth_form'
                    >

                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name='firstName'
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            {...field}
                                            fullWidth
                                            margin='dense'
                                            type='text'
                                            placeholder='First Name'
                                            color='primary'
                                            error={!!errors.firstName}
                                            helperText={errors.firstName && errors.firstName.message}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Controller
                                    name='lastName'
                                    control={control}
                                    render={({ field }) =>
                                        <TextField
                                            {...field}
                                            fullWidth
                                            margin='dense'
                                            type='text'
                                            placeholder='Last Name'
                                            color='primary'
                                            error={!!errors.lastName}
                                            helperText={errors.lastName && errors.lastName.message}
                                        />
                                    }
                                />

                            </Grid>
                        </Grid>

                        <Controller
                            name='email'
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    fullWidth
                                    margin='dense'
                                    type='text'
                                    placeholder='Email'
                                    color='primary'
                                    error={!!errors.email}
                                    helperText={errors.email && errors.email.message}
                                />
                            }
                        />

                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    fullWidth
                                    margin='dense'
                                    type='password'
                                    placeholder='Password'
                                    color='primary'
                                    error={!!errors.password}
                                    helperText={errors.password && errors.password.message}
                                />
                            }
                        />

                        <Controller
                            name='confirmPassword'
                            control={control}
                            render={({ field }) =>
                                <TextField
                                    {...field}
                                    fullWidth
                                    margin='dense'
                                    type='password'
                                    placeholder='Confirm Password'
                                    color='primary'
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword && errors.confirmPassword.message}
                                />
                            }
                        />
                        <Button
                            fullWidth
                            color='secondary'
                            variant='contained'
                            type='submit'
                            style={{ marginTop: '2rem' }}
                        >
                            Signup
                        </Button>
                    </form>
                    <Typography style={{ marginTop: '.8rem' }}>Already have an account ? <Link color={Colors.secondary} to={'/login'}>Login</Link></Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default LoginForm