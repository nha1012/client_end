import React, { FC } from 'react';
import Popup from 'reactjs-popup';

const BaseModal: FC = () => {
  return (
    <Popup modal trigger={<button>Click Me</button>}>
      Modal Content
    </Popup>
  );
};
export default BaseModal;
