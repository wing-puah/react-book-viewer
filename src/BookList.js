import Link from "next/link";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

const StyledCard = styled(Card)`
  a,
  &:hover a {
    text-decoration: none;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const BookList = ({ data }) => {
  return (
    <div className="row m-3 width-full">
      {data.map((singleBook) => {
        return (
          <StyledCard
            className="col col-md-4 m-3 px-0"
            key={singleBook.title}
            variant="outlined"
          >
            <Link href={`/books/${singleBook.id}`}>
              <a>
                <StyledCardMedia
                  image={`/${singleBook.cover}`}
                  title={singleBook.title}
                />
                <Divider />
                <CardContent className="py-3">{singleBook.title}</CardContent>
              </a>
            </Link>
          </StyledCard>
        );
      })}
    </div>
  );
};

export default BookList;
