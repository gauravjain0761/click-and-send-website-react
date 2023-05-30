import { Popover, styled } from "@mui/material";

export const CustomPopOver = styled(Popover)(({ theme }) => ({
    top: "25px !important",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        '& .MuiPopover-paper': {
            top: "32px !important",
            left: "0px !important",
            right: "0px",
            bottom: "0px",
            maxWidth: "100%",
            maxHeight: "fit-content",
        }
    },
    borderRadius: '16px !important',
}));