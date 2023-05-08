import { rest } from "msw";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { fakeUserReservations } from "@/__tests__/__mocks__/fakeData/userReservations";

export const handlers = [
  rest.get(
    "http://localhost:3000/api/shows/:showId",
    async (req, res, context) => {
      const { fakeShows } = await readFakeData();
      const { showId } = req.params;

      // index / showId = 0 has seats available in fake data
      // index / showId = 1 has NO seats available
      return res(context.json({ show: fakeShows[Number(showId)] }));
    }
  ),
  rest.get(
    "http://localhost:3000/api/users/:userId/reservations",
    async (req, res, context) => {
      const { userId } = req.params;
      return res(
        context.json({
          userReservations: Number(userId) === 0 ? [] : fakeUserReservations,
        })
      );
    }
  ),
];
