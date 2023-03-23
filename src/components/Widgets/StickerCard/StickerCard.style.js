import { styled } from "baseui";

export const Card = styled("div", () => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  borderRadius: "6px",
  backgroundColor: "#ffffff"
}));

export const TopInfo = styled("div", () => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "50px"
}));

export const TitleWrapper = styled("div", () => ({
  width: "calc(100% - 60px)",
  display: "flex",
  flexDirection: "column"
}));

export const Title = styled("span", {
  lineHeight: "1.2",   
  color: "dark",
  marginBottom: "10px",
});

export const SubTitle = styled("span", {
  lineHeight: "1.2",
  color: "blue",
  marginBottom: "0px",
});

export const IconBox = styled("div", {
  width: "48px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const Price = styled("span", {
  lineHeight: "1.2",
  color: "dark",
  marginBottom: "10px",
});

export const Text = styled("span", {
  lineHeight: "1.2",
  marginBottom: "50px",
});