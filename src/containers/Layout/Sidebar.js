import { styled } from 'baseui';


export default function Sidebar() {
  return (
    <SidebarWrapper >

    </SidebarWrapper>
  );
};

const SidebarWrapper = styled("div",{
  width: "270px",
  height: "auto",
  display: "flex",
  flexShrink: "0",
  backgroundColor: "fffff",   
  flexDirection: "column",

  "@media only screen and (max-width: 767px)": {
    // width: 'calc(100% - 65px)',
    width: "auto",
    padding: "0",
    height: "100%",
  }  
});
