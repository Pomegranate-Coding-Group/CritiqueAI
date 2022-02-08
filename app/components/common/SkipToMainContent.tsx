import { styled } from '@stitches-config';

export const SkipToMainContent = styled('div', {
    position: "absolute",
    left: "-999em",
    '&:focus, &:active': {
        position: "relative",
        overflow: "auto",
        display: "inline-block"
    },
    '&:focus': {
        color: "white",
        border: "none"
    }
});