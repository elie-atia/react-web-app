import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Features = (props) => {
    const {items} = props;
  return (
    <Grid container spacing={2}>
      {items.map((fonctionnalite, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              image={fonctionnalite.image}
              title={fonctionnalite.title}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {fonctionnalite.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {fonctionnalite.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Features;