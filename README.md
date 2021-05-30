## Stack

- Frontend framework: Next.js

- UI library: material-ui

- Styling: styled-components

- OCR library: tesseract.js

- Pdf viwer: pdfjs-dist + pdfjs-dist (only work with 2.6.347 for some reason)

## Functionality & site structure

### /Index

- Show collections of books grouped according to categories
- On clicking of any book, navigate to individual book pdf display

### /books/[id]

- Display individual book page
- PDF viewer
- Search bar to search content (OCR) inside the book
- On search, pdf viewer will show relevant pages if results are found
- On click, pdf viewer will show the whole book, on the clicked page, with the keywords highlighted
- If no results are found, there will be an appbar to show that no results are found

## Entity logic

### PdfViewer

- Pages of books are stored as images, tagged with a pid
- Due to the many pages in a book, the pdf viewer will fetch the images via the pid as user scroll to that page

### PdfUploader

- On search, OCRHandler will have to work through the whole book to display the necessary pages
- So we run the OCRHandler on upload instead and keep the data accordingly

## Across site layout

### Sticky navigation bar

- Search bar that allows user to easily find books
- Collection page
- Easily upload a book anytime
