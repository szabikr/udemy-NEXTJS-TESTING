import { rest } from "msw";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { fakeUserReservations } from "@/__tests__/__mocks__/fakeData/userReservations";

export const handlers = [
  rest.get(
    "http://localhost:3000/api/shows/:showId",
    async (req, res, context) => {
      const { fakeShows } = await readFakeData();
      return res(context.json({ show: fakeShows[0] }));
    }
  ),
  rest.get(
    "http://localhost:3000/api/users/:userId/reservations",
    async (req, res, context) =>
      res(context.json({ userReservations: fakeUserReservations }))
  ),
];
