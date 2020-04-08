import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grey from "@material-ui/core/colors/grey";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Teal from '@material-ui/core/colors/teal';
import { Button, FormGroup, FormControl, FormControlLabel } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
    root: {
        //backgroundColor: Grey[900],
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(5),
        height: '100vh',
        minWidth: '100vw',
        maxWidth: '100vw',
        //paddingTop: '10%',
        '& > *': {
            //margin: theme.spacing(1),
            width: '65vw',
            maxWidth: '65vw',
            minWidth: '65vw',
            height: theme.spacing(100),
        },
    },
    loginArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: Grey[300],
    },
    textGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: theme.spacing(50),
        spacing: theme.spacing(5),
    },
    textField: {
        marginTop: theme.spacing(3),
        color: Teal[300],
        alignSelf: 'left',

        '& label.Mui-focused': {
            color: Teal[300],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: Teal[300],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: Grey[700],
                color: Grey[100],
            },
            '&:hover fieldset': {
                borderColor: Teal[300],
            },
            '&.Mui-focused fieldset': {
                borderColor: Teal[700],
            },
        },
    },
    formControl: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

function LoginWindow(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        try {
            props.history.push("/home");
        } catch (e) {
            alert(e.message);
        }
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <Grid container xs={12} className={classes.root}>
            <Paper elevation={4} className={classes.loginArea}>
                <Grid container xs={11} className={classes.textGrid}>
                    <Typography variant='title' color='secondary'>
                        <Box fontSize={24} fontWeight='bold' letterSpacing={8}>WHITEBOARD</Box>
                        <Typography variant='subtitle2' color='secondary'>
                            <Box fontStyle='italic' fontSize={18}>"It's not Blackboard"</Box>
                        </Typography>
                    </Typography>
                    <form className={classes.textField} onSubmit={handleSubmit} noValidate autoComplete={"off"}>
                        <TextField
                            variant={"outlined"}
                            margin={"normal"}
                            required
                            fullWidth
                            id={"email"}
                            label={"Email"}
                            name={"email"}
                            autoComplete={"email"}
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            block
                            disabled={!validateForm()}
                        >
                            Sign In
                        </Button>
                        {/*<FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                            <Input id="component-outlined" value={email} onChange={handleChange} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-outlined">Password</InputLabel>
                            <Input id="component-outlined" value={password} onChange={handleChange} />
                        </FormControl>*/}
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default LoginWindow;