import Sidebar from './Sidebar';
import { styled } from 'baseui';


const SidedbarDesktop = styled('div', () => ({
    '@media only screen and (max-width: 1199px)': {
        display: 'none',
    },
}));

const Layout = ({ children }) => {
    return (
        <>
            <LayoutWrapper
                style={{
                    height: `calc(100vh)`,
                }}
            >
                <SidedbarDesktop>
                    <Sidebar
                        style={{
                            height: `calc(100vh)`,
                        }}
                    />
                </SidedbarDesktop>
                <ContentWrapper
                    style={{
                        width: `calc(100% )`,
                    }}
                >
                    <ContentInnerWrapper>{children}</ContentInnerWrapper>
                </ContentWrapper>
            </LayoutWrapper>
        </>
    );
};

export default Layout;


const LayoutWrapper = styled('div', () => ({
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
}));


const ContentWrapper = styled('div', {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#fffff',
});

const ContentInnerWrapper = styled('div', () => ({
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