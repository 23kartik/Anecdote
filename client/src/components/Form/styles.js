import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            background: '#D3D3D3',
            
        },
    },
    paper: {
        padding: theme.spacing(2),
        backgroundImage: `url(https://www.enjpg.com/img/2020/dark-academia-11.jpg)`,
       height:'520px',
        borderRadius:'20px'

       
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
       
       
       
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
        color:'#D3D3D3'
       
    },
    buttonSubmit: {
        marginBottom: 15,

        
    },
}));