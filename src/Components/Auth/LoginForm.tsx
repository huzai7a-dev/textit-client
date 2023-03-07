import { Grid, TextField, Paper, Typography, Button } from '@mui/material';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../Constants/schema';

import './auth.css';
import Colors from '../../Constants/Colors';
import { Ilogin } from '../../types/auth';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const { control, handleSubmit, formState: {errors} } = useForm<Ilogin>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver:yupResolver(loginSchema)
    })

    const onSubmit:SubmitHandler<Ilogin> = (data:Ilogin) => {
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
                    <Typography color={Colors.secondary} variant='h3'>Login</Typography>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='auth_form'
                    >
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

                        <Button
                            fullWidth
                            color='secondary'
                            variant='contained'
                            type='submit'
                            style={{marginTop:'2rem'}}
                        >
                            Login
                        </Button>
                    </form>
                    <Typography style={{marginTop:'.8rem'}}>Not have an account ? <Link color={Colors.secondary} to={'/signup'}>Signup</Link></Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default LoginForm