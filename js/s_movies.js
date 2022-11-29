function s_start(n){
var s_movies;

s_movies={
  "Non_Art":[
    {
      Title: 'Pootie Tang',
      Plot: 'Pootie Tang, the musician/actor/folk hero of the ghetto, is chronicled from his early childhood to his battles against the evil Corporate America, who try to steal his magic belt and make him sell out by endorsing addictive products to his people. Pootie must learn to find himself and defeat the evil corporation for all the young black children of America, supatime.',
      Genre: 'Action, Adventure, Comedy, Musical',
      Year: '2001'
    },
    {
      Title: "A Kid in King Arthur's Court",
      Plot: "Young Calvin Fuller is pulled into King Arthur's court by Merlin. His mission: to save Camelot. To do this he must overcome the villain known as Lord Belascoe, train to become a knight, and rescue the Princess Katherine, who has fallen in love with him. Ultimately, He must help Arthur regain his confidence before he can go home.",
      Genre: 'Adventure, Comedy, Family, Fantasy, Romance',
      Year: '1995'
    },
    {
      Title: 'Speed',
      Plot: "Bomber terrorist's elevator plan backfires, so he rigs a bomb to a LA city bus. The stipulation is: once armed, the bus must stay above 50 mph to keep from exploding. Also if LAPD Officer tries to unload any passengers off, Payne will detonate it. Joe Morton co-stars as Jack's superior, and Jeff Daniels supports Jack helping him try to defuse the bomb.",
      Genre: 'Action, Adventure, Crime, Thriller',
      Year: '1994'
    },
    {
      Title: 'The Stars Fell on Henrietta',
      Plot: "The setting is early America during the oil boom. An elderly, down on his luck 'oil man', Mr. Cox finds himself in the town of Henrietta. Using unconventional methods, he convinces himself and local Don Day that there is oil on Day's land. The financially strapped Day puts everything into finding oil...but at what cost?",
      Genre: 'Drama',
      Year: '1995'
    },
    {
      Title: 'RoboCop 3',
      Plot: 'The mega corporation Omni Consumer Products is still bent on creating their pet project, Delta City, to replace the rotting city of Detroit. Unfortunately, the inhabitants of the area have no intention of abandoning their homes simply for desires of the company. To this end, OCP have decided to force them to leave by employing a ruthless mercenary army to attack and harass them. An underground resistance begins and in this fight, Robocop must decide where his loyalties lie.',
      Genre: 'Action, Crime, Sci-Fi, Thriller',
      Year: '1993'
    }
  ],
  "Non_Sports":[
    {
      Title: 'Beat the Devil',
      Plot: "A quartet of international crooks -- Peterson, O'Hara, Ross and Ravello -- is stranded in Italy while their steamer is being repaired. With them are the Dannreuthers. The six are headed for Africa, presumably to sell vacuum cleaners but actually to buy land supposedly loaded with uranium. They are joined by others who apparently have similar designs.",
      Genre: 'Action, Adventure, Comedy, Crime, Drama, Romance',
      Year: '1953'
    },
    {
      Title: 'Balto',
      Plot: 'A half-wolf, half-husky named Balto gets a chance to become a hero when an outbreak of diphtheria threatens the children of Nome, Alaska in the winter of 1925. He leads a dog team on a 600-mile trip across the Alaskan wilderness to get medical supplies. The film is based on a true story which inspired the Iditarod dog sled race.',
      Genre: 'Animation, Adventure, Drama, Family, History',
      Year: '1995'
    },
    {
      Title: 'Bulletproof',
      Plot: 'An undercover police officer named Rock Keats befriends a drug dealer and car thief named Archie Moses in a bid to catch the villainous drug lord Frank Coltan. But the only problem is that Keats is a cop, his real name is Jack Carter, and he is working undercover with the LAPD to bust Moses and Colton at a sting operation the LAPD has set up.',
      Genre: 'Action, Comedy, Crime',
      Year: '1996'
    },
    {
      Title: 'Carried Away',
      Plot: 'Joseph Svenden is a middle-aged school-teacher who lives on a farm with his dying mother. In his simple life there are no excitements, even in long-time relationship with a widow. However, when seventeen-year-old beauty enrolls in his class, Joseph would soon end up in her arms. After that, Joseph is torn between the passion and feeling that he is doing something wrong.',
      Genre: 'Drama, Romance',
      Year: '1996'
    },
    {
      Title: 'Blue Chips',
      Plot: "Pete Bell, a college basketball coach is under a lot of pressure. His team isn't winning and he cannot attract new players. The stars of the future are secretly being paid by boosters. This practice is forbidden in the college game, but Pete is desperate and has pressures from all around.",
      Genre: 'Drama, Sport',
      Year: '1994'
    }
  ],
  "STEM_Art":[
    {Title: 'Forget Paris',
      Plot: 'Mickey Gordon is a basketball referee who travels to France to bury his father. Ellen Andrews, an American living in Paris, works for the airline Mickey flies on. They meet and fall in love, but their relationship goes through many difficult patches. The story is told in flashback by their friends at a restaurant waiting for them to arrive.',
      Genre: 'Comedy, Romance',
      Year: '1995'},
    {
      Title: 'The Inspector General',
      Plot: "An illiterate stooge in a traveling medicine show wanders into a strange town and is picked up on a vagrancy charge. The town's corrupt officials mistake him for the inspector general whom they think is traveling in disguise. Fearing he will discover they've been pocketing tax money, they make several bungled attempts to kill him.",
      Genre: 'Comedy, Musical, Romance',
      Year: '1949'
    },
    {
      Title: 'Happy Gilmore',
      Plot: "A Hockey player wannabe finds out that he has the most powerful golf drive in history. He joins the P.G.A. tour to make some money to save grandma's house. The downside is that his hocky player mentality doesn't really go on the P.G.A. tour. Especially with the favorite to win the championship.",
      Genre: 'Comedy, Sport',
      Year: '1996'
    },
    {
      Title: 'Hard Target',
      Plot: 'Natasha Binder comes to New Orleans looking for her father, who has gone missing. In doing so, she meets a very hard man called Chance. He helps her find out that her father was killed by an organisation who sell the opportunity to hunt human prey. They are taking advantage of a police strike in New Orleans. Will the Muscles from Brussels win through?',
      Genre: 'Action, Adventure, Drama, Thriller',
      Year: '1993'
    },
    {
      Title: 'The Wizard of Oz',
      Plot: "In this charming film based on the popular L. Frank Baum stories, Dorothy and her dog Toto are caught in a tornado's path and somehow end up in the land of Oz. Here she meets some memorable friends and foes in her journey to meet the Wizard of Oz who everyone says can help her return home and possibly grant her new friends their goals of a brain, heart and courage.",
      Genre: 'Adventure, Family, Fantasy, Musical',
      Year: '1999'
    }
  ],
  "STEM_Sports":[
    {
      Title: 'Houseguest',
      Plot: "Kevin Franklin is a con man whose mouth is bigger than him, but it doesn't help him much when he's in with the mob for $50,000. Trying to avoid a gambling addict boss, and his two stupid henchmen, Kevin poses as a childhood friend to Gary Young, a workaholic father whose own life is in turmoil in an affluent Pennsylvania suburb.",
      Genre: 'Comedy',
      Year: '1995'
    },
    {
      Title: 'Super Mario Bros.',
      Plot: "Can you make a movie out of a video game? That's the question that is answered by this film. Mario Mario and Luigi Mario, two hard working plumbers find themselves in an alternate universe where evolved dinosaurs live in medium hi-tech squalor. They find themselves the only hope to save the Earth from invasion.",
      Genre: 'Adventure, Comedy, Family, Fantasy, Sci-Fi',
      Year: '1993'
    },
    {
      Title: 'Century',
      Plot: 'Paul Reisner, a young doctor, becomes a researcher in a prestigious medical institute. He feels he has a chance to be part of a movement of unending progress in science and civilization. Then he begins to discover the dark side of the institute, which foreshadows the dark side of the 20th century.',
      Genre: 'Drama, Romance',
      Year: '1993'
    },
    {
      Title: 'Evolution',
      Plot: "When a meteorite falls to Earth two college professors, Dr. Ira Kane and Prof. Harry Phineas Block, are assigned the job of checking the site out. At the site, they discover organisms not of this planet. Soon the site is taken over by the government, forcing Ira and Harry to the side. As the new life-forms begin to evolve and start to get more and more dangerous, it's up to the two professors to save the planet.",
      Genre: 'Comedy, Sci-Fi',
      Year: '2001'
    },
    {
      Title: "Gone Fishin'",
      Plot: 'Two working-class buddies, Joe and Gus, win a contest and get a free fishing trip. When they arrive, everything goes wrong - hurricanes, stolen car, blow-ups and other catastrophes follow them.',
      Genre: 'Comedy, Crime',
      Year: '1997'
    }
  ]
};


var userIn=localStorage.getItem("selection");
if (userIn=="ssm"||userIn=="ssf"){
  var title=s_movies.STEM_Sports[n].Title;
  var plot=s_movies.STEM_Sports[n].Plot;
  var genre=s_movies.STEM_Sports[n].Genre;
  var year=s_movies.STEM_Sports[n].Year;
}
else if(userIn=="sam"||userIn=="saf"){
  var title=s_movies.STEM_Art[n].Title;
  var plot=s_movies.STEM_Art[n].Plot;
  var genre=s_movies.STEM_Art[n].Genre;
  var year=s_movies.STEM_Art[n].Year;
}
else if(userIn=="nsm"||userIn=="nsf"){
  var title=s_movies.Non_Sports[n].Title;
  var plot=s_movies.Non_Sports[n].Plot;
  var genre=s_movies.Non_Sports[n].Genre;
  var year=s_movies.Non_Sports[n].Year;

}
else if(userIn=="nam"||userIn=="naf"){
  var title=s_movies.Non_Art[n].Title;
  var plot=s_movies.Non_Art[n].Plot;
  var genre=s_movies.Non_Art[n].Genre;
  var year=s_movies.Non_Art[n].Year;

}



var idx=3*n;
document.getElementById("title"+idx).innerHTML=title;
document.getElementById("plot"+idx).innerHTML=plot;
document.getElementById("genre"+idx).innerHTML=genre;
document.getElementById("year"+idx).innerHTML=year;
}
