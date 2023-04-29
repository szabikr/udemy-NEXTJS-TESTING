import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("User Reservations page displays correct number of reservations", async () => {
  render(<UserReservations userId={1} />);

  const ticketsButtonText = await screen.findByRole("button", {
    name: "Purchase more tickets",
  });

  expect(ticketsButtonText).toBeInTheDocument();
});
