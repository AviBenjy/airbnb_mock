/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import {Link} from 'react-router-dom'


class Header extends React.Component {

    state = {
              country: 'France',
              checkIn: '',
              checkOut: '',
              guests: 1,
            }
        
    onChange = ({name, value}) => {
      this.setState({[name]: value})
    }

    render() {
        const {country, guests, checkIn, checkOut} = this.state
        return (
            <HeaderContainer>
                <Shadow/>

                <NavBar>
                    <Logo viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
                        <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
                    </Logo>

                    <Nav>
                        <NavItem> Become a host </NavItem>
                        <NavItem> Help </NavItem>
                        <NavItem> Sign up </NavItem>
                        <NavItem> Log in </NavItem>
                    </Nav>
                </NavBar>

                <SearchContainer>
                    <HeaderTitle> Plan your next trip </HeaderTitle>

                    <SearchNav>
                        <SearchNavItem> Explore </SearchNavItem>
                        <SearchNavItem css={{borderBottom: '2px solid #ffffff'}}> Homes </SearchNavItem>
                        <SearchNavItem> Experiences </SearchNavItem>
                        <SearchNavItem> Restaurants </SearchNavItem>
                    </SearchNav>

                    <SearchBar>
                        <SearchFields>

                            <SearchField css={{width: '25%', borderRadius: '5px 0 0 5px'}}>
                                <FieldTitle> COUNTRY, CITY, ADDRESS </FieldTitle>
                                <FieldInput name='country' onChange={e => this.onChange(e.target)} placeholder='France'/>
                            </SearchField>

                            <SearchField css={{width: '50%', display: 'flex'}}>

                                <SearchField css={{width: '50%', padding: '0 20px 0 0', background: 'transparent'}}>
                                    <FieldTitle> CHECK IN </FieldTitle>
                                    <FieldInput type='date' name='checkIn' onChange={e => this.onChange(e.target)} placeholder='dd/mm/yyyy' />
                                </SearchField>

                                <SearchField css={{width: '50%', padding: '0 0 0 20px', background: 'transparent', border: 'none'}}>
                                    <FieldTitle> CHECK OUT </FieldTitle>
                                    <FieldInput type='date' name='checkOut' onChange={e => this.onChange(e.target)} placeholder='dd/mm/yyyy'/>
                                </SearchField>

                            </SearchField>

                            <SearchField css={{width: '25%', borderRadius: '0 5px 5px 0'}}>
                                <FieldTitle> GUESTS </FieldTitle>
                                <FieldInput name='guests' onChange={e => this.onChange(e.target)} placeholder='1'/>
                            </SearchField>

                        </SearchFields>

                        <Link to={`/homes?country=${country}&guests=${guests}&checkIn=${checkIn}&checkOut=${checkOut}`}>
                            <SearchButton onClick={this.handleClick}>   
                                <SearchIcon xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" viewBox="0 0 16 16" focusable="false">
                                    <path d="m 2.5 7 c 0 -2.5 2 -4.5 4.5 -4.5 s 4.5 2 4.5 4.5 s -2 4.5 -4.5 4.5 s -4.5 -2 -4.5 -4.5 m 13.1 6.9 l -2.8 -2.9 c 0.7 -1.1 1.2 -2.5 1.2 -4 c 0 -3.9 -3.1 -7 -7 -7 s -7 3.1 -7 7 s 3.1 7 7 7 c 1.5 0 2.9 -0.5 4 -1.2 l 2.9 2.8 c 0.2 0.3 0.5 0.4 0.9 0.4 c 0.3 0 0.6 -0.1 0.8 -0.4 c 0.5 -0.5 0.5 -1.2 0 -1.7"/>
                                </SearchIcon>
                            </SearchButton>
                        </Link>
                    </SearchBar>

                </SearchContainer>
            </HeaderContainer>
        );
    }
}


export default Header;


const HeaderContainer = styled.header`
    height: 755px;
    width: 100vw;
    background-image: url("https://a0.muscache.com/4ea/air/r:w775-h518-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg");
    background-size: cover;
    background-position: center;
`
const Shadow = styled.div`
    position: absolute;
    top: 0px;
    height: 30%;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
`
const NavBar = styled.div`
    position: absolute;
    top: 0;
    color: #ffffff;
    font-weight: 600;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.svg`
    display: inline-block;
    vertical-align: middle;
    font-size: 34px;
    height: 1em;
    width: 1em; 
    display: block;
    fill: currentcolor;
    margin: 24px;
    cursor: pointer;
`
const Nav = styled.ul`
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
        border-bottom: 2px solid #ffffff;
    }
`
const SearchContainer = styled.div`
    margin: 0 auto;
    position: relative;
    top: 120px;
    padding: 0 24px;
    max-width: 1280px;
`
const HeaderTitle = styled.h1`
    font-size: 50px;
    width: 520px;
    color: #ffffff;
    padding: 0 0 24px 24px;
    text-shadow: 0px 6px 32px #484848;
    line-height: 60px;
    font-weight: bold;
`
const SearchNav = styled.div`
    height: 100%;
    width: 980px;
    white-space: nowrap;
    margin: 0 auto;
    border-bottom: 1px solid #EBEBEB;
    display: flex;
    align-items: center;
