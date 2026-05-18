import { Link, useLoaderData } from "react-router";
import type { IFetchEpisodes } from "../model";
import { Container } from "../../../shared/ui";
import { CardEpisode } from "../../../entities/card-episode/ui/CardEpisode";

export const EpisodesPage = () => {
  const data = useLoaderData() as IFetchEpisodes[];

  return (
    <Container>
      {data.map((card) => (
        <Link to={card.id.toString()} key={card.id}>
          <CardEpisode {...card} />
        </Link>
      ))}
    </Container>
  );
};
