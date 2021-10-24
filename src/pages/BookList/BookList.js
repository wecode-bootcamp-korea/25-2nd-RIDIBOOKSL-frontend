import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BookListForm from '../../components/BookListForm/BookListForm';

const BookList = () => {
  const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const selectedMainCategory = Math.floor(id / 100) * 100;
  const selectedSubCategory = id - selectedMainCategory;

  const [cagetoryList, setCategoryList] = useState([]);
  const [mainCategoryName, setMainCategoryName] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [bookList, setBookList] = useState([]);
  const [allBooksLeng, setAllBooksLeng] = useState(0);
  const [viewDirection, setViewDirection] = useState('row');

  const bookList_fetch_api =
    `http://10.58.1.63:8000/products?menu=${selectedMainCategory / 100}` +
    (selectedSubCategory > 0 ? `&category=${selectedSubCategory}` : '');
  const bookList_param = params.get('order')
    ? `descending=${params.get('order')}&offset=${
        (params.get('page') - 1) * 20
      }&limit=20`
    : 'descending=0&offset=0&limit=20';
  const bookList_order_param = params.get('order')
    ? `descending=${params.get('order')}`
    : 'descending=0';

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch('/data/CategoryList.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setCategoryList(data));

    fetch(`${bookList_fetch_api}&${bookList_order_param}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setAllBooksLeng(res.products.length);
      });

    fetch(`${bookList_fetch_api}&${bookList_param}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setMainCategoryName(res.menu_name);
        setSubCategoryName(res.category_name);
        setBookList(res.products);
      });
  }, [bookList_fetch_api, bookList_order_param, bookList_param, location]);

  return (
    <Background>
      <Container>
        <ContentsMenu>
          <ul>
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
                      <li key={subCategory.id}>
                        <SubCategoryBtn
                          to={`/category/${mainCategory.id + subCategory.id}`}
                          selected={subCategory.id === selectedSubCategory}
                        >
                          {subCategory.name}
                        </SubCategoryBtn>
                      </li>
                    ))}
                  </SubCategoryList>
                )}
              </MainCategory>
            ))}
          </ul>
        </ContentsMenu>
        <ContentsPage>
          <PageTitle>
            <MainTitle isSelectedSub={!!selectedSubCategory}>
              <Link to={`/category/${selectedMainCategory}`}>
                <i className="fas fa-book-open" />
                {mainCategoryName}
              </Link>
            </MainTitle>
            {selectedSubCategory > 0 && (
              <>
                <MainToSub>
                  <i className="fas fa-chevron-right" />
                </MainToSub>
                <p>{subCategoryName}</p>
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
          <BookListForm
            bookList={bookList}
            viewDirection={viewDirection}
            allBooksLeng={allBooksLeng}
          />
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
