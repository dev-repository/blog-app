import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailResponsive from "./DetailResponsive";
import NavBar from "../../NavBar";
import { useParams, useNavigate } from "react-router-dom";
import { Viewer } from "@toast-ui/react-editor";
import Comments from "./Comment";

function WriteDetail2() {
  //Params로 게시물과 같은 아이디를 찾기 위함.
  const { id } = useParams();

  //로컬스토리지 에서 로그인 정보 가져오기.
  const session = JSON.parse(localStorage.getItem("session") || "[]");

  //로컬스토리지 에서 게시물 정보 가져오기
  const writeForm = JSON.parse(localStorage.getItem("writeForm") || "[]");

  //게시물 정보
  const [postInfo, setPostInfo] = useState(null);

  //데이터를 가져오는 역활
  useEffect(() => {
    const findPost = writeForm.find((item) => item.id === id);
    if (findPost) {
      setPostInfo(findPost);
    }
  }, [id]);

  //수정페이지 이동
  const update = useNavigate();
  const updatePost = () => {
    update(`/update/${id}`);
  };

  //홈화면으로 이동
  const home = useNavigate();
  const goHome = () => {
    home("/");
  };

  //삭제
  const deletePost = () => {
    const confirm = window.confirm("정말로 삭제하시겠습니까?");
    if (confirm) {
      //배열 돌면서 id가 해당id값이 아닌요소들만 배열에 다시 추가됨
      localStorage.setItem(
        "writeForm",
        JSON.stringify([...writeForm].filter((item) => item.id !== id))
      );
      alert("삭제 완료!");
      goHome();
    }
  };

  return (
    <>
      <NavBar />

      {postInfo ? (
        <PostHeadBlock>
          <div className="head-wrapper">
            <h1>{postInfo.title}</h1>
            {/* ?를쓰게되면 null이나 undefined를 비교할수있게함 */}
            {/* session에있는 userid랑 writeForm에있는 writeid랑 같으면 화면출력다르게 */}
            {session.userId === postInfo?.writer ? (
              <EditRemoveGroup>
                <button onClick={updatePost}>수정</button>
                <button onClick={deletePost}>삭제</button>
              </EditRemoveGroup>
            ) : null}
            <SubInfo>
              <div className="information">
                <span className="username">{postInfo.writer}</span>
                <span className="separator">&middot;</span>
                <span>{postInfo.date}</span>
              </div>
            </SubInfo>
          </div>
          <PostContent>
            <Viewer initialValue={postInfo.content} />
          </PostContent>

          <UserProfileBlock>
            <Section>
              <img src="/imgs/user-thumbnail.png" alt="profile" />
              <UserInfo>
                <div className="name">{postInfo.writerName}</div>
                <div className="description"></div>
              </UserInfo>
            </Section>
            <Separator />
          </UserProfileBlock>
        </PostHeadBlock>
      ) : null}

      <Comments />
    </>
  );
}

const PostHeadBlock = styled(DetailResponsive)`
  margin-top: 5.5rem;
  .head-wrapper {
    @media (max-width: 1024px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    margin-top: 0;
    font-weight: 800;
    color: #212529;
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in;
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
    h1 {
      font-size: 2.25rem;
    }
  }
`;
const SubInfo = styled.div`
  align-items: center;
  font-size: 1rem;
  color: #495057;
  display: flex;
  justify-content: space-between;
  .information {
    .username {
      color: #212529;
      font-weight: bold;
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;

const EditRemoveGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -1.25rem;
  @media (max-width: 1024px) {
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
  }
  button {
    padding: 0;
    outline: none;
    border: none;
    background: none;
    font-size: inherit;
    cursor: pointer;
    color: #868e96;
    &:hover {
      color: #212529;
    }
    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
  button + button {
    margin-left: 0.5rem;
  }
`;

// const MobileOnly = styled.div`
//   align-items: center;
//   display: none;
//   @media (max-width: 1024px) {
//     display: flex;
//   }
// `;

const PostContent = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 5rem;
  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  .toastui-editor-contents {
    font-size: 1.125rem;
    color: #212529;
    transition: color 0.125s ease-in 0s;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const UserProfileBlock = styled.div`
  margin-top: 16rem;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    margin-top: 8rem;
    margin-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    display: block;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.06);
    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  .name {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
    color: "#212529";
  }
  .description {
    white-space: pre-wrap;
    font-size: 1.125rem;
    line-height: 1.5;
    margin-top: 0.25rem;
    color: "#495057";
    letter-spacing: -0.004em;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;

    .name {
      font-size: 1.125rem;
    }
    .description {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      letter-spacing: -0.004em;
    }
  }
`;

const Separator = styled.div`
  background: #e9ecef;
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default WriteDetail2;
