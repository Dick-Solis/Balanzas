import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { DataOptions } from './dataSidebar';
import Logo from "../../assets/logo1.png"

export function SidebarComponentDesktop() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedTitles, setExpandedTitles] = useState({});

  const toggleSidebar = () => {
    setIsVisible(prev => !prev);
  };

  const toggleSubNav = (title) => {
    setExpandedTitles(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
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
          <ContentIMG>
            <LogoImage src={Logo} alt="Logo description" />
          </ContentIMG>
          <ListStyled>
            {DataOptions.map((option) => (
              <ListItem key={option.title} isSelected={expandedTitles[option.title]}>
                <NavLinkStyled to={option.path} onClick={() => toggleSubNav(option.title)}>
                  {option.icon}
                  {option.title}
                </NavLinkStyled>

                {option.subNav && expandedTitles[option.title] && (
                  <ul>
                    <SubListItem key={option.title}>
                      <SubNavTitle onClick={() => toggleSubNav(option.title)}>
                        {option.subNavTitle || ''} 
                        {option.subNav.map((subOption) => (
                          <SubListItem key={subOption.title}>
                            <NavLinkStyled to={subOption.path}>
                              {subOption.title}
                            </NavLinkStyled>
                          </SubListItem>
                        ))}
                      </SubNavTitle>
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

const ContentIMG = styled.div`
  transform: translate(-71px, -88px);
`;

const LogoImage = styled.img`
  height: 100%; 
  filter: brightness(80%) contrast(150%);
  transform: scale(0.6);
`;

const Wrapper = styled.div`
  display: flex;
`;

const SidebarContainer = styled.nav`
  position: absolute;
  width: ${({ isVisible }) => (isVisible ? '18vw' : '1')};
  user-select: none;
  flex-direction: column;
  height: ${({ isVisible }) => (isVisible ? '150vh' : 'auto')}; // Ajusta el height cuando está oculto
  transition: width 0s linear, opacity 0.1s ease, transform 0.1s ease;
  z-index: 10;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '100%')});
  background-color: ${({ isVisible }) => (isVisible ? '#FFF452' : 'transparent')};
  border: ${({ isVisible }) => (isVisible ? '1px solid black' : 'none')};
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
  font-family: 'Roboto Slab', sans-serif;
  margin-bottom: 38px;
  ${({ isSelected }) => isSelected && `
    background-color: #f0f0f0; // Cambia el color de fondo cuando está seleccionado
    border-left: 5px solid black; // Agrega un borde izquierdo azul cuando está seleccionado
  `}

  &:focus-within {
    background-color: #f0f0f0; // Cambia el color de fondo cuando está enfocado
    border-left: 5px solid black; // Agrega un borde izquierdo azul cuando está enfocado
    padding: 10px;
  }
`;

const SubListItem = styled.li`
  list-style: none;
  font-family: 'Roboto Slab', sans-serif;
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
  cursor: pointer;
`;

const ContentData = styled.div`
  color: black;
  height: 30vh;
  transform: translateY(32%);
`;
