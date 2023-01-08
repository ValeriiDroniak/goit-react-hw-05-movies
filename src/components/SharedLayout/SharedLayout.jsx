import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { LinkNav, Container } from './SharedLayout.styled';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

const navItems = [
  { href: '/', title: 'Home' },
  { href: 'movies', title: 'Movies' },
];

export default function SharedLayout() {
  return (
    <Box>
      <Box
        as="header"
        width="100%"
        minHeight="60px"
        boxShadow="go_it"
        bg="overlay"
      >
        <Container>
          <Box
            as="nav"
            display="flex"
            flexWrap="wrap"
            gridGap="16px"
            p=" 0 16px"
          >
            {navItems.map(({ href, title }) => (
              <LinkNav to={href} key={href}>
                {title}
              </LinkNav>
            ))}
          </Box>
        </Container>
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Box>
  );
}
