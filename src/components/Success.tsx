// Styles
import * as S from "@/styles/SuccessStyles";
// Interface
import { ErrorProps } from "@/interfaces/iComponents/IError";
// Icons
import { FaRedditAlien } from 'react-icons/fa';

const Success = ({ children }: ErrorProps) => {
  return (
    <S.SuccessMessage>
      <p>{children + " "}{<FaRedditAlien />}</p>
    </S.SuccessMessage>
  );
};

export default Success;
