import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';


const lightColor = 'rgba(255, 255, 255, 0.7)';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar component="div" color="primary" elevation={0} sx={{ zIndex: 0 }}
        >
          <Toolbar>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                  Learning Guardians
                </Typography>
              </Grid>
              <Grid>
                <Tabs value={0} textColor="inherit" centered>
                  <Tab label="Mi Perfil" />
                  <Tab label="Revisar Materias" />
                  <Tab label="Mis Extracurriculares" />
                </Tabs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
