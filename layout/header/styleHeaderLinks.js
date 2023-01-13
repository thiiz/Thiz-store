import styled from 'styled-components';

const NavMenuList = styled.ul`
  column-gap: 1.963em;
  list-style-type: none;
  display: flex;
`;

const NavMenuListItem = styled.li`
  position: relative;

  &:before{
  content: '';
  position: absolute;
  z-index: -1;
  width: 0%;
  height: 100%;
  border-bottom: 3px solid #0099ff;
  transition: 250ms ease-in-out;
  overflow: hidden;
  }
  &:hover:before{
    width: 100%;
  }
`;

const NavMenuListItemLink = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  padding: .5em 0;
  cursor: pointer;
  font-size: 1.353em;
  font-weight: bold;
  ${(props) => {
    switch (props.active) {
      case 'active':
        return `color: inherit;`
      default: {
        return `color: #4e4e4e;`
      }
    }
  }}
  
`;

export { NavMenuList, NavMenuListItem, NavMenuListItemLink }