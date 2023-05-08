import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("User Reservations page displays correct number of reservations", async () => {
  render(<UserReservations userId={1} />);

  const ticketsButtonText = await screen.findByRole("button", {
    name: "Purchase more tickets",
  });

  expect(ticketsButtonText).toBeInTheDocument();
});

test("User Reservations page displays purchase tickets button and no heading for your tickets", async () => {
  render(<UserReservations userId={0} />);

  const ticketsButton = await screen.findByRole("button", {
    name: /purchase tickets/i,
  });
  expect(ticketsButton).toBeInTheDocument();

  const yourTicketsHeading = screen.queryByRole("heading", {
    name: /your tickets/i,
  });
  expect(yourTicketsHeading).not.toBeInTheDocument();
});
