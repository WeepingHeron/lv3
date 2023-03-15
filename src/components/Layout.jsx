import React from "react";
import styled from "styled-components";

const Layout = ({ children, ...restProps}) => {
    return <StContainer {...restProps}>{children}</StContainer>;
};

export default Layout;

const StContainer = styled.div`
    display: flex;
    flex-direction: ${({ row = 'row'}) => (row ? 'row' : 'column')};
    gap: ${({ gap }) => `${gap}`};
`;