import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookListForm from '../../components/BookListForm/BookListForm';

const BookList = () => {
  const { id } = useParams();
  const selectedMainCategory = Math.floor(id / 100) * 100;
  const selectedSubCategory = id - selectedMainCategory;
  const [cagetoryList, setCategoryList] = useState([]);
  const [viewDirection, setViewDirection] = useState('row');

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
            <ViewSelection selected={viewDirection === 'row'}>
              <button onClick={() => setViewDirection('row')}>
                <i className="fas fa-th-list" />
              </button>
            </ViewSelection>
            <ViewSelection selected={viewDirection === 'column'}>
              <button onClick={() => setViewDirection('column')}>
                <i className="fas fa-th-large" />
              </button>
            </ViewSelection>
          </ViewSelectionList>
          <BookListForm viewDirection={viewDirection} />
        </ContentsPage>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  margin-top: 33px;
  font-size: 13px;

  a {
    text-decoration: none;
  }

  @media (max-width: 999px) {
    margin-top: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;

  @media (max-width: 999px) {
    display: block;
    padding: 0 10px;
  }
`;

const ContentsMenu = styled.div`
  padding: 0 33px 70px 0;
  width: 235px;

  @media (max-width: 999px) {
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
    height: 150px;
    background-color: #ecf6ff;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #1f8ce6;
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 10px;
    }
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
      color: ${({ selected }) => (selected ? '#1f8ce6' : '#d1d5d9')};
      font-size: 16px;
    }
  }

  @media (max-width: 999px) {
    display: none;
  }
`;

export default BookList;
