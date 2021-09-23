import { createStore } from 'redux';

const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

export const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "GATHER":
      
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1,
        };

    case "TRAVEL":
        if (state.supplies > 0) {
          return {
            ...state,
            supplies: state.supplies - 20 * action.payload,
            distance: state.distance + 10 * action.payload,
            days: state.days + action.payload,
          };
        } else {
          alert("not enough supplies, try to gather more!");
          return state;
        }
        
    case "TIPPED_WAGON":
        return {
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1,
        };

    case "SELL":
        if (state.supplies < 20) {
          alert("not enough supplies");
          return state;
        } else {
          return {
            ...state,
            supplies: state.supplies - 20,
            cash: state.cash + 5,
          };
        }
    case "BUY":
        if (state.cash < 15) {
          console.log("not enough cash");
        }
        return {
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash - 15,
        };
    case "THEFT":
        return {
          ...state,
          cash: (state.cash = Math.round(state.cash / 2)),
        };

    default: {
      return state;
    }
  }
};

export const store = createStore(reducer);

// let wagon = reducer(undefined, {});
// console.log(wagon);

// wagon = reducer(wagon, {
//   type: "travel",
//   payload: 1,
// });
// console.log(wagon);

// wagon = reducer(wagon, {
//   type: "gather",
// });
// console.log(wagon);

// wagon = reducer(wagon, {
//   type: "tippedWagon",
// });
// console.log(wagon);

// wagon = reducer(wagon, {
//   type: "travel",
//   payload: 3,
// });
// console.log(wagon);

// wagon = reducer(wagon, {
//   type: "theft",
// });
// console.log(wagon);

// //reset
// wagon = reducer(undefined, {});
// console.log(wagon);

// wagon = reducer(wagon, {
//   type: "travel",
//   payload: 4,
// });
// console.log(wagon);
