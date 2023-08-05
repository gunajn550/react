import { createTheme } from '@mui/material/styles';

const updatetheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#008584',
            main: '#00596F',
            dark: '#023047',
            contrastText: '#fff',
          },
          secondary: {
            light: '#FB4B79',
            main: '#FB1F58',
            dark: '#AF153D',
            contrastText: '#fff',
          },
          Error: {
            light: '#',
            main: '#F44336',
            dark: '#',
            contrastText: '#fff',
          },
          Warning: {
            light: '#',
            main: '#FF9800',
            dark: '#',
            contrastText: '#fff',
          },
          Success: {
            light: '#4CAF50',
            main: '#4CAF50',
            dark: '#4CAF50',
            contrastText: '#fff',
          },
          Info: {
            light: '#',
            main: '#FF9800',
            dark: '#',
            contrastText: '#fff',
          },
          Divider: {
            light: '#',
            main: '#cccccc',
            dark: '#',
            contrastText: '#fff',
          },
      },
      shape: {
        borderRadius: 4,
      },
      props: {
        MuiTooltip: {
          arrow: true,
        },
      },
      typography: {
        button: {
          lineHeight: 1.8,
          fontSize: 14,
        },
        caption: {
          fontSize: 12,
        },
        fontWeightLight: 400,
        fontSize: 14,
        htmlFontSize: 14,
      },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '14px',
          },
        },
      },
    },
  });

  export default updatetheme;