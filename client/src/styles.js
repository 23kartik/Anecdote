import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(https://media.istockphoto.com/photos/abstract-luxurious-polygonal-black-background-with-gold-accents-frame-picture-id1249749650?b=1&k=20&m=1249749650&s=170667a&w=0&h=iz5G9XEqoN8KL7YA2diq8sao7TR7ltulZ3OZ1UKDEbM=)`,
      
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
        border: '1px solid antiquewhite',
        borderRadius: '25px!important' 
    },
}));
