import React, { FC } from "react";

import "./simpleButton.scss";

interface Props {
  text: string;
}

const SimpleButton: FC<Props> = ({ text }) => {
  return <button type="button">{text}</button>;
};

export default SimpleButton;
