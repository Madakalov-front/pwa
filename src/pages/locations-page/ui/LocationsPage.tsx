import { Link, useLoaderData } from "react-router";
import { Container } from "../../../shared/ui";
import { CardLocation } from "../../../entities/card-location/ui/CardLocation";
import type { IFetchLocations } from "../model/fetchLocations";
export const LocationsPage = () => {
  const cards = useLoaderData() as IFetchLocations[];
  return (
    <Container>
      {cards.map((card) => (
        <Link to={card.id.toString()} key={card.id}>
          <CardLocation {...card} />
        </Link>
      ))}
    </Container>
  );
};
