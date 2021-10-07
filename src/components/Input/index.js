import * as S from "./styles";

export default function Input({ value, onChange, ...props }) {
  return <S.Input value={value} onChange={onChange} {...props} />;
}