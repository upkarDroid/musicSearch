import { ResultsReducer } from "../searchResults";
import search from "../searchReducer";
import isFetchingReducer from "../isFetchingReducer";
import errorReducer from "../errorReducer";
import expectExport from "expect";

import {
  FETCH_RESULTS_ERROR,
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_SUCCESS,
  SET_SEARCH_TERM
} from "../../constants";

describe("test Search reducer", () => {
  const initState = ""; //initial state
  const searchTerm = "senorita";
  test("Set SearchTerm", () => {
    const finalState = search(initState, { type: SET_SEARCH_TERM, searchTerm });
    expect(finalState).toEqual(searchTerm);
  });

  test("SearchTermShould remain same for incorrect action type", () => {
    const finalState = search(initState, {
      type: "test_incorrect",
      searchTerm
    });
    expect(finalState).toEqual(initState);
  });
});

describe("Test isFetching Reducer", () => {
  const initState = false;

  test("should be true", () => {
    const finalState = isFetchingReducer(initState, {
      type: FETCH_RESULTS_PENDING,
      status: true
    });

    expect(finalState).toBe(true);
  });
  test("should be false", () => {
    const finalState = errorReducer(initState, {
      type: FETCH_RESULTS_PENDING,
      status: false
    });

    expect(finalState).toBe(false);
  });

  test("should remain unchanged", () => {
    const finalState = errorReducer(initState, {
      type: "test",
      status: false
    });

    expect(finalState).toBe(initState);
  });
});

describe("errorReducer tests", () => {
  const initState = false;

  test("should be true", () => {
    const finalState = errorReducer(initState, {
      type: FETCH_RESULTS_ERROR,
      error: true
    });

    expect(finalState).toBe(true);
  });
  test("should be false", () => {
    const finalState = isFetchingReducer(initState, {
      type: FETCH_RESULTS_ERROR,
      error: false
    });

    expect(finalState).toBe(false);
  });

  test("should remain unchanged", () => {
    const finalState = isFetchingReducer(initState, {
      type: "test",
      error: false
    });

    expect(finalState).toBe(initState);
  });
});

