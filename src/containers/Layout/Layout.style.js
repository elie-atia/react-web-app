import { styled } from 'baseui';

export const LayoutWrapper = styled('div', () => ({
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
}));


export const ContentWrapper = styled('div', {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#fffff',
});

export const ContentInnerWrapper = styled('div', () => ({
    width: '100%',
    height: 'auto',
    padding: '45px 30px',
    overflow: 'hidden',
    overflowY: 'auto',
    backgroundColor: "red",

    '@media only screen and (max-width: 767px)': {
        padding: '45px 15px',
    },
}));