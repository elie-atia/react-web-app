import React from 'react'
import {styled, useStyletron} from 'baseui';

// Base Web exports a modified version of Styletron's useStyletron function. 
// (A React Hook that returns a function for generating Styletron CSS classes).
// This modified version has access to theme variables...

// Base Web exports a modified version of Styletron's styled function. 
// (The styled function is used to create a styled component.)
// styled-components is a React-specific CSS-in-JS styling solution that creates 
// a platform for developers to write actual CSS code to style React components, 
// as well as in React Native.
// This modified version has access to theme variables.

const Sidebar = () => {
    const [css] = useStyletron();
    return (
        <SidebarWrapper className={css({
            '@media (max-width: 768px)': {
                display: 'none',
            }
        })}>
        </SidebarWrapper>
    )
}
export default Sidebar

const SidebarWrapper = styled('section', {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    maxWidth: '255px',
    height: '100vh',
    background: '#363740',
    zIndex: '1',
    overflowX: 'hidden',

});
