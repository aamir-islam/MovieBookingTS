import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';


const getMovieData = require('./__mock__/index')
const axios = require('axios');

jest.mock('axios');

it('returns the title of the first movie', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: 507086,
        poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        title: "Jurassic World Dominion",
      },
      {
        id: 759175,
        poster_path: "/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
        title: "The Princess",
      },
      {
        id: 919355,
        poster_path: "/uSMJbYhaEpQtF9vkMhpgljc0CA4.jpg",
        title: "Dragon Knight",
      },
    ],

  });

  const title = await getMovieData();
  expect(title[2].title).toEqual('Dragon Knight');

});
it('returns the path of the second movie', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: 507086,
        poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        title: "Jurassic World Dominion",
      },
      {
        id: 759175,
        poster_path: "/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
        title: "The Princess",
      },
      {
        id: 919355,
        poster_path: "/uSMJbYhaEpQtF9vkMhpgljc0CA4.jpg",
        title: "Dragon Knight",
      },
    ],

  });

  const path = await getMovieData()
  expect(path[1].poster_path).toEqual('/9pCoqX24a6rE981fY1O3PmhiwrB.jpg')
});

