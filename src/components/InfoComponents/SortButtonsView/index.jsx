import React, { useCallback } from 'react';
import Styled from './styles';
import { styles } from '../../../../config';

import ButtonView from '../../SharedComponents/ButtonView';

const sortButtonStyles = {
  width: 'auto',
  fontSize: '0.8rem',
  margin: '0 0.6rem',
  padding: '0 0.4rem',
};

const radioButtonStyles = {
  deactiveBorderColor: '#999',
  deactiveColor: '#999',
  activeBorderColor: styles.filteredItemColor,
  activeColor: styles.filteredItemColor,
};

export default function RadioButtonContainer() {
  const selectHandler = useCallback(({ target }) => {
    if (target.tagName !== 'BUTTON') return;
    const container = target.parentElement;
    if (target.classList.contains('active')) {
      target.classList.toggle('asc');
      target.classList.toggle('desc');
    } else {
      container.querySelector('.active').classList.remove('active');
      target.classList.add('active');
    }
  }, []);

  return (
    <Styled.RadioButtonContainer
      onClick={selectHandler}
      {...{ radioButtonStyles }}
    >
      <ButtonView
        name="평점"
        className="active desc"
        {...sortButtonStyles}
      />
      <ButtonView
        name="리뷰수"
        className="desc"
        {...sortButtonStyles}
      />
      <ButtonView
        name="이름순"
        className="desc"
        {...sortButtonStyles}
      />
    </Styled.RadioButtonContainer>
  );
}
