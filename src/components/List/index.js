import * as S from "./styles";
import { DeleteBin } from "@styled-icons/remix-fill";

export default function List({ tasks, onDelete }) {
  return (
    <S.Wrapper>
      {tasks.map((task) => (
        <S.Item key={task.id}>
          {task.title}
        
          <S.Button onClick={() => onDelete(task.id)}>
            {/* <DeleteBin /> */}
          </S.Button>
        </S.Item>
      ))}
    </S.Wrapper>
  );
}