// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function update(state) {
  return /* Update */Block.__(0, [state]);
}

function updateWithSideEffects(state, cb) {
  return /* UpdateWithSideEffects */Block.__(1, [
            state,
            cb
          ]);
}

function sideEffects(cb) {
  return /* SideEffects */Block.__(2, [cb]);
}

function useReducer(initialState, reducer) {
  var match = React.useReducer((function (fullState, action) {
          var match = Curry._2(reducer, action, fullState.state);
          if (typeof match === "number") {
            return fullState;
          } else {
            switch (match.tag | 0) {
              case /* Update */0 :
                  return {
                          state: match[0],
                          sideEffects: fullState.sideEffects
                        };
              case /* UpdateWithSideEffects */1 :
                  return {
                          state: match[0],
                          sideEffects: {
                            contents: Belt_Array.concat(fullState.sideEffects.contents, [match[1]])
                          }
                        };
              case /* SideEffects */2 :
                  return {
                          state: fullState.state,
                          sideEffects: {
                            contents: Belt_Array.concat(fullState.sideEffects.contents, [match[0]])
                          }
                        };
              
            }
          }
        }), {
        state: initialState,
        sideEffects: {
          contents: []
        }
      });
  var send = match[1];
  var match$1 = match[0];
  var sideEffects = match$1.sideEffects;
  var state = match$1.state;
  React.useEffect((function () {
          if (sideEffects.contents.length !== 0) {
            var cancelFuncs = Belt_Array.keepMap(sideEffects.contents, (function (func) {
                    return Curry._1(func, {
                                send: send,
                                state: state
                              });
                  }));
            sideEffects.contents = [];
            if (cancelFuncs.length !== 0) {
              return (function (param) {
                        return Belt_Array.forEach(cancelFuncs, (function (func) {
                                      return Curry._1(func, /* () */0);
                                    }));
                      });
            } else {
              return ;
            }
          }
          
        }), [sideEffects]);
  return /* tuple */[
          state,
          send
        ];
}

function useReducerWithMapState(getInitialState, reducer) {
  var match = React.useReducer((function (fullState, action) {
          var match = Curry._2(reducer, action, fullState.state);
          if (typeof match === "number") {
            return fullState;
          } else {
            switch (match.tag | 0) {
              case /* Update */0 :
                  return {
                          state: match[0],
                          sideEffects: fullState.sideEffects
                        };
              case /* UpdateWithSideEffects */1 :
                  return {
                          state: match[0],
                          sideEffects: {
                            contents: Belt_Array.concat(fullState.sideEffects.contents, [match[1]])
                          }
                        };
              case /* SideEffects */2 :
                  return {
                          state: fullState.state,
                          sideEffects: {
                            contents: Belt_Array.concat(fullState.sideEffects.contents, [match[0]])
                          }
                        };
              
            }
          }
        }), /* () */0, (function (param) {
          return {
                  state: Curry._1(getInitialState, /* () */0),
                  sideEffects: {
                    contents: []
                  }
                };
        }));
  var send = match[1];
  var match$1 = match[0];
  var sideEffects = match$1.sideEffects;
  var state = match$1.state;
  React.useEffect((function () {
          if (sideEffects.contents.length !== 0) {
            var cancelFuncs = Belt_Array.keepMap(sideEffects.contents, (function (func) {
                    return Curry._1(func, {
                                send: send,
                                state: state
                              });
                  }));
            sideEffects.contents = [];
            if (cancelFuncs.length !== 0) {
              return (function (param) {
                        return Belt_Array.forEach(cancelFuncs, (function (func) {
                                      return Curry._1(func, /* () */0);
                                    }));
                      });
            } else {
              return ;
            }
          }
          
        }), [sideEffects]);
  return /* tuple */[
          state,
          send
        ];
}

var noUpdate = /* NoUpdate */0;

export {
  noUpdate ,
  update ,
  updateWithSideEffects ,
  sideEffects ,
  useReducer ,
  useReducerWithMapState ,
  
}
/* react Not a pure module */
