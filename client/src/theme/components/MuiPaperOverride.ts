import { ComponentThemeFn } from '../types';

export const MuiPaperOverride: ComponentThemeFn['MuiPaper'] = (theme) => {
  return {
    defaultProps: {},
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.app.bg,
        "& table": {
          padding: "10px",
          "& th": {
            backgroundColor: theme.palette.app.bg,
            "& .MuiButtonBase-root": {
              "&:hover": {
                color: theme.palette.primary.main,
              }
            }
          }
        }
        // '&.header':{
        //     backgroundColor: theme.palette.popup.header,
        // },
        // backgroundColor: theme.palette.panel.bgContent,
        // borderRadius: '1px !important',
        // borderColor: theme.palette.panel.border,
        // borderStyle: 'solid',
        // borderWidth: '0.1px',
        // boxShadow: 'none',
        // color: 'text.dark',
      },
    },
    variants: [],
  };
};
