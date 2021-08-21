import styled from 'styled-components';
import { ArrowBackOutline } from 'react-ionicons';
import { commonStyles } from '../../styles/styles';

interface Props {
  children: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
}

export default function ProfileLayout({ children, onNext, onPrev }: Props) {
  return (
    <Container>
      <SNav>
        <ArrowBackOutline
          color={'#00000'}
          title={'뒤로가기'}
          height="25px"
          width="25px"
          onClick={onPrev}
          style={{
            cursor: 'pointer',
          }}
        />
        <ConfirmBtn onClick={onNext}>확인</ConfirmBtn>
      </SNav>
      <main>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
`;

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const ConfirmBtn = styled.button`
  background: ${commonStyles.accent};
  color: white;
  font-weight: bold;
  border: none;
  padding: 0 1.5rem;
  border-radius: 5px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%), 0 2px 4px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;
