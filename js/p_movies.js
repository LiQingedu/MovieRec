function p_start(n){
  var p_movies;

  p_movies={
    "pop1":[
      {
        Title:'1917',
        Plot:'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
        Genre:'Drama, War',
        Year:'2019'
      },
      {
        Title:'Parasite',
        Plot:'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.',
        Genre:'Comedy, Drama, Thriller',
        Year:'2019'
      },
      {
        Title: 'Inception',
        Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        Genre:'Action, Adventure, Sci-Fi',
        Year:'2010'
      },
      {
        Title:'Avengers-Endgame',
        Plot:'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
        Genre:'Action, Adventure, Drama',
        Year:'2019'
      },
      {
        Title:'Green Book ',
        Plot:'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.',
        Genre:'Biography, Comedy, Drama',
        Year:'2018'
      }

    ],
    "pop2":[
      {
        Title:'Avengers-Endgame',
        Plot:'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
        Genre:'Action, Adventure, Drama',
        Year:'2019'
      },
      {
        Title:'Green Book ',
        Plot:'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.',
        Genre:'Biography, Comedy, Drama',
        Year:'2018'
      },

      {
        Title:'The Shawshank Redemption',
        Plot:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        Genre:'Drama',
        Year:'1994'
      }
    ],
    "pop3":[
      {
        Title:'Forrest Gump',
        Plot:'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        Genre:'Drama, Romance',
        Year:'1994'
      },
      {
        Title:'Ford v Ferrari',
        Plot:'American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.',
        Genre:'Action, Biography, Drama',
        Year:'2019'
      },
      {
        Title: 'Interstellar',
        Plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.',
        Genre:'Adventure, Drama, Sci-Fi',
        Year:'2014'
      }
    ]
  };

var title=p_movies.pop1[n].Title;
var plot=p_movies.pop1[n].Plot;
var genre=p_movies.pop1[n].Genre;
var year=p_movies.pop1[n].Year;

var idx=3*n+1;
document.getElementById("title"+idx).innerHTML=title;
document.getElementById("plot"+idx).innerHTML=plot;
document.getElementById("genre"+idx).innerHTML=genre;
document.getElementById("year"+idx).innerHTML=year;
}
