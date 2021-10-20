import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const BookList = () => {
  const { id } = useParams();
  const selectedMainCategory = Math.floor(id / 100) * 100;
  const selectedSubCategory = id - selectedMainCategory;
  const [cagetoryList, setCategoryList] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState('인기순');

  useEffect(() => {
    fetch('/data/CategoryList.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setCategoryList(data));
  }, []);

  return (
    <Background>
      <Container>
        <ContentsMenu>
          <MainCategoryList>
            {cagetoryList.map(mainCategory => (
              <MainCategory key={mainCategory.id}>
                <MainCategoryBtn
                  to={`/category/${mainCategory.id}`}
                  selected={mainCategory.id === selectedMainCategory}
                >
                  {mainCategory.name}
                </MainCategoryBtn>
                {mainCategory.id === selectedMainCategory && (
                  <SubCategoryList>
                    {mainCategory.subMenu.map(subCategory => (
                      <SubCategory key={subCategory.id}>
                        <SubCategoryBtn
                          to={`/category/${mainCategory.id + subCategory.id}`}
                          selected={subCategory.id === selectedSubCategory}
                        >
                          {subCategory.name}
                        </SubCategoryBtn>
                      </SubCategory>
                    ))}
                  </SubCategoryList>
                )}
              </MainCategory>
            ))}
          </MainCategoryList>
        </ContentsMenu>
        <ContentsPage>
          <PageTitle>
            <MainTitle isSelectedSub={!!selectedSubCategory}>
              <Link to={`/category/${selectedMainCategory}`}>
                <i className="fas fa-book-open" />
                소설
              </Link>
            </MainTitle>
            {selectedSubCategory > 0 && (
              <>
                <MainToSub>
                  <i className="fas fa-chevron-right" />
                </MainToSub>
                <SubTitle>한국 소설</SubTitle>
              </>
            )}
          </PageTitle>
          <Line />
          <ViewSelectionList>
            <ViewSelection>
              <button>
                <i className="fas fa-th-list" />
              </button>
            </ViewSelection>
            <ViewSelection>
              <button>
                <i className="fas fa-th-large" />
              </button>
            </ViewSelection>
          </ViewSelectionList>
          <OrderList>
            {ORDER_LIST.map(order => (
              <Order key={order.id}>
                <OrderBtn
                  onClick={() => setSelectedOrder(order.order)}
                  selected={selectedOrder === order.order}
                >
                  {order.name}
                </OrderBtn>
              </Order>
            ))}
          </OrderList>
          <BooksWrapper>
            <Book>
              <ThumbnailWrapper>
                <Thumbnail to="/">
                  <img src="/images/thumbnail1.jpg" alt="책 표지" />
                </Thumbnail>
              </ThumbnailWrapper>
              <MetaDataWrapper>
                <BookTitle>
                  <Link to="/">나미야 잡화점의 기적</Link>
                </BookTitle>
                <BookInform>
                  <Author>
                    <Link to="/">히가시노 게이고</Link>
                  </Author>
                  <Rating>
                    <i className="fas fa-star" /> 4.8점
                    <span>(428)</span>
                  </Rating>
                  <SubInform>
                    <Publisher>출판사</Publisher>
                    <Category>일본 소설</Category>
                  </SubInform>
                </BookInform>
                <BookSummary>
                  <Link to="/">
                    성장이란 단어보다 생존이란 단어에 익숙해진 지금 십대들의
                    ‘일주일’의 표정 “좁은 방을 맴도는 걸 멈추고 다시 의자에
                    앉으며 말을 걸었다. 우리 조금만 더 친해지자고. 당신의
                    이야기를 계속해달라고.” 『겨울방학』 『이제야 언니에게』
                    『내가성장이란 단어보다 생존이란 단어에 익숙해진 지금
                    십대들의 ‘일주일’의 표정 “좁은 방을 맴도는 걸 멈추고 다시
                    의자에 앉으며 말을 걸었다. 우리 조금만 더 친해지자고. 당신의
                    이야기를 계속해달라고.” 『겨울방학』 『이제야 언니에게』
                    『내가
                  </Link>
                </BookSummary>
                <BookPrice>
                  <p>
                    대여<Price>100원</Price>
                  </p>
                  <p>
                    구매<Price>100원</Price>
                    <Discount>(10%↓)</Discount>
                  </p>
                </BookPrice>
              </MetaDataWrapper>
            </Book>
            <Book>
              <ThumbnailWrapper>
                <Thumbnail to="/">
                  <img src="/images/thumbnail2.png" alt="책 표지" />
                </Thumbnail>
              </ThumbnailWrapper>
              <MetaDataWrapper>
                <BookTitle>
                  <Link to="/">나미야 잡화점의 기적</Link>
                </BookTitle>
                <BookInform>
                  <Author>
                    <Link to="/">히가시노 게이고</Link>
                  </Author>
                  <Rating>
                    <i className="fas fa-star" /> 4.8점
                    <span>(428)</span>
                  </Rating>
                  <SubInform>
                    <Publisher>출판사</Publisher>
                    <Category>일본 소설</Category>
                  </SubInform>
                </BookInform>
                <BookSummary>
                  <Link to="/">
                    성장이란 단어보다 생존이란 단어에 익숙해진 지금 십대들의
                    ‘일주일’의 표정 “좁은 방을 맴도는 걸 멈추고 다시 의자에
                    앉으며 말을 걸었다. 우리 조금만 더 친해지자고. 당신의
                    이야기를 계속해달라고.” 『겨울방학』 『이제야 언니에게』
                    『내가성장이란 단어보다 생존이란 단어에 익숙해진 지금
                    십대들의 ‘일주일’의 표정 “좁은 방을 맴도는 걸 멈추고 다시
                    의자에 앉으며 말을 걸었다. 우리 조금만 더 친해지자고. 당신의
                    이야기를 계속해달라고.” 『겨울방학』 『이제야 언니에게』
                    『내가
                  </Link>
                </BookSummary>
                <BookPrice>
                  <p>
                    대여<Price>100원</Price>
                  </p>
                  <p>
                    구매<Price>100원</Price>
                    <Discount>(10%↓)</Discount>
                  </p>
                </BookPrice>
              </MetaDataWrapper>
            </Book>
          </BooksWrapper>
          <PagingWrapper>
            <PrevBtn>
              <Link to="/">1</Link>
            </PrevBtn>
            <PagingList>
              <NumberBtn>
                <Link to="/">1</Link>
              </NumberBtn>
              <NumberBtn>
                <Link to="/">2</Link>
              </NumberBtn>
              <NumberBtn>
                <Link to="/">3</Link>
              </NumberBtn>
              <NumberBtn>
                <Link to="/">4</Link>
              </NumberBtn>
              <NumberBtn>
                <Link to="/">5</Link>
              </NumberBtn>
            </PagingList>
            <NextBtn>
              <Link to="/">1</Link>
            </NextBtn>
          </PagingWrapper>
        </ContentsPage>
      </Container>
    </Background>
  );
};

const ORDER_LIST = [
  { id: 1, name: '인기순', order: '인기순' }, //order값은 나중에 고치기
  { id: 2, name: '최신순', order: '최신순' },
  { id: 3, name: '할인', order: '할인' },
  { id: 4, name: '대여', order: '대여' },
];

const Background = styled.div`
  margin-top: 33px;
  font-size: 13px;

  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;

  @media (max-width: 999px) {
    padding: 0 10px;
  }
`;

const ContentsMenu = styled.div`
  padding-right: 33px;
  width: 235px;

  @media (max-width: 999px) {
    display: none;
  }
`;

const MainCategoryList = styled.ul``;

const MainCategory = styled.li`
  margin: 5px 0;
`;

const MainCategoryBtn = styled(Link)`
  display: block;
  padding-left: 5px;
  height: 24px;
  border-radius: 4px;
  color: black;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  ${({ selected }) => selected && 'background-color: #1f8ce6; color: white;'}

  &:hover {
    ${({ selected }) => !selected && 'background-color: #f2f4f5;'}
  }
`;

const SubCategoryList = styled.ul`
  margin: 5px 0 10px 0;
`;

const SubCategory = styled.li``;

const SubCategoryBtn = styled(Link)`
  display: block;
  padding: 3px 10px;
  color: #636c73;
  line-height: 1.5em;

  ${({ selected }) => selected && 'color: #1f8ce6; font-weight: 700;'}

  &:hover {
    color: #1f8ce6;
    font-weight: 700;
  }
`;

const ContentsPage = styled.div`
  position: relative;
  flex: 1;
  padding-bottom: 70px;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  font-size: 20px;
  font-weight: 700;
`;

const MainTitle = styled.h2`
  a {
    color: ${({ isSelectedSub }) => (isSelectedSub ? '#808991' : 'black')};

    i {
      margin-right: 10px;
      color: ${({ isSelectedSub }) => (isSelectedSub ? '#d1d5d9' : '#1f8ce6')};
    }
  }
`;

const MainToSub = styled.span`
  margin: 0 6px;
  color: #d1d5d9;
  font-size: 16px;
  line-height: 15px;
`;

const SubTitle = styled.p``;

const Line = styled.div`
  margin-top: 5px;
  height: 0;
  border-bottom: 2px solid #d1d5d9;
`;

const ViewSelectionList = styled.ul`
  display: flex;
  position: absolute;
  top: 44px;
  right: 0;
  border: 1px solid #d1d5d9;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(206 210 214 / 30%);
`;

const ViewSelection = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-right: 1px solid #d1d5d9;
  }

  button {
    background-color: white;
    height: 30px;
    border: none;
    cursor: pointer;

    i {
      /* color: #1f8ce6; */
      color: #d1d5d9;
      font-size: 16px;
    }
  }