describe("Testnig ResultsReducer", () => {
  const initState = [];

  test("should populate new results", () => {

    const results = [
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440857781, "trackId":1440857786, "artistName":"Jack Johnson", "collectionName":"In Between Dreams (Bonus Track Version)", "trackName":"Better Together", "collectionCensoredName":"In Between Dreams (Bonus Track Version)", "trackCensoredName":"Better Together", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/better-together/1440857781?i=1440857786&uo=4", "trackViewUrl":"https://music.apple.com/us/album/better-together/1440857781?i=1440857786&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/94/25/9c/94259c23-84ee-129d-709c-577186cbe211/mzaf_5653537699505456197.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2005-03-01T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":1, "trackTimeMillis":207679, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440857781, "trackId":1440857795, "artistName":"Jack Johnson", "collectionName":"In Between Dreams (Bonus Track Version)", "trackName":"Banana Pancakes", "collectionCensoredName":"In Between Dreams (Bonus Track Version)", "trackCensoredName":"Banana Pancakes", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/banana-pancakes/1440857781?i=1440857795&uo=4", "trackViewUrl":"https://music.apple.com/us/album/banana-pancakes/1440857781?i=1440857795&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/51/ba/f8/51baf8ca-e417-56e8-d6e1-4f02634e451c/mzaf_5766837215935557210.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2005-03-01T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":3, "trackTimeMillis":191854, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440857781, "trackId":1440857898, "artistName":"Jack Johnson", "collectionName":"In Between Dreams (Bonus Track Version)", "trackName":"Sitting, Waiting, Wishing", "collectionCensoredName":"In Between Dreams (Bonus Track Version)", "trackCensoredName":"Sitting, Waiting, Wishing", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/sitting-waiting-wishing/1440857781?i=1440857898&uo=4", "trackViewUrl":"https://music.apple.com/us/album/sitting-waiting-wishing/1440857781?i=1440857898&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/27/e6/28/27e628bb-17cb-eb94-87b4-d0f9b7ff1ebc/mzaf_20190415424710808.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2005-03-01T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":6, "trackTimeMillis":183721, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440857781, "trackId":1440857797, "artistName":"Jack Johnson", "collectionName":"In Between Dreams (Bonus Track Version)", "trackName":"Good People", "collectionCensoredName":"In Between Dreams (Bonus Track Version)", "trackCensoredName":"Good People", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/good-people/1440857781?i=1440857797&uo=4", "trackViewUrl":"https://music.apple.com/us/album/good-people/1440857781?i=1440857797&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/d2/bf/ba/d2bfba21-a41e-c4f0-cfb7-c83420a77336/mzaf_3810532136343461295.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2005-03-01T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":4, "trackTimeMillis":208509, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440854851, "trackId":1440855248, "artistName":"Jack Johnson", "collectionName":"Sleep Through the Static", "trackName":"Angel", "collectionCensoredName":"Sleep Through the Static", "trackCensoredName":"Angel", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/angel/1440854851?i=1440855248&uo=4", "trackViewUrl":"https://music.apple.com/us/album/angel/1440854851?i=1440855248&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/57/93/94/57939483-f16a-3fee-dd39-de7df73e8413/mzaf_5320784781866992253.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/100x100bb.jpg", "collectionPrice":11.99, "trackPrice":1.29, "releaseDate":"2008-02-02T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":4, "trackTimeMillis":122694, "country":"USA", "currency":"USD", "primaryGenreName":"Alternative", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1435611352, "trackId":1435611353, "artistName":"Jack Johnson", "collectionName":"From Here To Now To You", "trackName":"I Got You", "collectionCensoredName":"From Here To Now To You", "trackCensoredName":"I Got You", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/i-got-you/1435611352?i=1435611353&uo=4", "trackViewUrl":"https://music.apple.com/us/album/i-got-you/1435611352?i=1435611353&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/14/47/96/144796d9-8777-c9ec-b795-18f266e53dbb/mzaf_8641270105167546319.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/87/00/83/8700835d-d21f-d862-d816-62966095521e/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/87/00/83/8700835d-d21f-d862-d816-62966095521e/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/87/00/83/8700835d-d21f-d862-d816-62966095521e/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2013-06-10T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":12, "trackNumber":1, "trackTimeMillis":179896, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440857781, "trackId":1440857908, "artistName":"Jack Johnson", "collectionName":"In Between Dreams (Bonus Track Version)", "trackName":"Breakdown", "collectionCensoredName":"In Between Dreams (Bonus Track Version)", "trackCensoredName":"Breakdown", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/breakdown/1440857781?i=1440857908&uo=4", "trackViewUrl":"https://music.apple.com/us/album/breakdown/1440857781?i=1440857908&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/85/ae/a8/85aea863-ed49-6ab9-bf58-cee20cd312fc/mzaf_4839543551345827301.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2005-03-01T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":11, "trackTimeMillis":212986, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440857781, "trackId":1440857917, "artistName":"Jack Johnson", "collectionName":"In Between Dreams (Bonus Track Version)", "trackName":"Do You Remember", "collectionCensoredName":"In Between Dreams (Bonus Track Version)", "trackCensoredName":"Do You Remember", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/do-you-remember/1440857781?i=1440857917&uo=4", "trackViewUrl":"https://music.apple.com/us/album/do-you-remember/1440857781?i=1440857917&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/da/c5/2d/dac52de0-55e9-8585-f91c-f92ffc519a59/mzaf_7471265503660630513.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2005-03-01T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":13, "trackTimeMillis":144006, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":1440851963, "trackId":1440851968, "artistName":"Jack Johnson", "collectionName":"To the Sea (Bonus Track Version)", "trackName":"You and Your Heart", "collectionCensoredName":"To the Sea (Bonus Track Version)", "trackCensoredName":"You and Your Heart", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/you-and-your-heart/1440851963?i=1440851968&uo=4", "trackViewUrl":"https://music.apple.com/us/album/you-and-your-heart/1440851963?i=1440851968&uo=4", 
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/16/10/ff/1610fffd-afb3-c914-ab3c-b58ba93d06b1/mzaf_356097296229876349.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/42/24/53/422453e1-9a78-34e6-6491-3c54469c28ec/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/42/24/53/422453e1-9a78-34e6-6491-3c54469c28ec/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/42/24/53/422453e1-9a78-34e6-6491-3c54469c28ec/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2010-04-06T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":1, "trackTimeMillis":192853, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}, 
        {"wrapperType":"track", "kind":"song", "artistId":909253, "collectionId":906900960, "trackId":906900983, "artistName":"Jack Johnson", "collectionName":"Brushfire Fairytales (Remastered) [Bonus Version]", "trackName":"Flake", "collectionCensoredName":"Brushfire Fairytales (Remastered) [Bonus Version]", "trackCensoredName":"Flake", "artistViewUrl":"https://music.apple.com/us/artist/jack-johnson/909253?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/flake/906900960?i=906900983&uo=4", "trackViewUrl":"https://music.apple.com/us/album/flake/906900960?i=906900983&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music4/v4/65/a0/84/65a084ac-bae3-5880-f9a4-32314568916c/mzaf_416028643252077482.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music5/v4/e9/6f/ef/e96fefcd-fac9-ebb5-59ce-f0229c59b190/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music5/v4/e9/6f/ef/e96fefcd-fac9-ebb5-59ce-f0229c59b190/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music5/v4/e9/6f/ef/e96fefcd-fac9-ebb5-59ce-f0229c59b190/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":0.99, "releaseDate":"2001-02-06T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":5, "trackTimeMillis":283400, "country":"USA", "currency":"USD", "primaryGenreName":"Rock", "isStreamable":true}];
    const finalState = ResultsReducer(initState, {
      type: FETCH_RESULTS_SUCCESS,
      results
    });

    expect(finalState).toEqual(results)
  });
});
