import React,{useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';

import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Owl from './images/Owl.webp';
import useStyles from './styles';


const App = () => {

    const [currentId,setCurrentId] = useState(null);
    const classes = useStyles();

    //defining the dispatch
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);

    return(
        <container maxWidth = "lg">
            <AppBar className = {classes.appBar} position="static" color = "inherit">
                <Typography variant = "h2" align = "center">Memories</Typography>
                <img className = {classes.image} src = {Owl} alt ="memories"  width = "100" height = "100"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing = {3}>
                        <Grid item xs={12} sm = {7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm = {4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </container>
    )
}

export default App;