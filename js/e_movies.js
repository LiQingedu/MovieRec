function e_start(n){
var e_movies;

e_movies={
  "family":[
    {
      Title: 'Lightning Jack',
      Plot:
       'Lightning Jack Kane is an Australian outlaw in the wild west. During a bungled bank robbery he picks up mute Ben Doyle as a hostage. The two become good friends, with Jack teaching Ben how to rob banks, while they plan Jack\'s last heist.',
      Genre: 'Comedy, Western',
      Year: '1994'},
    {
      Title: 'Gospa',
  Plot:
   'In 1981 in Medjugorje (BA), a group of kids claim that Virgin Mary appeared to them on a hill. The local priest believes them and spreads the word. Religious tourism blossoms. The communist government is concerned and arrests the priest.',
  Genre: 'Drama',
  Year: '1995'},
    {
      Title: 'Mute Witness',
      Plot:
       'Billy Hughes, a mute makeup artist working on a slasher film being shot in Moscow, is locked in the studio after hours. While there she witnesses a brutal murder, and must first escape capture at that time, then keep from being killed before convincing authorities of what she\'s seen. Plot twists galore follow as Billy tries to stay alive.',
      Genre: 'Crime, Thriller',
      Year: '1995'
    },
    {
      Title: 'Naked in New York',
      Plot:
       'Naked in New York begins in the car of grown up Jake, he is talking to us about his girlfriend, Joanne, (watch for the facial expressions) and to whom you can turn to for help while facing life (\'your parents, nyaa, I don\'t think so\'). From there it flashes back to his memories of his parents, college, house across from a squirrel infested peanut factory, best friend, writing career and Joanne.',
      Genre: 'Comedy, Romance',
      Year: '1993'
    },
    {
      Title: 'Ghost World',
      Plot:
       'This is the story of Enid and Rebecca after they finish the high school. Both have problems relating to people and they spend their time hanging around and bothering creeps. When they meet Seymour who is a social outsider who loves to collect old 78 records, Enid\'s life will change forever.',
      Genre: 'Comedy, Drama',
      Year: '2001'
    }
  ],
  "sports":[
    {
      Title: "A Kid in King Arthur's Court",
  Plot: "Young Calvin Fuller is pulled into King Arthur's court by Merlin. His mission: to save Camelot. To do this he must overcome the villain known as Lord Belascoe, train to become a knight, and rescue the Princess Katherine, who has fallen in love with him. Ultimately, He must help Arthur regain his confidence before he can go home.",
  Genre: 'Adventure, Comedy, Family, Fantasy, Romance',
  Year: '1995'
    },
    {
      Title: 'Dumb and Dumber',
  Plot: 'Harry and Lloyd are two good friends who happen to be really stupid. The duo set out on a cross country trip from Providence to Aspen, Colorado to return a briefcase full of money to its rightful owner, a beautiful woman named Mary Swanson. After a trip of one mishap after another, the duo eventually make it to Aspen. But the two soon realize that Mary and her briefcase are the least of their problems.',
  Genre: 'Comedy',
  Year: '1994'
    },
    {
      Title: 'Forget Paris',
  Plot: 'Mickey Gordon is a basketball referee who travels to France to bury his father. Ellen Andrews, an American living in Paris, works for the airline Mickey flies on. They meet and fall in love, but their relationship goes through many difficult patches. The story is told in flashback by their friends at a restaurant waiting for them to arrive.',
  Genre: 'Comedy, Romance',
  Year: '1995'
    },
    {
      Title: 'Hard Target',
 Plot: 'Natasha Binder comes to New Orleans looking for her father, who has gone missing. In doing so, she meets a very hard man called Chance. He helps her find out that her father was killed by an organisation who sell the opportunity to hunt human prey. They are taking advantage of a police strike in New Orleans. Will the Muscles from Brussels win through?',
 Genre: 'Action, Adventure, Drama, Thriller',
 Year: '1993'
    },
    {
      Title: 'Red Rock West',
  Plot: 'When a promised job for Texan Michael fails to materialise in Wyoming, Mike is mistaken by Wayne to be the hitman he hired to kill his unfaithful wife, Suzanne. Mike takes full advantage of the situation, collects the money and runs. During his getaway, things go wrong, and soon get worse when he runs into the real hitman, Lyle.',
  Genre: 'Crime, Drama, Thriller',
  Year: '1993'
    }
  ],
  "society":[
    {
      Title: 'Canadian Bacon',
  Plot:
   'The US economy is in a rut, and so is the president\'s approval rating. What we need is a good war, but the Russians aren\'t interested. Hey -- how about that big polite country to the north? Niagara Falls Sheriff Bud B. Boomer takes this all a bit too seriously, though.',
  Genre: 'Comedy',
  Year: '1995'
    },
    {Title: 'Captives',
  Plot:
   'A beautiful young dentist (Ormond) working in a tough British prison starts to become attracted to a violent inmate (Roth) after the break-up of her marriage, and embarks upon an illicit affair with him, with terrible consequences for all.',
  Genre: 'Crime, Drama, Romance, Thriller',
  Year: '1994'},
    {
      Title: 'A Walk in the Sun',
  Plot:
   'In the 1943 invasion of Italy, one American platoon lands, digs in, then makes its way inland to blow up a bridge next to a fortified farmhouse, as tension and casualties mount. Unusually realistic picture of war as long quiet stretches of talk, punctuated by sharp, random bursts of violent action whose relevance to the big picture is often unknown to the soldiers.',
  Genre: 'Drama, War',
  Year: '1945'
    },
    {Title: 'All Over the Guy',
  Plot:
   '"All Over The Guy" is a contemporary romantic comedy about the quest to find the "one" when "the one" doesn\'t know he\'s the "one." It explores the unlikely pairing of two 20-somethings thrown together by their respective best friends in hopes of igniting their own romance. They do everything they can to NOT fall in love, but finally they overcome the dysfunction of their parents and surrender to their hearts.',
  Genre: 'Comedy, Romance',
  Year: '2001'},
    {
      Title: 'A Low Down Dirty Shame',
  Plot:
   'A black detective becomes embroiled in a web of danger while searching for a fortune in missing drug money.During the course of his investigation, he encounters various old connections, ultimately confronting the criminal responsible for Shame\'s expulsion from the force. He must also deal with two women, Angela, a beautiful old flame, and Peaches, his energetic but annoying sidekick.',
  Genre: 'Action, Comedy, Crime',
  Year: '1994'
    }
  ],
  "pets":[
    {
      Title: 'Escape from L.A.',
  Plot:
   'The year is 2013 and Snake Plissken is back but this time it\'s L.A., which through the agency of earthquakes has become an island of the damned. But something has gone wrong in this new moral order, because the President\'s daughter has absconded to L.A. with a detonation device, and Snake is commandeered to retrieve it. But just below the surface there is a coiled Snake ready to strike.',
  Genre: 'Action, Adventure, Sci-Fi, Thriller',
  Year: '1996'
    },
    {
      Title: 'Jumanji',
  Plot:
   'After being trapped in a jungle board game for 26 years, a Man-Child wins his release from the game. But, no sooner has he arrived that he is forced to play again, and this time sets the creatures of the jungle loose on the city. Now it is up to him to stop them.',
  Genre: 'Adventure, Comedy, Family, Fantasy',
  Year: '1995'
    },
    {
      Title: '2 Days in the Valley',
  Plot:
   'John Herzfeld deftly welds together a multitude of subplots-- a loser hitman and a cool assassin involved in an insurance scam; a washed-up director, turned suicidal, if only he had someone to care for his beloved dog; a snooty art dealer, wracked by kidney stones, cared for by his devoted assistant; a grungy deranged vice cop, now partnered with a fresh-faced rookie; and two beautiful and jealous women entangled in their deadly scheme--into a spoof of the crime thriller genre.',
  Genre: 'Comedy, Crime, Thriller',
  Year: '1996'
    },
    {
      Title: 'A Close Shave',

  Plot:
   'When Wallace and Gromit go over to wash windows, Wallace falls in love with a wool store owner named Wendolene. Meanwhile, Gromit is framed for killing sheep and is put in jail. So with help from the sheep and Wendolene, Wallace must get him out of prison.',
  Genre: 'Animation, Comedy, Crime, Family',
  Year: '1995'
    },
    {
      Title: 'Old Yeller',
  Plot:
   'Young Travis Coates is left to take care of the family ranch with his mother and younger brother while his father goes off on a cattle drive in the 1860\'s. When a yellow mongrel comes for an uninvited stay with the family, Travis reluctantly adopts the dog. After a series of scrapes involving raccoons, snakes, bears, and all manner of animals, Travis grows to love and respect Old Yeller, who comes to have a profound effect on the boy\'s life.',
  Genre: 'Adventure, Drama, Family, Western',
  Year: '1957'
    }
  ],
  "health":[
    {
      Title: 'Jack',
  Plot:
   'The movie is about a boy with a unique aging disorder: one that makes him age 4 times faster than normal. It picks up when Jack (Robin Williams) is 10 years old, but looks 40. He tries to go to public school for the first time, and to become friends with kids his own age. His physical appearance causes him lots of problems, however.',
  Genre: 'Comedy, Drama, Fantasy',
  Year: '1996'
    },
    {
      Title: 'L\'Enfer',
  Plot:
   'Paul, an irritable and stressed-out hotel manager, begins to gradually develop paranoid delusions about his wife\'s infidelity. As he succumbs to green-eyed jealousy, his life starts to crumble. Each step on his downward spiral to madness seems to accelerate, driving him further along the path to a personal hell. Finally, the former shell of his personality cracks completely, with tragic consequences.',
  Genre: 'Crime, Drama, Thriller',
  Year: '1994'
    },
    {
      Title: 'In the Realm of the Senses',
  Plot:
   'Based on a true story set in pre-war Japan, a man and one of his servants begin a torrid affair. Their desire becomes a sexual obsession so strong that to intensify their ardor, they forsake all, even life itself.',
  Genre: 'Drama, Romance',
  Year: '1976'
    },
    {
      Title: 'Caught',
  Plot:
   'Joe and Betty run a fish market and have sunk into a comfortable, if somewhat boring life. Enter the drifter Nick, who takes a job in the store and a place in their home. He proceeds to awaken Joe\'s hope in the future as well as Betty\'s sexual passions. Until their son Danny returns home and notices the changes...',
  Genre: 'Drama, Thriller',
  Year: '1996'
    },
    {
      Title: 'Exotica',
  Plot:
   'This psychological thriller is true to its subjects as well as being complex, dynamic, and overly dramatic. How something so long ago, seemingly trivial, years later with more significant trauma, turns repressed emotions into a dysfunctional life and distorted thinking. This is all merged into a psychological menagerie that unfolds piece by piece to perfection.',
  Genre: 'Drama',
  Year: '1994'
    }
  ],
  "travel":[
    {
      Title: 'Money Train',
  Plot:
   'Two foster brothers work as transit cops. While one\'s life is as good as it gets, the other\'s is a pit. After losing his job, getting dumped by his brother, and getting the crap kicked out of him by a loan shark for the umpteenth time, He implements his plan to steal the "money train," a train carrying the New York Subway\'s weekly revenue. But when things go awry, will his brother be able to save him in time?',
  Genre: 'Action, Comedy, Crime, Drama, Thriller',
  Year: '1995'
    },
    {
      Title: 'Muppet Treasure Island',
  Plot:
   'The Muppets are back into action in another movie based on a novel written by Robert Louis Stevenson. Kermit the Frog and his colleagues go on a warfare against ruthless pirates. They also share their problem-solving journey on sea to rescue a treasure.',
  Genre: 'Action, Adventure, Comedy, Family, Musical, Romance',
  Year: '1996'
    },
    {
      Title: 'City Hall',
  Plot:
   'A young boy dies from a stray bullet during a shootout between a cop and mob family member who had previously been supiciously given probabtion, only to break its terms. New York\'s Deputy Mayor, Kevin Calhoun starts digging for information.',
  Genre: 'Drama',
  Year: '1996'
    },
    {
      Title: 'Cutthroat Island',
 Plot:
  'Morgan Adams and her slave, William Shaw, are on a quest to recover the three portions of a treasure map. Unfortunately, the final portion is held by her murderous uncle, Dawg. Her crew is skeptical of her leadership abilities, so she must complete her quest before they mutiny against her. This is made yet more difficult by the efforts of the British crown to end her piratical raids.',
 Genre: 'Action, Adventure, Comedy',
 Year: '1995'
    },
    {
      Title: 'Death in Brunswick',
  Plot:
   'Carl Fitzgerald is down-on-his-luck until he meets Sophie, a beautiful Greek girl. He gets a job as a cook, but accidentally kills fellow worker Mustafa. He turns to his unscrupulous best friend for help and together they attempt to dispose of the body.',
  Genre: 'Comedy, Crime, Thriller',
  Year: '1990'
    }
  ],
  "education":[
    {
      Title: '2 Friends',
  Plot:
   'Two girls, at 15; Louise, in a prestigious girls\' high school, and Kelly, who was admitted but forbidden by her father to attend. This is the end of their friendship, and from here the film progresses in a backwards time line to a final freeze frame of the girls at the peak of their closeness.',
  Genre: 'Drama',
  Year: '1986'
    },
    {
      Title: 'Big Bully',
  Plot:
   'David Leary was bullied by Rosco when he was in elementary school. But he got even on the day his parents moved out of town. Now twenty years later, David, who is a successful writer, is invited back to his home town to teach. Everything is great until Rosco, who is still in town, recognizes him. Now suddenly someone is playing mean practical jokes on him. Isn\'t David a little too old to be running to the Principal saying "Rosco\'s picking on me." ?',
  Genre: 'Comedy, Thriller',
  Year: '1996'
    },
    {
      Title: 'High School High',
  Plot:
   'Richard Clark has just left the well-known Wellington Academy to teach at Marion Barry High School. Now, he will try to inspire the D-average students into making good grades and try to woo a fellow teacher.',
  Genre: 'Comedy, Crime, Romance',
  Year: '1996'
    },
    {
      Title: 'Kaspar Hauser',
  Plot:
   'Kaspar Hauser is the son of the duke of Baden. At the age of one he was swapped by another baby that has been killed right after the change. The real Kaspar Hauser grew up in prison without light, social contacts and education for more than ten years. As teenager he came to public again. First he had to learn a language and other basic skills. Before Kaspar Hauser, meanwhile well educated, found out his real idendity, he was killed.',
  Genre: 'Drama, History, Mystery',
  Year: '1993'
    },
    {
      Title: 'Above the Rim',
  Plot:
   'Story of Kyle-Lee Watson, a promising high school basketball star, and his relationships with Birdie, a powerful drug dealer, and Birdie\'s brother, Thomas \'Shep\' Sheppard, himself once a promising high school star at Kyle\'s school, now employed as a security guard.',
  Genre: 'Crime, Drama, Sport, Thriller',
  Year: '1994'
    }
  ],
  "business":[
    {Title: 'Beat the Devil',
  Plot: "A quartet of international crooks -- Peterson, O'Hara, Ross and Ravello -- is stranded in Italy while their steamer is being repaired. With them are the Dannreuthers. The six are headed for Africa, presumably to sell vacuum cleaners but actually to buy land supposedly loaded with uranium. They are joined by others who apparently have similar designs.",
  Genre: 'Action, Adventure, Comedy, Crime, Drama, Romance',
  Year: '1953'},
    {
      Title: 'Carried Away',
  Plot: 'Joseph Svenden is a middle-aged school-teacher who lives on a farm with his dying mother. In his simple life there are no excitements, even in long-time relationship with a widow. However, when seventeen-year-old beauty enrolls in his class, Joseph would soon end up in her arms. After that, Joseph is torn between the passion and feeling that he is doing something wrong.',
  Genre: 'Drama, Romance',
  Year: '1996'
    },
    {
      Title: 'Haiku Tunnel',
  Plot: "Haiku Tunnel is a frenetic office comedy about a neurotic male secretary who is a terrific temp but a horrible perm. When his new boss (a tax attorney who just may be Satan) gives him 17 very important letters to mail out, he doesn't, and the ensuing complications bring him face-to-face with a lifetime of personal demons.",
  Genre: 'Comedy',
  Year: '2001'
    },
    {
      Title: "L'associé",
  Plot: 'An unemployed investor creates a fictious business partner to attempt to improve business. Eventually, his creation gets out of control as his business becomes successful and his wife announces that she is in love with the partner and his son wishes the partner was his father -- although no one has ever seen him. To regain control, the man decides to "kill" his imaginary partner and is arrested for the murder.',
  Genre: 'Comedy',
  Year: '1979'
    },
    {
      Title: 'Pootie Tang',
  Plot: 'Pootie Tang, the musician/actor/folk hero of the ghetto, is chronicled from his early childhood to his battles against the evil Corporate America, who try to steal his magic belt and make him sell out by endorsing addictive products to his people. Pootie must learn to find himself and defeat the evil corporation for all the young black children of America, supatime.',
  Genre: 'Action, Adventure, Comedy, Musical',
  Year: '2001'
    }
  ],
  "food":[
    {Title: 'Boys',
  Plot:
   'Patty Vare falls off a horse and is found unconscious by preparatory school student John Baker. He takes her to his dormitory. As he quickly discovers, she is hiding from something. For John this becomes a road to maturity and for Patty, it\'s a way back to love and tenderness.',
  Genre: 'Drama, Mystery, Romance',
  Year: '1996'},
    {
      Title: 'Bread and Chocolate',
  Plot:
   'Italian immigrant tries to become a member of Swiss society but fails as a waiter and even as a chicken plucker. He then becomes involved with shady wealthy character and tries to hide his Italian identity. He refuses to give up no matter how awful his situation.',
  Genre: 'Comedy, Drama',
  Year: '1974'
    },
    {
      Title: 'Faster, Pussycat! Kill! Kill!',
  Plot:
   'Three strippers seeking thrills encounter a young couple in the desert. After dispatching the boyfriend, they take the girl hostage and begin scheming on a crippled old man living with his two sons in the desert, reputedly hiding a tidy sum of cash. They become houseguests of the old man and try and seduce the sons in an attempt to locate the money, not realizing that the old man has a few sinister intentions of his own.',
  Genre: 'Action, Comedy',
  Year: '1965'
    },
    {
      Title: 'Gordy',
  Plot:
   'This is the story of a talking cute piglet named Gordy, who gets involved in a big quest to save his family from the slaughterhouse, where no pigs have ever returned. And it\'s all up to him to find and save them before they get turned into sausage!',
  Genre: 'Comedy, Drama, Family, Fantasy',
  Year: '1995'
    },
    {
      Title: 'Mrs. Parker and the Vicious Circle',
  Plot:
   'Dorothy Parker remembers the heyday of the Algonquin Round Table, a circle of friends whose barbed wit, like hers, was fueled by alcohol and flirted with despair.',
  Genre: 'Biography, Drama',
  Year: '1994'
    }
  ]
};

var eCat=localStorage.getItem("catSelect");
switch (eCat){
  case "family":
    var title=e_movies.family[n].Title;
    var plot=e_movies.family[n].Plot;
    var genre=e_movies.family[n].Genre;
    var year=e_movies.family[n].Year;
    break;

  case "society":
    var title=e_movies.society[n].Title;
    var plot=e_movies.society[n].Plot;
    var genre=e_movies.society[n].Genre;
    var year=e_movies.society[n].Year;
    break;
  case "society":
    var title=e_movies.society[n].Title;
    var plot=e_movies.society[n].Plot;
    var genre=e_movies.society[n].Genre;
    var year=e_movies.society[n].Year;
    break;
  case "pets":
    var title=e_movies.pets[n].Title;
    var plot=e_movies.pets[n].Plot;
    var genre=e_movies.pets[n].Genre;
    var year=e_movies.pets[n].Year;
    break;
  case "health":
    var title=e_movies.health[n].Title;
    var plot=e_movies.health[n].Plot;
    var genre=e_movies.health[n].Genre;
    var year=e_movies.health[n].Year;
    break;
  case "travel":
  var title=e_movies.travel[n].Title;
  var plot=e_movies.travel[n].Plot;
  var genre=e_movies.travel[n].Genre;
  var year=e_movies.travel[n].Year;
  break;
  case "education":
  var title=e_movies.education[n].Title;
  var plot=e_movies.education[n].Plot;
  var genre=e_movies.education[n].Genre;
  var year=e_movies.education[n].Year;
  break;
  case "business":
    var title=e_movies.business[n].Title;
    var plot=e_movies.business[n].Plot;
    var genre=e_movies.business[n].Genre;
    var year=e_movies.business[n].Year;
    break;
  case "food":
    var title=e_movies.food[n].Title;
    var plot=e_movies.food[n].Plot;
    var genre=e_movies.food[n].Genre;
    var year=e_movies.food[n].Year;
    break;
}


var idx=3*n+2;
document.getElementById("title"+idx).innerHTML=title;
document.getElementById("plot"+idx).innerHTML=plot;
document.getElementById("genre"+idx).innerHTML=genre;
document.getElementById("year"+idx).innerHTML=year;
}
