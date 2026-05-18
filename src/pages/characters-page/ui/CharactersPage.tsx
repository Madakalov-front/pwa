import { Await, Link, useLoaderData } from "react-router";
import { Container, TitlePage } from "../../../shared/ui";
import { CardCharacter } from "../../../entities/card-character";
import type { IFetchCharacters } from "../model";
import { Suspense } from "react";

export const CharactersPage = () => {
  const data = useLoaderData() as Promise<IFetchCharacters[]>;
  return (
    <>
      <TitlePage title="Characters page" />
      <Suspense>
        <Await resolve={data}>
          {(resolveCharacters) => (
            <Container>
              {resolveCharacters.map(({ name, image, id }) => (
                <Link to={id.toString()} key={id}>
                  <CardCharacter name={name} image={image} />
                </Link>
              ))}
            </Container>
          )}
        </Await>
      </Suspense>
    </>
  );
};