`;

const OrderList = styled.ul`
  display: flex;
  padding: 12px 0;
`;

const Order = styled.li`
  &:first-child::before {
    display: none;
  }

  &::before {
    content: '';
    display: inline-block;
    margin: 0 7px 3px 7px;
    width: 3px;
    height: 3px;
    background-color: #d1d5d9;
    border-radius: 3px;
  }
`;

const OrderBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${({ selected }) => (selected ? '#303538' : '#808991')};
  font-size: 13px;
  font-weight: 700;
  line-height: 1em;
  cursor: pointer;
`;

const BooksWrapper = styled.div`
  /* display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; */
`;

const Book = styled.div`
  display: flex; //가로형이면 flex, 세로형이면 block
  padding: 15px 0;
  width: 100%; //가로형이면 100, 세로형이면 20%
  border-bottom: 1px solid #dfdfdf; //세로형일때 none, 그 외에 존재함
`;

const ThumbnailWrapper = styled.div`
  padding: 0 10px;
  width: 100%;
  max-width: 130px;
`;

const Thumbnail = styled(Link)`
  img {
    width: 100%;
  }
`;

const MetaDataWrapper = styled.div`
  padding: 0 10px;
  font-size: 13px;
`;

const BookTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4em;
  word-break: keep-all;

  a {
    color: black;
  }
