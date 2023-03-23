import Sidebar from './Sidebar';
import { styled } from 'baseui';
import { LayoutWrapper, ContentWrapper, ContentInnerWrapper } from './Layout.style';

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


