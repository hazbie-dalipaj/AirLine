import { createSelector } from 'reselect';

const selectFlight = state => state.flight;

export const selectFlightsItems = createSelector(
  [selectFlight],
  flight => flight.flightItems
);

export const selectFlightItemsCount = createSelector(
  [selectFlightItems],
  flightItems =>
  flightItems.reduce(
      (accumalatedQuantity, flightItem) =>
        accumalatedQuantity + flightItem.quantity,
      0
    )
);

export const selectFlightTotal = createSelector(
    [selectFlightsItems],
    flightItems =>
    flightItems.reduce(
      (accumalatedQuantity, flightItem) =>
        accumalatedQuantity + flightItem.quantity * flightItem.price,
      0
    )
);