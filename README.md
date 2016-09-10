Now This Is What I Call Tic-Tac-Toe 2016

Presented by General Assembly, Neural Shunt Media, and Github Pages.
Now This Is What I Call Tic-Tac-Toe 2016 is a compilation of your
favorite tic-tac-toe games and features of 2016.

Available now at: [https://nlkassad.github.io/tic-tac-toe]

Now This Is What I Call Tic-Tac-Toe 2016 features code base from
HTML, CSS, Sass, Javascript, jQuery, Ruby on Rails and code from
Ben Lewis, General Assembly and referenced code notated on the
bottom of this document.

A limited edition of the wireframe for this release is available on
Google Drive and it showcases all of the advanced functionality
available in Google Draw:
[https://docs.google.com/drawings/d/1ArvG36f3ywk9l-jYaZ3Gyca-AXdccFCqmJMelYxXme0/edit]
Project planning was done in Trello, access is currently only
available to members of the Now This Is What I Call Tic-Tac-Toe VIP
fan club
[https://trello.com/b/wZzvEVFT/tic-tac-toe]

Project Planning outline
Rough wireframe
Data structure outline - list of key features to meet requirements
Initial design in HTML
Design adjusted to meet mobile first vertical page layout
Conversion of GA authentication interface to use locally
Creation and iteration of HTML game board
Build out javascript to link board and event functionality to
game model
Connect authentication to online game app back end
Restructure game interface to connect with online game app
Convert game logic and win condition checks to work with game
Add game reporting from online app
Add notifications for users
Correct horrible problems with win checker
Clean up messy messy code

Problem solving and major issues:
For most of this project I designed features by building a quick
part of a feature ==> testing ==> looking for references for working
models ==> updating ==> minimizing the test components ==> expanding
the feature until it was working.
I heavily used logs during the build out and did a significant amount
of log and error comparison to identify differences in working and
broken features. A good portion of my testing and bug fixing was done
with the win condition checks. This was built out by getting an array
of the locations of moves, filtering them by user, retaining the index
values in the filtered information, running a comparison check against
valid win states, and setting the true or false win state.
With the array comparison I needed to break it down into very small
sections and switch between versions a number of times. In isolating an
issue with returing false positives on the win state I needed to remove
the true false win returns to correct an accidental loop break, confirm
that there weren't any issues with the game state index array and
check for the values that were being returned from the win condition
array. A major issue that I discovered and resolved was a step where
arraz. the checker was returning the wrong value and combining the
arrba. information from the index array too early.

Unresolved issues:
Authentication layout - not centered, font sizes aren't a good fit.
Center token markers on grid - currently they are positioned towards
the top of their grids
Add additional game reporting - Add win and loss totals for games-played
Sign up and sign in as a single event - sign in requires two actions
for a new user. combine these into a single action
Add auth check for sign out event handler - does not check for
credentials, add check to clear appropriate credentials for
current user.
