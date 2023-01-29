import { useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const PageBox = styled.div`
  /* border: 1px solid #00ff00; */
  width: auto;
  background-color: #f3f3f3;
  width: auto;
  height: 100vh;
  min-width: 1500px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

const TopBox = styled.div`
  background-color: white;
  box-shadow: 0px 2px 2px 1px rgba(200, 200, 200, 0.7);
  border-radius: 5px;
`;

const TopSearchTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  font-size: 12px;
  font-weight: bold;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
  height: 60px;
  min-width: 100px;
`;

const TopSearchBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  font-size: 12px;
  min-width: 100px;
  height: 50px;
`;

const TopCategory = styled.button`
  display: flex;
  background-color: #ffffff;
  width: 150px;
  height: 40px;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid rgba(200, 200, 200, 0.5);
  margin-right: 30px;
  cursor: pointer;
`;

const TopCategoryListBox = styled.div`
  box-shadow: 0px 6px 5px 5px rgba(200, 200, 200);
  width: 150px;
  border-radius: 5px;
`;
const TopCategoryList = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  width: 150px;
  height: 40px;
  align-items: center;
  :hover {
    background-color: rgba(200, 200, 200);
  }
  cursor: pointer;
`;

const TopCategoryIcon = styled.div`
  display: flex;
  justify-content: right;
  margin-left: 50px;
  color: #808080;
  font-size: 15px;
`;
const TopInput = styled.input`
  width: 300px;
  margin-right: 30px;
  height: 34px;
`;

const TopSearchButton = styled.button`
  background-color: #000000;
  width: 65px;
  height: 40px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
const BottomBox = styled.div`
  background-color: white;
  box-shadow: 0px 2px 2px 1px rgba(200, 200, 200, 0.7);
  border-radius: 5px;
`;

const BottomListTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
  height: 60px;
  min-width: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

const BottomListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

const BottomListsBox = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const BottomListBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;

  height: 20px;
  div {
    box-sizing: border-box;
    width: 238px;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;

const NaviBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #ff00ff; */
  min-width: 100px;
  height: 50px;
`;
const NaviButton = styled.button`
  display: flex;
  background-color: rgba(200, 200, 200, 0.5);
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: rgba(200, 200, 200);
  }
`;

export const Datas = () => {
  const [datas, setDatas] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filterDatas, setFilterDatas] = useState([]);
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [searchClick, setsearchClick] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState('전체');
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState('');
  console.log('category', category);
  // const [pageNum, setPageNum] = useState(1);
  console.log('text', text);
  let products = datas.products;
  let Lists = [];
  let product = [];
  // eslint-disable-next-line no-unused-vars
  let pageNums = [];
  const Dataslength = datas.total;

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const CategoryHandler = () => {
    setClick(true);
    // console.log('클릭됨');
    if (click === true) {
      setClick(false);
    }
  };

  const ZeroHandler = () => {
    if (click === true) {
      setClick(false);
    }
  };
  const CategoryListHandler1 = () => {
    setCategory('전체');
    console.log('1클릭됨', pageNum);
  };
  const CategoryListHandler2 = () => {
    setCategory('상품명');
    console.log('2클릭됨', pageNum);
  };
  const CategoryListHandler3 = () => {
    setCategory('브랜드');
    console.log('3클릭됨', pageNum);
  };
  const CategoryListHandler4 = () => {
    setCategory('상품내용');
    console.log('4클릭됨', pageNum);
  };
  const PageNationHandler1 = () => {
    setPageNum(1);
    console.log('1클릭됨', pageNum);
  };
  const PageNationHandler2 = () => {
    setPageNum(2);
    console.log('2클릭됨', pageNum);
  };
  const PageNationHandler3 = () => {
    setPageNum(3);
    console.log('3클릭됨', pageNum);
  };
  const PageNationHandler4 = () => {
    setPageNum(4);
    console.log('4클릭됨', pageNum);
  };
  const PageNationHandler5 = () => {
    setPageNum(5);
    console.log('5클릭됨', pageNum);
  };
  const PageNationHandler6 = () => {
    setPageNum(6);
    console.log('6클릭됨', pageNum);
  };
  const PageNationHandler7 = () => {
    setPageNum(7);
    console.log('7클릭됨', pageNum);
  };
  const PageNationHandler8 = () => {
    setPageNum(8);
    console.log('8클릭됨', pageNum);
  };
  const PageNationHandler9 = () => {
    setPageNum(9);
    console.log('9클릭됨', pageNum);
  };
  const PageNationHandler10 = () => {
    setPageNum(10);
    console.log('10클릭됨', pageNum);
  };
  const SearchHandler = () => {
    setsearchClick(true);
    console.log(searchClick);
  };
  const TextonChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  console.log('products', products);
  if (products !== undefined) {
    if (products.length > 10) {
      pageNum === 1
        ? (products = products.slice(pageNum - 1, pageNum * 10))
        : (products = products.slice(pageNum * 10 - 10, pageNum * 10));
    }

    if (category === '상품명' && searchClick === true && text !== '') {
      // eslint-disable-next-line no-unused-vars
      product = products.filter((el, i) => {
        if (el.title === text) {
          product.push(products[i]);
          console.log('product', product);
        }
      });

      if (products.length > 10) {
        pageNum === 1
          ? (products = products.slice(pageNum - 1, pageNum * 10))
          : (products = products.slice(pageNum * 10 - 10, pageNum * 10));
      }
    }
    if (category === '브랜드') {
      if (products.length > 10) {
        pageNum === 1
          ? (products = products.slice(pageNum - 1, pageNum * 10))
          : (products = products.slice(pageNum * 10 - 10, pageNum * 10));
      }
    }
    if (category === '상품내용') {
      if (products.length > 10) {
        pageNum === 1
          ? (products = products.slice(pageNum - 1, pageNum * 10))
          : (products = products.slice(pageNum * 10 - 10, pageNum * 10));
      }
    }
    Lists = products.map((p) => (
      <>
        <BottomListsBox key={p.id}>
          <BottomListBox style={{ width: '50px' }}>{p.id}</BottomListBox>
          <BottomListBox style={{ width: '250px' }}>{p.title}</BottomListBox>
          <BottomListBox style={{ width: '250px' }}>{p.brand}</BottomListBox>
          <BottomListBox>
            <div>{p.description}</div>
          </BottomListBox>
          <BottomListBox style={{ width: '50px' }}>{p.price}</BottomListBox>
          <BottomListBox style={{ width: '50px' }}>{p.rating}</BottomListBox>
          <BottomListBox style={{ width: '50px' }}>{p.stock}</BottomListBox>
        </BottomListsBox>
      </>
    ));
  }

  return (
    <>
      <PageBox onClick={ZeroHandler}>
        <TopBox>
          <TopSearchTitle>상품 검색</TopSearchTitle>
          <TopSearchBox>
            <div style={{ fontWeight: 'bold' }}>검색</div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '150px',
              }}
            >
              {click ? (
                <>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      zIndex: '99999',
                      marginTop: '159px',
                    }}
                  >
                    <TopCategory onClick={CategoryHandler}>
                      <div style={{ width: '60px' }}>{category}</div>
                      <TopCategoryIcon>
                        <AiOutlineUp />
                      </TopCategoryIcon>
                    </TopCategory>

                    <TopCategoryListBox>
                      <TopCategoryList
                        style={{
                          borderTopLeftRadius: '5px',
                          borderTopRightRadius: '5px',
                        }}
                        onClick={CategoryListHandler1}
                      >
                        전체
                      </TopCategoryList>
                      <TopCategoryList onClick={CategoryListHandler2}>
                        상품명
                      </TopCategoryList>
                      <TopCategoryList onClick={CategoryListHandler3}>
                        브랜드
                      </TopCategoryList>
                      <TopCategoryList
                        style={{
                          borderBottomLeftRadius: '5px',
                          borderBottomRightRadius: '5px',
                        }}
                        onClick={CategoryListHandler4}
                      >
                        상품내용
                      </TopCategoryList>
                    </TopCategoryListBox>
                  </div>
                </>
              ) : (
                <TopCategory onClick={CategoryHandler}>
                  <div style={{ width: '60px' }}>{category}</div>
                  <TopCategoryIcon>
                    <AiOutlineDown />
                  </TopCategoryIcon>
                </TopCategory>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <TopInput onChange={TextonChange}></TopInput>
              <TopSearchButton onClick={SearchHandler}>조회 </TopSearchButton>
            </div>
          </TopSearchBox>
        </TopBox>
        <div
          style={{
            marginTop: '30px',
            marginBottom: '30px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          검색된 데이터: {Dataslength}건
        </div>
        <BottomBox>
          <BottomListTitleBox>
            <BottomListTitle style={{ width: '50px' }}>
              상품번호
            </BottomListTitle>
            <BottomListTitle style={{ width: '250px' }}>상품명</BottomListTitle>
            <BottomListTitle style={{ width: '250px' }}>브랜드</BottomListTitle>
            <BottomListTitle style={{ width: '238px' }}>
              상품내용
            </BottomListTitle>
            <BottomListTitle style={{ width: '50px' }}>가격</BottomListTitle>
            <BottomListTitle style={{ width: '50px' }}>평점</BottomListTitle>
            <BottomListTitle style={{ width: '50px' }}>재고</BottomListTitle>
          </BottomListTitleBox>
          {Lists}
          <NaviBox>
            <NaviButton id={1} onClick={PageNationHandler1}>
              1
            </NaviButton>
            <NaviButton id={2} onClick={PageNationHandler2}>
              2
            </NaviButton>
            <NaviButton id={3} onClick={PageNationHandler3}>
              3
            </NaviButton>
            <NaviButton id={4} onClick={PageNationHandler4}>
              4
            </NaviButton>
            <NaviButton id={5} onClick={PageNationHandler5}>
              5
            </NaviButton>
            <NaviButton id={6} onClick={PageNationHandler6}>
              6
            </NaviButton>
            <NaviButton id={7} onClick={PageNationHandler7}>
              7
            </NaviButton>
            <NaviButton id={8} onClick={PageNationHandler8}>
              8
            </NaviButton>
            <NaviButton id={9} onClick={PageNationHandler9}>
              9
            </NaviButton>
            <NaviButton id={10} onClick={PageNationHandler10}>
              10
            </NaviButton>
          </NaviBox>
        </BottomBox>
      </PageBox>
    </>
  );
};
