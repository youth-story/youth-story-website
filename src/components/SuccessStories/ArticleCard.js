import React from 'react';
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';

export default function ArticleCard({ article }) {
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        style={{ textDecoration: 'none', color: 'black', borderBottom: '1px solid grey', margin: '10px 20px 0 20px', }}
      >
        <Image
          objectFit='cover'
          maxW='100px'
          maxH='100px'
          src={article.thumbnail}
          style={{margin: '20px', borderRadius: '20px'}}
          alt='Article Thumbnail'
        />

        <Stack style={{padding: '20px', display: 'flex', justifyContent: 'center'}}>
          <CardBody>
            <Heading size='md'>{article.title}</Heading>
          </CardBody>

          <CardFooter>
            <p>
              By <span style={{ fontWeight: 'bold' }}>{article.author}</span>
            </p>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
