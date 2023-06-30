import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const BlogCard = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='col-xl-4 col-lg-4 col-md-2 col-sm-1 open-sans dark mb-5 pe-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src="content.png" className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title babus">GENRE</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. subtitle here</p>
                    <small className=''>some content which might visible or not in the case of...</small>
                    <div className="text-center">
                        <button className="btn ">
                            Read Article
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