`;

const BookInform = styled.div`
  display: flex;
  line-height: 1.2em;

  @media (max-width: 999px) {
    display: block;
    padding-top: 4px;
  }
`;

const Author = styled.p`
  margin-top: 4px;

  a {
    color: rgb(99, 108, 115);
    font-size: 14px;
  }
`;

const Rating = styled.p`
  margin: 4px 8px 0 8px;
  padding: 0 8px;
  border-left: 1px solid rgb(209, 213, 217);
  border-right: 1px solid rgb(209, 213, 217);
  color: rgb(250, 114, 46);
  font-weight: 700;

  span {
    margin-left: 2px;
    color: rgb(153, 153, 153);
    font-size: 12px;
    font-weight: 400;
  }

  @media (max-width: 999px) {
    padding: 0;
    border: none;
    margin: 4px 0 0 0;
  }
`;

const SubInform = styled.div`
  display: flex;
  margin-top: 4px;
  color: rgb(128, 137, 145);
`;

const Publisher = styled.p`
  padding-right: 8px;
  border-right: 1px solid rgb(209, 213, 217);
`;

const Category = styled.p`
  padding-left: 8px;
`;

const BookSummary = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 9px;
  max-height: 4.5em;
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  word-wrap: break-word;

  a {
    color: rgb(102, 102, 102);
  }

  @media (max-width: 999px) {
    display: none;
  }
`;

const BookPrice = styled.div`
  margin-top: 8px;
  color: rgb(102, 102, 102);

  p {
    margin-bottom: 6px;

    span {
      margin-left: 4px;
      font-weight: 800;
    }
  }
`;

const Price = styled.span`
  color: rgb(31, 140, 230);
`;

const Discount = styled.span`
  color: rgb(235, 88, 71);
`;

const PagingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;

  div,
  ul {
    display: flex;
    align-items: center;
    height: 30px;
    border: 1px solid #d1d5d9;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 700;

    a {
      padding: 0 20px;
    }
  }
`;

const PagingList = styled.ul``;

const NumberBtn = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-left: 1px solid #d1d5d9;

  &:first-child {
    border: none;
  }
`;

const PrevBtn = styled.div`
  margin-right: 6px;
`;

const NextBtn = styled.div`
  margin-left: 6px;
`;

export default BookList;
