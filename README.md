# Watch What Where: A comprehensive movies/series app

**1. Project description**

    Ever faced with the problem of what to watch in your free time?
    Or having trouble finding where to watch it once you have decided?
    These dilemmas were the inspiration for this app which would hopefully put an end to this age old first world problem.

    In the app, users can browse the various pages in the navbar to discover interesting shows for their viewing.
    The app includes 3 main pages: Home, Series and Movies.
    As the page names suggest, series and movies only contain content of their respective types while home contains both.
    There is also a search feature specific to each page that only returns results applicable to them.

    On each page, there is a featured banner at the top which showcases a random trending show.
    Specifically for the Series and Movies pages, this featured banner also changes in accordance to the selected genre.

    Below the featured banner are 2 main scrollbars: Trending and Top rated.
    These scrollbars showcase multiple relevant shows that upon hover pops out with more information.
    Each scrollbar has an average of 20 shows and any results overflowing off page can be revealed with the scroll arrows.
    The Series and Movies pages also has an additional scrollbar which appears upon selection of a genre.

    All movie banners be it in featured or the scollbars include a Trailer and Info button.
    The Trailer button upon click will bring up relevant trailers either on YouTube or Vimeo.
    The Info button on the other hand brings up key information on the show.
    Under this information pop up, users are also able to input their region to discover available streaming and purchase sites.

    With that, users no longer have to ponder, Watch What Where?

**2. Technologies used**

    React, HTML, CSS and Javascript gave life to this app.
    Bootstrap and Materials UI libraries contributed to the aesthetics.
    YouTube and Vimeo allowed media such as trailers to be played.

**3. How to use**

    The app can be accessed via the Vercel app url link in the project's repository.

**4. Approach taken**

    The project was broken down into 3 phases: completion of the Minimum Viable Product(MVP) and 2 stretch goals.

**Minimum Viable Product(MVP)**

    The MVP of the project was a barebones version of the app.
    This entailed an interface with minimal aesthetics but working navigational control and information retrieval.
    The app at this phase included the following components:

    -Navbar
    -Featured banner
    -Scrollbars
    -Trailer modal
    -Information modal

**Stretch goal 1: Search feature**

    The first stretch goal was to implement the search feature.
    Progress here included:

    -Seach input
    -Search section

**Stretch goal 2: Additional pages and Aesthetics**

    The second stretch goal was to add the Series/Movies pages and enhance aesthetics.
    Progress here included:

    -Series/Movies pages
    -Navbar background change on scroll
    -Show banner fade effect
    -Scrollbar carousell
    -modal closure on background click

**5. Unsolved problems**

    The functionality of the app is stable.
    Bug testing thus far has not returned any significant errors.

**6. Other potential features**

    -Responsive web design
        Retool the app to enable dynamic website changes in accordance to screen size and orientation.
    -Cast showcase
        Include a section on cast information in the more info pop up.
    -Search results pop up
        Similar to the scrollbars on the various pages, enable pop ups for brief information on search results.

**7. Credits**

    -TMDB
        Special thanks to TMBD for the comprehensive API and database without which the app would not have been possible
