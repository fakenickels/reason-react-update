type update('action, 'state) =
  | NoUpdate
  | Update('state)
  | UpdateWithSideEffects(
      'state,
      self('action, 'state) => option(unit => unit),
    )
  | SideEffects(self('action, 'state) => option(unit => unit))
and self('action, 'state) = {
  send: 'action => unit,
  state: 'state,
};

let noUpdate: update('a, 'b);
let update: 'a => update('b, 'a);
let updateWithSideEffects:
  ('a, self('b, 'a) => option(unit => unit)) => update('b, 'a);
let sideEffects: (self('a, 'b) => option(unit => unit)) => update('a, 'b);

let useReducer:
  ('state, ('action, 'state) => update('action, 'state)) =>
  ('state, 'action => unit);

let useReducerWithMapState:
  (unit => 'state, ('action, 'state) => update('action, 'state)) =>
  ('state, 'action => unit);
