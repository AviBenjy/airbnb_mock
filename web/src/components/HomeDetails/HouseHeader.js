/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

class HouseHeader extends React.Component {
    render() {
        return (
            <NavBar>
                <div css={{display: 'flex', alignItems: 'center'}}>
                    <Logo viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
                        <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
                    </Logo>

                    <Search>
                        <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" css={{margin: '0 5px', height: '20px', width: '20px', display: 'block', fill: 'currentColor'}}>
                            <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
                        </svg>

                        <Input type="text" placeholder="Search"/>
                    </Search>
                </div>

                <Nav>
                    <NavItem> Become a host </NavItem>
                    <NavItem> Help </NavItem>
                    <NavItem> Sign up </NavItem>
                    <NavItem> Log in </NavItem>
                </Nav>
            </NavBar>
        );
    }
}


const NavBar = styled.div`
    position: fixed;
    top: 0;
    color: #474747;
    font-weight: 600;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #EBEBEB;
`
const Logo = styled.svg`
    display: inline-block;
    font-size: 34px;
    color: #008489;
    height: 1em;
    width: 1em; 
    display: block;
    fill: currentcolor;
    margin: 24px;
    cursor: pointer;
`
const Nav = styled.ul`
    align-self: flex-start;
    height: 100%;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const NavItem = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 2px 8px 0;
    margin: 0 8px;
    list-style: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid #474747;
    }
`
const Search = styled.div`
    width: 460px;
    display: flex;
    align-items: center;
    transition: box-shadow 0.2s ease-in;
    border: 1px solid #EBEBEB;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    height: 48px;
    padding: 0 12px;
    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 4px 12px rgba(26, 26, 29, 0.08);
    }
`
const Input = styled.input`
    border: none;
    text-overflow: ellipsis;
    font-weight: 800;
    font-size: 17px;
    outline: none;
`
export default HouseHeader;