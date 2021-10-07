import * as S from "./styles";

export default function Pagination({ page, onPrev, onNext }) {
  return (
    <S.Wrapper>
      <S.Button onClick={onPrev}>{"<"}</S.Button>

      <span>Página {page}</span>

      <S.Button onClick={onNext}>{">"}</S.Button>
    </S.Wrapper>
  );
}