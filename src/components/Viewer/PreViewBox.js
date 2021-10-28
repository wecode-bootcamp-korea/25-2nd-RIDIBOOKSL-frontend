import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import sample from './files/previewC.pdf';
import ChargeBtn from './ChargeBtn';
import { useLockBodyScroll } from './useLockBodyScroll';
import ViewProgress from './ViewProgress';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CHAPTER = [2, 7, 10];

const NO_CHAPTER = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const PreViewBox = props => {
  useLockBodyScroll();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [FreePages, setFreePages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setFreePages(numPages - 5);
  }

  const { Show, ViewerHandler } = props;

  return (
    <ModalBox show={Show}>
      <ViewBox onClick={e => e.stopPropagation()}>
        <Viewer>
          <Title>
            <EscBtn onClick={ViewerHandler}>
              <i className="fas fa-chevron-left fa-la" />
            </EscBtn>
            &nbsp;&nbsp;RIDI BOOKSLBOOSL E-book Viewer
          </Title>
          <Book>
            <Viewers>
              <ViewBoxes>
                <Button
                  onClick={() =>
                    pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
                  }
                >
                  <i className="fas fa-chevron-left" />
                </Button>
                <NewDocument
                  file={sample}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <NewPage pageNumber={pageNumber} />
                </NewDocument>
                <Button
                  onClick={() =>
                    pageNumber < FreePages
                      ? setPageNumber(pageNumber + 1)
                      : alert('결제가 필요한 페이지입니다.')
                  }
                >
                  <i className="fas fa-chevron-right" />
                </Button>
              </ViewBoxes>
              <Div>
                <span>
                  {pageNumber} / {numPages}
                </span>
              </Div>
              <ViewProgressBox>
                <ViewProgress top={pageNumber} bottom={numPages} />
              </ViewProgressBox>
            </Viewers>
          </Book>
        </Viewer>
        <Side>
          <SideTitle>목차</SideTitle>
          <SideList
            id={CHAPTER[0]}
            onClick={e => setPageNumber(Number(e.target.id))}
          >
            1장
          </SideList>
          <SideList
            id={CHAPTER[1]}
            onClick={e => setPageNumber(Number(e.target.id))}
          >
            2장
          </SideList>
          <SideList
            id={CHAPTER[2]}
            onClick={e => setPageNumber(Number(e.target.id))}
          >
            3장
          </SideList>

          {NO_CHAPTER.map((c, idx) => (
            <ChargeBtn title={c} key={idx} />
          ))}
        </Side>
      </ViewBox>
    </ModalBox>
  );
};

export default PreViewBox;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  font-family: mecook;
  z-index: 10000;

  ${({ show }) => {
    return show ? null : `display: none`;
  }};
`;

const ViewBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 960px;
  height: 764px;
  border: 1px solid #dadada;
`;

const Viewer = styled.div`
  width: 700px;
  height: 100%;
  border-right: 1px solid #dadada;
`;

const EscBtn = styled.span`
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 6%;
  font-size: 18px;
  border-bottom: 1px solid #dadada;
  font-weight: 700;
  background-color: white;
`;

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 94%;
  background-color: white;
`;

const Side = styled.div`
  width: 260px;
  height: 100%;
  background-color: #eeeeee;
`;

const SideTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  height: 6%;
  color: #dadada;
  border-bottom: 1px solid #dadada;
  background-color: #eeeeee;
  font-weight: 700;
`;

const SideList = styled.button`
  width: 100%;
  height: 6%;
  border: none;
  border-bottom: 1px solid #dadada;
  margin: 0;
  box-shadow: none;
  background-color: #eeeeee;
  text-align: left;
  padding-left: 20px;
  color: #333333;
  cursor: pointer;

  ${({ canSee }) => {
    if (canSee === 'no')
      return `background-color: gray;
    `;
  }};
`;

const Viewers = styled.div`
  width: 960px;
`;

const ViewBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0 10px 0;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  color: black;
  font-size: 20px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
`;

const NewDocument = styled(Document)`
  .react-pdf__Page {
    margin-top: 10px;
  }
  .react-pdf__Page__textContent {
    border: 1px solid darkgrey;
    box-shadow: 5px 5px 5px 1px #ccc;
    border-radius: 5px;
  }

  .react-pdf__Page__annotations.annotationLayer {
    padding: 20px;
  }

  .react-pdf__Page__canvas {
    margin: -40px auto;
    border-radius: 5px;
  }
`;

const NewPage = styled(Page)`
  .all-page-container {
    height: 100%;
    max-height: 500px;
    overflow: auto;
  }
`;

const ViewProgressBox = styled.div`
  width: 100%;
  padding: 0 70px;
`;
