export function getRandomNumber(min = 0, max = 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString(length: number): string {
  const charString = "abcdefghijklmnopqrstu";
  let result = "";
  for (let i = 0; i < length - 1; i++) {
    result += charString[getRandomNumber(0, charString.length - 1)];
  }
  return result;
}

export function getFakeWords(wordCount = 1): string {
  let result = "";
  for (let i = 0; i < wordCount; i++) {
    result += getRandomString(getRandomNumber(1, 8)) + " ";
  }
  return result;
}

export function getRandomNumberString(length: number): string {
  const chars = "1234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[getRandomNumber(0, chars.length - 1)];
  }
  return result;
}

export function getRandomName(): string {
  const firstNames =
    "David,John,Paul,Mark,James,Andrew,Scott,Steven,Robert,Stephen,William,Craig,Michael,Stuart,Christopher,Alan,Colin,Brian,Kevin,Gary,Richard,Derek,Martin,Thomas,Neil,Barry,Ian,Jason,Iain,Gordon,Alexander,Graeme,Peter,Darren,Graham,George,Kenneth,Allan,Simon,Douglas,Keith,Lee,Anthony,Grant,Ross,Jonathan,Gavin,Nicholas,Joseph,Stewart,Daniel,Edward,Matthew,Donald,Fraser,Garry,Malcolm,Charles,Duncan,Alistair,Raymond,Philip,Ronald,Ewan,Ryan,Francis,Bruce,Patrick,Alastair,Bryan,Marc,Jamie,Hugh,Euan,Gerard,Sean,Wayne,Adam,Calum,Alasdair,Robin,Greig,Angus,Russell,Cameron,Roderick,Norman,Murray,Gareth,Dean,Eric,Adrian,Gregor,Samuel,Gerald,Henry,Justin,Benjamin,Shaun,Callum,Campbell,Frank,Roy,Timothy,Glen,Marcus,Hamish,Niall,Barrie,Liam,Brendan,Terence,Greg,Leslie,Lindsay,Trevor,Vincent,Christian,Lewis,Rory,Antony,Fergus,Roger,Arthur,Dominic,Ewen,Jon,Owen,Gregory,Jeffrey,Terry,Damian,Geoffrey,Harry,Walter,Bernard,Desmond,Jack,Aaron,Archibald,Blair,Jeremy,Nathan,Alister,Dale,Dylan,Glenn,Julian,Leon,Allen,Martyn,Nigel,Alisdair,Denis,Drew,Evan,Phillip,Frazer,Guy,Laurence,Lawrence,Magnus,Crawford,Finlay,Frederick,Gregg,Karl,Kerr,Mohammed,Rodney,Victor,Carl,Daryl,Don,Edwin,Erik,Grahame,Ivan,Kyle,Leigh,Lorne,Maurice,Murdo,Nicolas,Steve,Allister,Clark,Darran,Dennis,Elliot,Leonard,Nairn,Scot,Stefan,Toby,Warren,Billy,Clive,Damien,Louis,Mohammad,Neill,Noel,Ralph,Sandy,Albert,Alun,Brett,Clifford,Eoin,Glyn,Imran,Ivor,Johnathan,Kevan,Neal,Oliver,Robbie,Roland,Stanley,Aidan,Antonio,Austin,Bradley,Cornelius,Darrin,Derrick,Innes,Kristian,Lachlan,Mathew,Moray,Nicol,Shane,Tony,Brent,Findlay,Forbes,Gilbert,Giles,Jay,Kelvin,Leighton,Marco,Omar,Roddy,Tom,Abdul,Alfred,Alick,Ashley,Bryce,Conrad,Darryl,Eugene,Harold,Harvey,Hector,Jody,Kieran,Kirk,Kris,Marshall,Muhammad,Ramsay,Ray,Rodger,Seumas,Tommy,Wai,Alex,Ali,Andrea,Archie,Daren,Derick,Gideon,Jan,Juan,Kerry,Kieron,Luke,Lyall,Manus,Marvin,Morgan,Muir,Myles,Ronnie,Rowan,Rupert,Spencer,Stephan,Struan,Torquil,Wallace,Aftab,Alain,Alec,Alvin,Anton,Arran,Arron,Austen,Aynsley,Benedict,Chad,Chun,Clarke,Damon,Danny,Darron,Declan,Deryck,Edmond,Edmund,Jacob,Johnston,Keiron,Kennedy,Khalil,Kristofer,Laurie,Lloyd,Mario,Max,Maxwell,Mitchell,Morris,Nathaniel,Naveed,Neville,Nickolas,Piers,Quentin,Rennie,Reuben,Riccardo,Roberto,Ruaraidh,Ruaridh,Stefano,Symon,Tobias,Todd,Abid,Adnan,Aeneas,Aiden,Ainslie,Ajay,Alessandro,Alyn,Anderson,Andre,Ashok,Asif,Atholl,Bjorn,Brandon,Brydon,Bryn,Caine,Calvin,Carlo,Ceri,Chris,Christien,Claudio,Clayton,Clint,Connell,Cyril,Damion,Darin,Dario,Darroch,Deryk,Dirk,Donovan,Dustin,Eamonn,Edgar,Elliott,Elton,Emlyn,Eoghan,Erlend,Farooq,Garth,Geoff,Gerrard,Gerry,Giancarlo,Gidon,Grierson,Hamilton,Hans,Hendry,Howard,Irvine,Jaimie,Jarad,Jayson,Jean,Jeff,Jerome,Joel,Jude,Kane,Karan,Karim,Kashif,Keiran,Kendon,Kent,Kwok,Laith,Lauchlan,Leo,Leyton,Lindsey,Logan,Lorn,Lyle,Mason,Mervyn,Michel,Mubarak,Mungo,Murdoch,Nathanael,Neall,Nickie,Nicky,Nikki,Nikolas,Paolo,Perry,Ranald,Rehan,Ricky,Rikki,Ritchie,Rizwan,Robertson,Roderic,Rolf,Ronan,Rowland,Sam,Scotland,Seth,Shahid,Shakeel,Sidney,Sinclair,Sonny,Taylor,Tin,Tomas,Travis,Tristan,Vernon,Vince,Waheed,Waseem,Wei,Wilson,Yan,Zak,Aamir,Abdullahi,Abdulrazak,Abraham,Adebayo,Adel,Adrain,Adriano,Ahmad,Ahmed,Aidon,Ajeet,Al-Motamid,Alaistair,Alberto,Aldo,Aldous,Alen,Alexandre,Alfredo,Alisteir,Allon,Alton,Alwyn,Aman,Amanda,Amato,Amir,Amit,Amitabha,Amos,Anand,Anant,Anastasi,Anastasio,Anastasios,Andres,Angel,Angelo,Anil,Anjam,Anjum,Ann,Antonius,Anwar,Aonghas,Aonghus,Aqif,Ardene,Ardle,Ari,Arif,Arlyn,Armando,Armond,Arne,Arnout,Arol,Aron,Aroon,Arshid,Arvid,Arvind,Asa,Asad,Asaf,Asam,Ashiqhusein,Ashwani,Asrar,Athol,Avees,Ayham,Ayokoladele,Ayron,Azzam,Balfour,Balraj,Barbara,Barnabas,Barron,Bartholomew,Basil,Bassam,Bayne,Ben-John,Bengiman,Benoit,Bernardo,Bevan,Bill,Bllal,Blythe,Bobby,Brad,Brant,Brook,Bryden,Byram,Byron,Caleb,Callam,Carey,Carol,Carreen,Cary,Casey,Cathorne,Chae,Charanjeev,Che,Chee,Chi,Chincdu,Christan,Christie,Christos,Chrys,Chu,Churnthoor,Ciaran,Ciaron,Ciobhan,Claus,Cliff,Clinton,Colan,Coll,Collin,Colum,Con,Connor,Corey,Corin,Cormac,Corren,Cowan,Craige,Cullen,Daiman,Daljit,Dall,Dameon,Damyon,Danga,Danielle,Darius,Daron,Darrel,Darrell,Darryll,Darryn,Davide,Davidson,Davinder,Davud,Davyd,Dawson,Dax,Del,Dell,Denver,Dermot,Derry,Derryl,Derryn,Diarmid,Diauddin,Dick,Diego,Dino,Dion,Dolan,Domenico,Domenyk,Donn,Donnie,Donny,Dorian,Dorino,Dougal,Dowell,Duane,Dugald,Dulip,Dylaan,Eamon,Ean,Earl,Eben,Edoardino,Efeoni,Egidio,Eiichi,El,Elgin,Ellis,Eloson,Emmanuel,Emran,Emrys,Eoghann,Erkan,Erl,Ernest,Erwin,Esmond,Ewing,Fabio,Feargus,Felix,Ferzund,Finbar,Finley,Fionn,Francesco,Francisco,Francois,Frankie,Frazier,Fu,Gabriel,Galen,Gallvin,Gardner,Garreth,Garry-John,Gawad,Geore,Georges,Georgio,Gerarde,Gerhard,Gethin,Ghassan,Gianni,Gillan,Gilmour,Ginno,Gino,Giovanni,Glynn,Godfrey,Grainger,Greggory,Gren,Grigor,Guido,Gurbal,Gurchinchel,Gurhimmat,Gurjeet,Gurkimat,Gurmeet,Gurvinder,Gustavus,Gwion,Haitham,Hani,Hardeep,Hassan,Hatim,Heather,Hedley,Hilton,Himesh,Hitesh,Hoi-Yuen,Hoy,Hsin,Hui,Hussain,Hytham,Ifeatu,Iffor,Ilya,Imeobong,Imtiaz,Iqbal,Isaac,Isabirye,Ishar,Islay,Ivy,Jackie,Jackson,Jaco,Jade,Jagan,Jagdeep,Janet,Jardine,Jarno,Jasbir,Jasen,Jasjeet,Jaspal,Jaspar,Jatinder,Javaid,Jean-Baptiste,Jedd,Jeffery,Jeremiah,Jeroen-Hans,Jerry,Jesse,Jim,Jimmy,Jimsheed,Joao,Jodie,Joe,Johan,Johann,John-Paul,Johnny,Jojeph,Jonathon,Jonson,Jose,Josep-Ramon,Joshua,Joss,Jreen,Judd,Julie,Julyan,Jusbunt,Justine,Ka,Ka-Poon,Kahl,Kai,Kaleem,Kam,Kameldeed,Kamran,Kari,Kayhan,Kearan,Kee,Keenan,Keir,Kelly,Kelman,Kenny,Kenrick,Kern,Kevyn,Khalid,Ki,Kia,Kiain,Kier,Kieren,King,Kiran,Knok,Ko,Konrad,Koon,Kristen,Kristin,Kristopher,Kulbant,Kuldeep,Kuldip,Kurt,Kurt-Gordon,Kwasi,Kyles,Laine,Laura,Lauren,Laurent,Lauri,Laychlan,Lea,Lee-William,Leevi,Lelio,Lenord,Lesley,Levi,Liaqat,Linn,Linsay,Lipton,Lisle,Lister,Littlesky,Loaie,Logie,Lorenzo,Lorraine,Loumont,Luigi,Luis,Luiz,Madunil,Majad,Maksymilian,Malkeet,Man,Mandeep,Manmath,Mansel,Mansoor,Manuel,Maqsood,Marcello,Marcos,Marek,Marin,Marino,Marjus,Markos,Marl,Marvan,Marvyn,Mary,Masood,Matt,Maurizio,Mazhar,Mcnamara,Melville,Melvin,Methven,Micah,Michal,Michele,Michelle,Miguel,Miles,Milo,Mirza,Mitchel,Moazzam,Modan,Mohd,Montgomery,Morrison,Moses,Moufid,Muctarr,Mugahid,Mukendi,Mukesh,Munnuwar,Muro,Mustapha,Nabil,Nadeem,Naeeh,Naeem,Navin,Naweed,Nazar,Neacal,Neale,Neel,Neilson,Nevil,Nicola,Nicolo,Niel,Nikolaos,Ninian,Nirmaljit,Nishal,Noah,Noureddine,Nwachukwu,O'neill,Obumneme,Odaro,Odin,Ogilvy,Olaf,Olivier,Omer,Orest,Orlando,Ormond,Orpheus,Osman,Otis-Chen,Oyvind,Pallab,Pamela,Parvez,Pasquale,Paulo,Pegasus,Petter,Phil,Pierce,Piero,Pierre,Pietro,Polo,Pravin,Quillan,Quintin,Rae,Raeph,Ragbir,Rahul,Rainer,Rajesh,Rajiv,Ramesh,Ramon,Rana,Randy,Ranjit,Rashid,Rauri,Raymund,Reagan,Reay,Redmond,Reece,Reese,Rene,Rex,Reynard,Reza,Rhoderick,Rhys,Rian,Richie,Ritchard,Robb,Robbi,Robertjohn,Rodden,Rodrick,Rohan,Rohit,Romolo,Roope,Rorie,Rowalan,Royston,Ruairi,Ruairidh,Russ,Russel,Ryan-John,Ryan-Lee,Sacha,Saddiq,Sajid,Saleem,Samarendra,Samir,Sanders,Sanjay,Saqib,Sarah,Sarfraz,Sargon,Sarmed,Sasid,Saul,Sccott,Sebastian,Sebastien,Sergio,Shabir,Shadi,Shafiq,Shahad,Shahed,Shahied,Shahriar,Shakel,Shamim,Sharon,Shawn,Shazad,Sheamus,Shehzad,Sheikh,Sheldon,Shibley,Shirlaw,Shuan,Shuyeb,Siddharta,Siegfried,Silas,Silver,Simpson,Sing,Sion,Sleem,Solomon,Somhairle,Soumit,Stacey,Stachick,Stephane,Stevan,Stevenson,Stevie,Stuard,Sufian,Suhail,Sun,Sunil,Suoud,Sven,Syed,Tabussam,Tad,Tai,Talal,Tam,Tamer,Tanapant,Tanvir,Tarek,Tariq,Tarl,Tarun,Tegan,Teginder,Terrance,Thabit,Theo,Thiseas,Thor,Thorfinn,Tino,Tjeerd,Tolulope,Toshi,Tracey,Trebor,Trent,Trygve,Tulsa,Tyrone,Umar,Valentine,Vikash,Vilyen,Wael,Waheedur,Waleed,Wam,Wanachak,Warner,Warrick,Wasim,Webster,Weir,Welsh,Weru,Wesley,Weston,Wilbs,Wilfred,Willis,Wing,Winston,Wlaoyslaw,Woon,Wun,Xavier,Yanik,Yannis,Yaser,Yasir,Yasser,Yazan,Yosof,Younis,Yuk,Yun,Zack,Zadjil,Zahid,Zain,Zakary,Zander,Zeeshan,Zen,Zeonard,Zi,Ziah,Zowie,Nicola,Karen,Fiona,Susan,Claire,Sharon,Angela,Gillian,Julie,Michelle,Jacqueline,Amanda,Tracy,Louise,Jennifer,Alison,Sarah,Donna,Caroline,Elaine,Lynn,Margaret,Elizabeth,Lesley,Deborah,Pauline,Lorraine,Laura,Lisa,Tracey,Carol,Linda,Lorna,Catherine,Wendy,Lynne,Yvonne,Pamela,Kirsty,Jane,Emma,Joanne,Heather,Suzanne,Anne,Diane,Helen,Victoria,Dawn,Mary,Samantha,Marie,Kerry,Ann,Hazel,Christine,Gail,Andrea,Clare,Sandra,Shona,Kathleen,Paula,Shirley,Denise,Melanie,Patricia,Audrey,Ruth,Jill,Lee,Leigh,Catriona,Rachel,Morag,Kirsten,Kirsteen,Katrina,Joanna,Lynsey,Cheryl,Debbie,Maureen,Janet,Aileen,Arlene,Zoe,Lindsay,Stephanie,Judith,Mandy,Jillian,Mhairi,Barbara,Carolyn,Gayle,Maria,Valerie,Christina,Marion,Frances,Michele,Lynda,Eileen,Janice,Kathryn,Kim,Allison,Julia,Alexandra,Mairi,Irene,Rhona,Carole,Katherine,Kelly,Nichola,Anna,Jean,Lucy,Rebecca,Sally,Teresa,Adele,Lindsey,Natalie,Sara,Lyn,Ashley,Brenda,Moira,Rosemary,Dianne,Kay,Eleanor,June,Geraldine,Marianne,Beverley,Evelyn,Leanne,Kirstie,Theresa,Agnes,Charlotte,Joan,Sheila,Clair,Hilary,Jayne,Sonia,Vivienne,Carla,Ellen,Emily,Morven,Debra,Janette,Gaynor,Rachael,Veronica,Vicky,Colette,Lyndsay,Maxine,Nicole,Sonya,Susanne,Alice,Georgina,Sheena,Leona,Tanya,Annette,Joyce,Ailsa,Avril,Iona,Isobel,Josephine,Kimberley,Sylvia,Lara,Linzi,Siobhan,Vanessa,Bernadette,Natasha,Monica,Esther,Hayley,Isabella,Rose,Roslyn,Tara,Adrienne,Carrie,Isabel,Jan,Janine,Justine,Kirstin,Norma,Rona,Shelley,Anne-Marie,Cara,Eilidh,Grace,Gwen,Isla,Vikki,Deirdre,Elspeth,Faye,Joy,Kara,Louisa,Naomi,Rosalind,Vicki,Amy,Hannah,Heidi,Leah,Lee-Ann,Lyndsey,Rhonda,Anita,Annie,April,Charmaine,Dorothy,Lynsay,Nadine,Penny,Sharron,Stacey,Charlene,Collette,Corinne,Kate,Katharine,Kerri,Kerrie,Linsey,Marjorie,Melissa,Helena,Jeanette,Marlene,Miranda,Roseann,Alana,Anthea,Morna,Andrina,Carol-Ann,Doreen,Juliet,Lauren,Nina,Nyree,Sarah-Jane,Sharlene,Simone,Beverly,Cindy,Diana,Dionne,Jacquelyn,Jenny,Johanne,Margo,Marina,Nancy,Trudy,Vivien,Wilma,Abigail,Alexis,Alyson,Angie,Ann-Marie,Annmarie,Belinda,Carolann,Carolanne,Eva,Eve,Glenda,Johanna,Karin,Kellie,Loraine,Lynette,Nadia,Penelope,Roberta,Tina,Gael,Gina,Ingrid,Lea,Marjory,Miriam,Philippa,Senga,Shonagh,Sophie,Catrina,Claudine,Constance,Edith,Erica,Katriona,Keli,Keri,Kristina,Laurie,Lucinda,Mari,Marlyn,Olivia,Paulene,Selina,Seonaid,Vivian,Williamina,Alexandria,Angeline,Antonia,Bridget,Candice,Carolyne,Cherie,Colleen,Connie,Daniella,Francesca,Gwendoline,Jessie,Jocelyn,Judy,Karina,Kaye,Kimberly,Lee-Anne,Lillian,Marian,Martha,May,Roisin,Shelagh,Sophia,Susanna,Aimee,Amanda-Jane,Amber,Beth,Caren,Claudia,Corrine,Euphemia,Jessica,Katie,Leeanne,Leila,Lilian,Liza,Madeleine,Marcia,Maree,Marilyn,Marisa,Myra,Olga,Sasha,Sharleen,Sian,Sonja,Tammy,Tania,Teri,Tessa,Toni,Tricia,Yasmin,Alexa,Amelia,Andrena,Annabel,Annemarie,Arleen,Carmen,Cecilia,Chloe,Corrie,Dana,Danielle,Davina,Deanne,Elisabeth,Elise,Estelle,Florence,Francine,Georgia,Henrietta,Jade,Jeanie,Jo-Anne,Jody,Julie-Ann,Juliette,Kareen,Kirstine,Kristeen,Lana,Leigh-Ann,Lesley-Ann,Leslie,Linsay,Lois,Lucie,Lucille,Madeline,Marnie,Nora,Noreen,Rae,Rhoda,Robyn,Sacha,Sandie,Sheryl,Shiona,Sinead,Stella,Una,Vari,Violet,Zara,Ailie,Alaine,Alanna,Allyson,Andria,Bianca,Billie,Caireen,Carol-Anne,Caron,Cathleen,Christian,Coleen,Dennise,Donalda,Evonne,Fay,Harriet,Holly,Janie,Janis,Jenifer,Jodi,Johann,Karan,Kari,Katy,Keira,Kristine,Layla,Leeann,Leigh-Anne,Leonora,Lianne,Lindy,Lynnette,Marissa,Marsha,Megan,Monique,Nicolette,Norah,Phyllis,Rhian,Rosaleen,Rosalyn,Rosemarie,Rowan,Saira,Shauna,Shazia,Stacy,Susannah,Tamara,Terri,Terry,Therese,Trudi,Vanda,Verity,Vickie,Wanda,Yvette,Zoey,Adeline,Aimi,Ainsley,Ainslie,Alexandrina,Anastasia,Anna-Marie,Annabell,Camilla,Carina,Carly,Catherina,Cathryn,Charis,Charlaine,Corinna,Corrina,Cristina,Darlene,Debora,Delia,Della,Dona,Elena,Elinor,Emma-Jane,Eunice,Felicity,Fionnuala,Gabrielle,Gloria,Greer,Ilene,Imogen,Iris,Ishbel,Jeannette,Jemima,Jilly,Joann,Johan,Julie-Anne,Karla,Karra,Karyn,Katrine,Kelley,Kelli,Kerry-Anne,Kirsta,Kirstien,Krista,Kristen,Kristi,Kristian,Krysia,Kyra,Leann,Leanna,Lena,Leza,Liana,Lisa-Marie,Lorette,Lydia,Mairead,Martina,Muriel,Parveen,Pauleen,Polly,Rania,Rita,Rosanne,Samantha-Jane,Shane,Sharlyn,Sheelagh,Sheona,Sheree,Suzanna,Suzy,Thea,Tonya,Vera,Yuen,Alena,Alix,Allana,Allanna,Alma,Angelina,Anji,Annamarie";
  const lastNames =
    "SMITH,BROWN,WILSON,THOMSON,STEWART,ROBERTSON,CAMPBELL,ANDERSON,SCOTT,TAYLOR,MACDONALD,CLARK,MURRAY,REID,MORRISON,YOUNG,WATSON,WALKER,MITCHELL,PATERSON,ROSS,GRAHAM,MARTIN,MILLER,KERR,JOHNSTON,DAVIDSON,HENDERSON,HUNTER,MCDONALD,BELL,FRASER,HAMILTON,GRAY,DUNCAN,FERGUSON,KELLY,CAMERON,MACKENZIE,SIMPSON,MACLEOD,ALLAN,GRANT,MCLEAN,BLACK,RUSSELL,WALLACE,MACKAY,WRIGHT,GIBSON,MARSHALL,GORDON,JONES,WHITE,KENNEDY,STEVENSON,SUTHERLAND,BURNS,JOHNSTONE,CRAIG,MCKENZIE,MURPHY,HUGHES,SINCLAIR,CUNNINGHAM,WILLIAMSON,WOOD,MILNE,DOCHERTY,MUIR,CRAWFORD,WATT,DOUGLAS,MCMILLAN,MILLAR,FLEMING,MUNRO,KING,RITCHIE,SHAW,WILLIAMS,JACKSON,THOMPSON,DICKSON,BOYLE,MCINTOSH,BRUCE,MCLAUGHLIN,MCKAY,CHRISTIE,MCINTYRE,WHYTE,ALEXANDER,BLAIR,MACKIE,MACLEAN,HAY,JAMIESON,HILL,MOORE,O'NEILL,FINDLAY,MCGREGOR,ADAMS,LINDSAY,RAE,WEIR,CURRIE,BOYD,FORBES,MCLEOD,REILLY,AITKEN,JOHNSON,TURNER,DONALDSON,DONNELLY,NICOL,WARD,BUCHANAN,BARR,MCFARLANE,RAMSAY,MCCULLOCH,HALL,ROBINSON,COOPER,ALI,LAWSON,QUINN,GREEN,COLLINS,ARMSTRONG,DUFFY,BEATTIE,CAIRNS,LOGAN,MCCALLUM,MCEWAN,CHALMERS,HOGG,GALLACHER,IRVINE,COWAN,FORSYTH,HUTCHISON,O'DONNELL,RENNIE,MCLAREN,COOK,ROBERTS,WEBSTER,MACPHERSON,MCALLISTER,THOMAS,GALLAGHER,KANE,RICHARDSON,HENDRY,PATON,STRACHAN,MORGAN,STEPHEN,AHMED,BAIRD,DUNN,TODD,ROBB,CLARKE,WELSH,MORRIS,MURDOCH,BAIN,EVANS,MCCANN,BUCHAN,HARRISON,DAVIES,GILMOUR,ORR,STUART,BAXTER,FORREST,BENNETT,MCPHERSON,MOFFAT,MORTON,GIBB,DRUMMOND,LAW,MCDOUGALL,MCKENNA,MULLEN,SPENCE,TAIT,HARVEY,MCGOWAN,NELSON,TURNBULL,GILLESPIE,GREIG,HARRIS,HIGGINS,HOUSTON,KHAN,PATTERSON,DAWSON,INGLIS,INNES,LAIRD,MACFARLANE,PHILLIPS,STEELE,POLLOCK,MAXWELL,PARK,SINGH,DONALD,LEE,LEWIS,LYNCH,BARCLAY,EDWARDS,JACK,MCARTHUR,MCPHEE,O'BRIEN,PEARSON,HANNAH,MCBRIDE,PARKER,DOHERTY,LAING,ALLISON,COCHRANE,FISHER,LITTLE,MACKINNON,WILKIE,HARPER,RANKIN,SHARP,MCMAHON,SWAN,CASSIDY,FARRELL,SNEDDON,DICK,WOODS,ADAM,BRADLEY,LESLIE,MCGUIRE,BAILLIE,COWIE,DOWNIE,MACGREGOR,SWEENEY,CUMMING,ELLIOTT,MOIR,MONTGOMERY,PORTER,MCNEILL,NICHOLSON,SHIELDS,MILLS,BURNETT,GALLOWAY,MAIN,MCCABE,MCGHEE,NISBET,COYLE,GARDNER,GILLIES,LAMONT,LANG,MACMILLAN,STIRLING,DOYLE,DUNLOP,MASON,PETRIE,PIRIE,DAVIS,HOLMES,HARDIE,HUSSAIN,MCCONNELL,NOBLE,FOX,GARDINER,HALLIDAY,LOVE,RODGER,SHEARER,SHEPHERD,SIM,MILLIGAN,REYNOLDS,DUFF,HOWIE,KNOX,ALLEN,BAKER,DEVINE,DOW,MCCORMACK,MIDDLETON,NICOLSON,CONNELLY,CARSON,FALCONER,FOSTER,LAMB,MACLENNAN,MACRAE,SMART,STEEL,URQUHART,CARR,CARROLL,FLYNN,HUTTON,MALCOLM,MCLACHLAN,CRUICKSHANK,DEVLIN,GEDDES,GILCHRIST,GUNN,KIDD,ADAMSON,ELDER,HART,LIVINGSTONE,MANN,MANSON,MCCAFFERTY,MONAGHAN,JENKINS,LOW,MCCORMICK,ROY,WALSH,WYLIE,BRADY,BRYCE,CARMICHAEL,ELLIS,FULTON,MCDOWALL,BALLANTYNE,BYRNE,MAIR,MCKINNON,BARNES,HENRY,HOOD,MATHESON,BEVERIDGE,BREMNER,BURKE,COX,FINLAY,HEPBURN,JAMES,MCLELLAN,ROBSON,WEST,CONNOLLY,GILL,KAUR,LAWRIE,MCGILL,ROONEY,BARRIE,CHAPMAN,CURRAN,DEWAR,LOWE,MACKINTOSH,MCINNES,O'CONNOR,RODGERS,BUTLER,DUNBAR,GEMMELL,GRIEVE,KIRKWOOD,MCNEIL,MOONEY,NEILSON,PALMER,CARTER,DODDS,FITZPATRICK,KIRK,MCCOLL,OLIVER,RUTHERFORD,BERRY,CALDER,CALDWELL,MCCARTNEY,PAUL,DALY,GOURLAY,GUTHRIE,KEENAN,MATHIESON,PENMAN,PRICE,WILKINSON,AITCHISON,BARRETT,BEATON,BURGESS,CONNOR,EASTON,FLETCHER,FREW,FYFE,MCKEOWN,ANDREWS,CULLEN,GLEN,JARDINE,LYON,MCMANUS,MENZIES,MORAN,MULHOLLAND,NEIL,ROSE,SPEIRS,CAIRNEY,FORD,GRIFFIN,LAWRENCE,MCKECHNIE,MELDRUM,SLOAN,BRODIE,CALLAGHAN,EDGAR,HOPE,HUNT,JORDAN,KNIGHT,MALONE,MCCALL,SMALL,STARK,BARKER,BOWMAN,CONNELL,COUTTS,FINLAYSON,FOWLER,GALBRAITH,LEITCH,NAPIER,O'HARA,THOM,WADDELL,ARCHIBALD,CHISHOLM,INGRAM,KYLE,MACINNES,MCKINLAY,MCQUEEN,RAMAGE,EWING,FARQUHAR,HORNE,LORIMER,MATTHEWS,MCNAB,NICOLL,POTTER,RAFFERTY,RIDDELL,BLYTH,BRYSON,KAY,KEMP,MCLAUGHLAN,MEIKLE,SKINNER,WHITELAW,HODGE,MACIVER,MCDERMOTT,WAUGH,AGNEW,ATKINSON,BOWIE,CONWAY,DRYSDALE,GOLDIE,MCDADE,MCFADYEN,MCKEE,MELVILLE,O'NEIL,ANGUS,BRENNAN,CARRUTHERS,HOLLAND,HUME,MCCLUSKEY,MOHAMMED,RICHARDS,AHMAD,BURTON,FRAME,GRIFFITHS,IRVING,LAIDLAW,MACINTYRE,MARR,NEILL,PRENTICE,RYAN,SHANKS,TRAYNOR,CUMMINGS,DOIG,JEFFREY,LEES,MASSON,MCGUINNESS,MEECHAN,MUIRHEAD,NEWLANDS,NIMMO,SLATER,WISHART,BARBOUR,CRICHTON,LYONS,MCGOVERN,MCVEY,PORTEOUS,ANDREW,DAVIE,GORMAN,HARKINS,HAYES,NIVEN,OWEN,OWENS,SHAND,SULLIVAN,WELLS,BAILEY,BOOTH,FERRIER,GOW,MACDOUGALL,MCAULAY,MCCRACKEN,MCGRATH,PHILIP,BROOKS,BURT,CARLIN,DIXON,DOLAN,DOUGAN,FORRESTER,KENNY,LOCKHART,LUMSDEN,ROGERS,SOMERVILLE,STODDART,CHAMBERS,DALZIEL,DEMPSEY,DUGUID,KEITH,RATTRAY,BANKS,BLAKE,COLEMAN,COLQUHOUN,CORBETT,DUTHIE,GOODWIN,KILPATRICK,LAFFERTY,MCAULEY,MCCUTCHEON,PAGE,RICHMOND,SMILLIE,SUMMERS,ARTHUR,BLACKWOOD,COCKBURN,DEMPSTER,HOWARD,KIRKPATRICK,MACAULAY,MADDEN,MAGUIRE,MCNAIR,MCWILLIAM,PATRICK,PAYNE,PEACOCK,POWELL,THORBURN,BIRD,CROSBIE,GLOVER,KEIR,MCADAM,MCCREADIE,MCLAUCHLAN,MCMASTER,MCNAUGHTON,MERCER,O'ROURKE,RICE,SAUNDERS,TELFER,ARNOTT,BARRON,CANNING,CANNON,ELLIOT,HEALY,HUTCHINSON,LENNON,MACPHAIL,MCALPINE,MCGINLEY,MCINALLY,MCNALLY,PRINGLE,SAMSON,SEMPLE,STRANG,VALENTINE,WEBB,BIRRELL,CROSS,DICKIE,FINNIE,FOTHERINGHAM,GARDEN,GREER,HADDOW,HARLEY,LAMBIE,LINTON,MCCLURE,MCLEISH,O'HARE,PERRY,SLAVEN,SMYTH,STEVEN,AUSTIN,CLARKSON,CUTHBERT,EWEN,GILBERT,GLASS,HASTIE,HYSLOP,IRELAND,LAMOND,MAY,MCCARTHY,MCGEE,MCKIE,BISSET,BROWNLIE,CASEY,CLELLAND,FAIRLEY,GEORGE,GILLAN,LENNOX,MCNICOL,MCQUADE,MCSHANE,MCTAGGART,OGILVIE,PRESTON,QUIGLEY,RALSTON,SAVAGE,SCOBIE,SHARKEY,STEVENS,TOWNSLEY,AULD,BECK,BINNIE,BRANNAN,CORMACK,CROMBIE,DYER,ERSKINE,FARQUHARSON,FRENCH,HARKNESS,HASSAN,KIRKLAND,MASSIE,MCGARRY,MICHIE,PURDIE,SANGSTER,TENNANT,THAIN,TIERNEY,WYLLIE,AKHTAR,BALFOUR,BARNETT,BARTON,BEGG,CORRIGAN,FRIEL,GRIERSON,HOPKINS,LAURIE,LEASK,LEONARD,LYNN,MACPHEE,MCBAIN,MCGRORY,MCHUGH,MCLENNAN,PROCTOR,TULLOCH,BALL,BORTHWICK,BRAND,CHEN,COLE,DALE,DEANS,EADIE,GILFILLAN,IQBAL,LIDDELL,MCCLYMONT,MCCONNACHIE,MOWAT,NOLAN,PETERS,SHERIDAN,SOUTER,WALTON,ADDISON,BRUNTON,BULLOCH,COULL,DINGWALL,FOLEY,JARVIE,JOYCE,KNOWLES,LAMBERT,LITTLEJOHN,MAHMOOD,MATTHEW,MCKELLAR,MCPHAIL,MCRAE,MCWILLIAMS,NEWTON,NIXON,PEARCE,PETTIGREW,PHILP,PRATT,WINTON,AIRD,BRADFORD,CHEYNE,DAY,DRYBURGH,FAULDS,FULLERTON,HANLON,HEGGIE,HERON,HUDSON,KEARNEY,LAUDER,LAVERY";
  const firstNamesSplit = firstNames.split(",");
  const firstName =
    firstNamesSplit[getRandomNumber(0, firstNamesSplit.length - 1)];
  const lastNamesSplit = lastNames.split(",");
  const lastName =
    lastNamesSplit[getRandomNumber(0, lastNamesSplit.length - 1)];

  return `${firstName} ${lastName[0]}${lastName.slice(1).toLowerCase()}`;
}
