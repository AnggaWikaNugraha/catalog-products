import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function AppCard(props : any) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const img ='https://media-exp1.licdn.com/dms/image/C560BAQHM7RAmF9fAYQ/company-logo_200_200/0/1602060260204?e=1648684800&v=beta&t=KPCrrZALsJnzKU9tDOSECfE559ZoZXsdQlqEBp6-DZ0'

  return (
    <Card sx={{ maxWidth: 345, minHeight : 270 }}>
      <CardMedia
        component="img"
        height="150"
        image={img}
        alt="Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props?.res?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props?.res?.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props?.res?.weight} gram
        </Typography>
      </CardContent>
    </Card>
  );
}