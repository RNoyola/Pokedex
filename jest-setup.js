import '@testing-library/react-native/extend-expect'
import { setupServer } from 'msw/native'
import { http, HttpResponse, delay } from 'msw'
// import { handlers } from './handlers'

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon*', async () => {
    // await delay(150)
    return HttpResponse.json({
      "count": 1302,
      "next": "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
      "previous": null,
      "results": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
          "name": "venusaur",
          "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
          "name": "charmander",
          "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
          "name": "charmeleon",
          "url": "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
          "name": "charizard",
          "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
          "name": "squirtle",
          "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
          "name": "wartortle",
          "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
          "name": "blastoise",
          "url": "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
          "name": "caterpie",
          "url": "https://pokeapi.co/api/v2/pokemon/10/"
        }
      ]
    })
  }),
  http.get('https://pokeapi.co/api/v2/ability/*', async () => {
    // await delay(150)
    return HttpResponse.json({
      effect_entries: [{
        effect: "do some damage to a pokemon",
        language: {
          name: "en"
        }
      }]
    })
  }),
  http.get('https://pokeapi.co/api/v2/type/*', async () => {
    return HttpResponse.json({
      damage_relations: {
        double_damage_from: [
          {
            name: "normal"
          },{
            name: "water"
          }
        ],
        double_damage_to: [
          {
            name: "fire"
          },{
            name: "dragon"
          }
        ],
        half_damage_from: [
          {
            name: "electric"
          },{
            name: "bug"
          }
        ],
        half_damage_to: [
          {
            name: "fairy"
          },{
            name: "ghost"
          }
        ],
        no_damage_from: [
          {
            name: "steel"
          },{
            name: "dark"
          }
        ],
        no_damage_to: [
          {
            name: "none"
          }
        ],
        language: {
          name: "en"
        }
      }
    })
  }),
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

jest.mock("@react-native-async-storage/async-storage", () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
