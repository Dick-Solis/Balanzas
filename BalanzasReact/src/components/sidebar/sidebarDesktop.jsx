import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";
import { DataOptions } from './dataSidebar';

export function SidebarComponentDesktop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <div style={{ width: isVisible ? '87%' : '100%' }}>
          {/* Contenido principal */}
          <ToggleButton onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
          </ToggleButton>
        </div>
      </Wrapper>
    
      <SidebarContainer isVisible={isVisible}>
        <ContentData>
          <ListStyled>
            {DataOptions.map((option) => (
              <ListItem key={option.title}>
                <NavLinkStyled to={option.path}>
                  {option.icon}
                  {option.title}
                </NavLinkStyled>

                {option.subNav && (
                  <ul>
                    <SubListItem key={option.title}>
                      <SubNavTitle>{option.subNavTitle || ''} {option.subNav.map((subOption) => (
                        <SubListItem key={subOption.title}>
                          <NavLinkStyled to={subOption.path}>
                            {subOption.title}
                          </NavLinkStyled>
                        </SubListItem>
                      ))}</SubNavTitle>
                    </SubListItem>
                  </ul>
                )}
              </ListItem>
            ))}
          </ListStyled>
        </ContentData>
      </SidebarContainer>
    </>
  );
}


const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const SidebarContainer = styled.nav`
  position: absolute;
  width: ${({ isVisible }) => (isVisible ? '18vw' : '1')};
  user-select: none;
  flex-direction: column;
  height: 100vh;
  transition: width 0s linear, opacity 0.1s ease, transform 0.1s ease;
  z-index: 10;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '100%')});
  background-color: ${({ isVisible }) => (isVisible ? '#FFF452' : 'transparent')};
  border: ${({ isVisible }) => (isVisible ? '1px solid black' : 'none')};
  overflow-y: auto;

`;

const ToggleButton = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  z-index: 15;
`;
const ListStyled = styled.ul`
  margin-top: 10px;

`;

const ListItem = styled.li`
color: black;
  list-style: none;
  font-family: 'TuFuenteLlamativa', sans-serif; /* Reemplaza 'TuFuenteLlamativa' con la fuente deseada */
  margin-bottom: 38px;
`;

const SubListItem = styled.li`
  list-style: none;
  font-family: 'TuFuenteLlamativa', sans-serif; /* Reemplaza 'TuFuenteLlamativa' con la fuente deseada */
  margin-top: 20px;
  `;

const NavLinkStyled = styled(NavLink)`
margin-right: 5px;
  color: #000000;
  font-size: 20px;
  text-decoration: none;
`;
const SubNavTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: red;
  margin-bottom: 5px;
`;
const ContentData = styled.div`
color:black;
  height: 30vh;
  transform: translateY(32%);
`;
