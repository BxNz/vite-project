import { createTheme } from "@mui/material/styles";



const theme = createTheme({
    palette:{
        primary:{
            main:"#07004D",//set color
        },
        secondary:{
            main:"#E88A90",
        },
        background:{
            default:"#F3DFBF",
        },

    },
    breakpoints:{
        values: {
            xs:0,
            sm:600,
            md:800,
            lg:1200,
            xl:1920,

        },
    },
}) ;

export default theme;