`
const SearchNavItem = styled.div`
    position: relative;
    bottom: -1px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    font-size: 18px;
    line-height: 26px;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    padding: 24px 0 12px 0;
    font-weight: 800;
    margin-right: 40px;
    color: #ffffff;
    text-shadow: 0 0 1px #000000;
`
const SearchBar = styled.div`
    width: 980px;
    margin: auto;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SearchButton = styled.button`
    width: 76px;
    height: 76px;
    padding: 23px;
    color: #ffffff;
    background-image: url('https://www.treehugger.com/static/images/signup-leaf.svg') , linear-gradient(-45deg,#00484B 0%,#006A70 100%);
    border: none;
    border-radius: 5px;
    transition: 0.3s;
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(0.85);
    }
`
const SearchIcon = styled.svg`
    height: 2em;
    width: 2em;
    display: block;
    fill: currentColor;
`
const SearchFields = styled.div`
    width: calc(100% - 88px);
    box-shadow: 0px 10px 36px rgba(0,0,0,0.65);
    border-radius: 5px;
    display: flex;
`
const SearchField = styled.div`
    padding: 20px;
    background: rgba(255, 255, 255, 0.88);
    border-right: 1px solid #ebebeb;
`
const FieldTitle = styled.div`
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    padding-bottom: 8px;
    font-size: 12px;
    font-weight: 800;
    line-height: 1.33em;
    color: #484848;
`
const FieldInput = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 18px;
    outline: none;
    color: #767676;
`




// class Header extends React.Component {

//     state = {
//       country: 'France',
//       checkIn: '',
//       checkOut: '',
//       guests: 1,
//     }

//     onChange = ({name, value}) => {
//       this.setState({[name]: value})
//     }

//     render() {
//         const {country, guests, checkIn, checkOut} = this.state
//         return (
//             <HeaderContainer>
//                 <Shadow/>
//                 <NavBar>
//                     <Logo viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
//                         <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
//                     </Logo>

//                     <Nav>
//                         <NavItem> Become a host </NavItem>
//                         <NavItem> Help </NavItem>
//                         <NavItem> Sign up </NavItem>
//                         <NavItem> Log in </NavItem>
//                     </Nav>
//                 </NavBar>

//                 <SearchContainer>
//                     <HeaderTitle> Plan your next trip </HeaderTitle>

//                     <SearchNav>
//                         <SearchNavItem> Explore </SearchNavItem>
//                         <SearchNavItem css={{borderBottom: '2px solid #ffffff'}}> Homes </SearchNavItem>
//                         <SearchNavItem> Experiences </SearchNavItem>
//                         <SearchNavItem> Restaurants </SearchNavItem>
//                     </SearchNav>

//                     <SearchBar>
//                         <SearchFields>

//                             <SearchField css={{width: '25%', borderRadius: '5px 0 0 5px'}}>
//                                 <FieldTitle> COUNTRY, CITY, ADDRESS </FieldTitle>
//                                 <FieldInput name='country' onChange={e => this.onChange(e.target)} placeholder='France'/>
//                             </SearchField>

//                             <SearchField css={{width: '50%', display: 'flex'}}>

//                                 <SearchField css={{width: '50%', padding: '0 20px 0 0', background: 'transparent'}}>
//                                     <FieldTitle> CHECK IN </FieldTitle>
//                                     <FieldInput type='date' name='checkIn' onChange={e => this.onChange(e.target)} placeholder='dd/mm/yyyy' />
//                                 </SearchField>

//                                 <SearchField css={{width: '50%', padding: '0 0 0 20px', background: 'transparent', border: 'none'}}>
//                                     <FieldTitle> CHECK OUT </FieldTitle>
//                                     <FieldInput type='date' name='checkOut' onChange={e => this.onChange(e.target)} placeholder='dd/mm/yyyy'/>
//                                 </SearchField>

//                             </SearchField>

//                             <SearchField css={{width: '25%', borderRadius: '0 5px 5px 0'}}>
//                                 <FieldTitle> GUESTS </FieldTitle>
//                                 <FieldInput name='guests' onChange={e => this.onChange(e.target)} placeholder='1'/>
//                             </SearchField>

//                         </SearchFields>

//                         <Link to={`/homes?country=${country}&guests=${guests}&checkIn=${checkIn}&checkOut=${checkOut}`}>
//                             <SearchButton onClick={this.handleSearch}>
//                                 <SearchIcon xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" viewBox="0 0 16 16" focusable="false">
//                                     <path d="m 2.5 7 c 0 -2.5 2 -4.5 4.5 -4.5 s 4.5 2 4.5 4.5 s -2 4.5 -4.5 4.5 s -4.5 -2 -4.5 -4.5 m 13.1 6.9 l -2.8 -2.9 c 0.7 -1.1 1.2 -2.5 1.2 -4 c 0 -3.9 -3.1 -7 -7 -7 s -7 3.1 -7 7 s 3.1 7 7 7 c 1.5 0 2.9 -0.5 4 -1.2 l 2.9 2.8 c 0.2 0.3 0.5 0.4 0.9 0.4 c 0.3 0 0.6 -0.1 0.8 -0.4 c 0.5 -0.5 0.5 -1.2 0 -1.7"/>
//                                 </SearchIcon>
//                             </SearchButton>
//                         </Link>

//                     </SearchBar>

//                 </SearchContainer>
//             </HeaderContainer>
//         );
//     }
// }

// export default Header



