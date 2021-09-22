const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200,
  }

//action sets - no params
const gather = () => {
    return {
        type: 'gather'
    }
};

const tippedWagon = () => {
    return {
        type: 'tippedWagon'
    }
};

const sell = () => {
    return {
        type: 'sell'
    }
};

const buy = () => {
    return {
        type: 'buy'
    }
};

const theft = () => {
    return {
        type: 'theft'
    }
};

//action sets w/ params
const travel = (payload) => {
    return {
        type: 'travel',
        payload
    }
};
  
//reducer function
  const reducer = (state = initialWagonState, action) => {
    switch(action.type){
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        };
      }
        break;
      case 'travel': {
        if(state.supplies > 0){
          return {
            ...state,
            supplies: state.supplies - (20 * action.payload),
            distance: state.distance + (10 * action.payload),
            days: state.days + action.payload
          };
        }
        console.log('not enough supplies');
        return state;
      }
        break;
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1
        };
      }
        break;
      case 'sell': {
        if(state.supplies < 20){
          console.log('not enough supplies');
        }
        return {
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash + 5
        };
      }
        break;
      case 'buy': {
        if(state.cash < 15){
          console.log('not enough cash')
        }
        return {
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash - 15
        };
      }
        break;
      case 'theft': {
        return {
          ...state,
          cash: state.cash = Math.round(state.cash / 2)
        };
      }
        break;
      default: {
        return state;
      }
    }
  };
  
  let wagon = reducer(undefined, {});
  console.log(wagon);
  
  wagon = reducer(wagon, travel(1));
  console.log(wagon);
  
  wagon = reducer(wagon, gather());
  console.log(wagon);
  
  wagon = reducer(wagon, tippedWagon());
  console.log(wagon);
  
  wagon = reducer(wagon, travel(3));
  console.log(wagon);
  
  wagon = reducer(wagon, theft());
  console.log(wagon);
  
  //reset
  wagon = reducer(undefined, {});
  console.log(wagon);
  
  wagon = reducer(wagon, travel(4));
  console.log(wagon);

  