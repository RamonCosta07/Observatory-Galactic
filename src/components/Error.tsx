// Styles
import * as S from "@/styles/ErrorStyles";
// Interface
import { ErrorProps } from "@/interfaces/iComponents/IError";
// Icons
import { FaRedditAlien } from 'react-icons/fa';

const Error = ({ children }: ErrorProps) => {
  return (
    <S.ErrorMessage>
      <p>{children + " "}{<FaRedditAlien />}</p>
    </S.ErrorMessage>
  );
};

export default Error;
