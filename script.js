const Shu = [49, 103, 26, 15, 118, 48, 33, 120, 72, 82, 80, 130, 92, 45, 38, 54, 86, 116, 51, 69, 39, 71, 59, 104, 61, 95, 47, 117, 56, 42, 115, 52, 122, 16, 74, 32, 55, 44, 20, 40, 126, 107, 7, 60, 108, 36, 17, 27, 127, 113, 96, 129, 77, 125, 11, 19, 18, 111, 98, 84, 13, 46, 31, 110, 12, 68, 76, 112, 73, 53, 64, 1, 50, 23, 93, 41, 37, 89, 102, 105, 3, 97, 22, 14, 10, 99, 57, 4, 123, 43, 28, 8, 91, 63, 9, 83, 87, 109, 34, 114, 6, 62, 70, 5, 75, 81, 101, 88, 58, 128, 85, 29, 124, 100, 21, 94, 79, 65, 67, 90, 30, 121, 119, 78, 35, 106, 2, 25, 24, 66]
const Names = ["$Werve Dawning [speed up]", "*", "509 $icario & Yvetzal - Supra Love!", "68R - Corpse x Scarlxrd - MISA MISA! (68R Remix)", "808Monster - 808Monster MONEY IN MY POCKET(Official Audio)(DouYin Remix)", "ANGUISH - ANGUISH, ПОЧТИСЧАСТЛИВ & ily – Glaza ", "After Dark - ( Rock Version ) [ sped-up ]", "Agnes Burnett - sektorjazza - red crystal castles", "Bloom Jpn-TOUCHÉ(speed up)", "Cayman cline x tounge tied  sped up", "Coffin Nails", "Crim3s - Lost", "Crystal Castles - Suffocation", "DJ FLG - Pianissimo", "DJ Vilão DS, MC Zudo Boladão, & DJ Magrin Da DZ7 - Ela Vira Mortal", "DVRKINLSDE - Dead Soul (Sped Up)", "DVRST & my!lane - Close Feeling", "DVRST - Dream Space (Sped Up)", "DVRST, safetypleace, & Nia.wave - Rays of Serenity", "Danse Macabre", "Do you wanna slowed Or SpeedUp Version_ - Skyplaya - Butterflies (SpeedUp) #chillphonk", "Do you wanna slowed Or SpeedUp Version_ - VXLLAIN - Distant Echoes (UltraSpeed)", "Dual Damage - Love Death", "Exomni - Future Evolution", "Exsire & Vilaxxs - Infinite Nights", "FORGOTTENAGE - End of the World", "FRE$HER - Blossom (Feat. IHAVEONECHANCE)", "GREEN ORXNGE - D.I.E.   SPEED UP", "Geoxor - Gloom", "Hensonn - Diamonds", "Hensonn - Scape (Sped Up)", "IDLEGLANCE - NUEKI x VØJ x NARVENT x TOLCHONOV - AURORA", "Jugando Free Fire Phonk Remix (Slowed and reverb)", "KORDHELL - MEMPHIS DOOM", "KORDHELL - MURDER PLOT (Lyrics)", "KUTE x Razihel _ANUBIS (Sped Up)_", "Kawai - MEMORY REBOOT x A REAL HERO MASHUP", "Kim, Øneheart - nightexpress", "Kordhell - Dat Phonk", "Kordhell - Glitch Krush", "LOWX - DANCE ON THE MOON (SPEED UP)", "LXNGVX - Montagem Mysterious Game (Sped up)", "LXRY PXNK & XTOM - Time", "Lil Cla - Pixies - Where Is My Mind_ (sped up)", "MATA RATO DO CASARÃO 1.0 (speed up)", "MEMBER - DEATH77", "MEMBER - TOO AGGRO", "MY!LANE - THIS FEELING (slowed  reverb)", "MoonDeity  - WAKE UP!  SPEED UP", "Mr.Kitty- After dark (speed upnightcore)", "NIGHT DRIVE PHONK", "NUEKI, TOLCHONOV - HIT! (Agressive Phonk)", "Nakani - Moss", "Narvent - Her Eyes", "NineLaps - DVRST - Dream Space (slowed + reverb)", "No Limit", "ODECORE & Odetari - DICE AND ROLL (Instrumental)", "PHONK DOMAIN - Hensonn _Scape (Slowed)_", "PHONK DOMAIN - KUTE _EVERY NIGHT (Sped Up)_", "PHONK DOMAIN - Kordhell x Scarlxrd _I FEEL ALIVE_", "PHXNKPLAYA - My Hood (Official Music Video)", "PISTA TOMA (SPED UP)", "POLSD - Close Eyes (Sped-up)#nightcore #phonk #spedup", "Pastel Ghost - Dark Beach", "Qrtyzz - memories deleted", "Rainy Night Drive - PRXSXNT FXTURE x glexks", "Rizler - COLD - Rizler (Phonk)", "S1ngxxl - Galaxy", "SARCOMA HORROR - witch.tape", "SHADOW DANCE x SLAUGHTER HOUSE 2  [P4nMusic PHONK MASHUP]", "STM, akiaura, & LONOWN - Sleepwalker (Ultra Slowed & Reverb)", "Sidewalks and Skeletons - Goth (Sped up + Reverb)", "Sidewalks and Skeletons - Goth", "Sidewalks and Skeletons - Rapture", "SimpsonWave1995 (ultra speed up)", "Slowęd - Bęatz - VXLLAIN - Shattered Memories (Super Slowed)", "Stegosaurus Rex - Nowhere To Run", "Sx1nxwy & SCXR SOUL - SCXR SOUL - Empty Space (Phonk House)", "TheGoldenYami  - MY!LANE - CLOSE TO ME (slowed + reverb)", "Transition_1", "Transition_2", "Transition_3", "Transition_4", "URY - HADES", "VALI$BEATS - TECH PHONK ( OFFICIAL AUDIO )", "VOSZA - are u ok_", "VXLLAIN - Shattered Memories (sped up)", "VØJ x Narvent _Memory Reboot (Sped Up)_", "WEEDMANE - SUICIDE YEAR", "WEEDMANE - Suicide Year (sped up)(1)", "WEEDMANE - Suicide Year (sped up)", "Waves", "Wilee - Night Drive (Sped Up)", "Wilee - Night Drive", "Wilee x HOSPICEMANE _Cold Blood (Sped Up)_", "Wilee x HOSPICEMANE _Cold Blood_", "Workout - PRIMU$ PHONK [Sped up]", "X-WAYNE SH3TLVIZ - RAMPAGE (speed up)", "Zyzz music radio - Clarity hardstyle remix(Long version)", "_H3YITZJ0HN_ - HUSSVRX - MEMORIES (SPED UP)", "akiaura & Olya Holiday - veil", "akiaura, LONOWN, & Olya Holiday - Midnight Skin", "crustykris - dark beach - pastel ghost (sped up_nightcore)", "eto - lost in thoughts", "kordhell - killers from the northside (speed up)", "love me again sped up", "merunes & ONIMXRU - MERCENARY (slowed)", "my!lane & Hxntai Ninja - Chainsaw", "my!lane - Close To Me", "my!lane - Low Key", "my!lane - Low key (sped up)", "my!lane - This Feeling  SPEED UP", "my!lane - melting (sped up)", "my!lane - this feeling (nightcoresped up)", "my!line - this feeling  speed upnightcore", "netwxrld - ACT$AFE", "netwxrld - JUSTICE", "rave x scenecore x hardstyle type beat _Shut Your Mouth_ (remix PAIN)", "nio - End Of The World Sped Up", "p3rvet dumb - Drift In Hell", "prolly my spookiest beat (sped up  slowed)", "riri  - coldplay - adventure of a lifetime (sped up)", "strangecult - ACID BURN", "strangecult - IT ECHOES", "strangecult - LVL UP", "ty wazowski - Calvin Harris - Outside ft. Ellie Goulding (slowed + reverb)", "xmb - crystal dreams - sped up", "xαяє 闇 - SCARLXRD X KORDHELL - I FEEL ALIVE _ SPEED UP", "Øneheart & kim - nightexpress (Sped Up)", "𝐍𝐚𝐫𝐯𝐞𝐧𝐭 - 𝐇𝐄𝐑 𝐄𝐘𝐄𝐒 (𝙉𝙞𝙜𝙝𝙩𝙘𝙤𝙧𝙚𝙎𝙥𝙚𝙙 𝙪𝙥 𝙈𝙪𝙛𝙛𝙡𝙚𝙙)"]

var Once = false;
var OnceS = false;
var Vol = 0.025;

function PlayOnce(Val)
{
	document.getElementById('Temp').style.color = "#000000";
	document.getElementById('Temp').innerHTML = "*";
	Stop();
	X = Val;
	console.log(X);
	Name = Path.concat(X.toString().concat(Ext));
	Play = new Audio(Name);
	document.getElementById('V').addEventListener('input', function(event) {
	Vol = event.target.value;
	console.log('Volume:', Vol);
	});
	Play.volume = Vol;
	document.getElementById('Name').innerHTML = Names[X - 1];
	Play.play();
}

function PlayAll()
{
	document.getElementById('Temp').style.color = "#000000";
	document.getElementById('Temp').innerHTML = "*";
	OnceS = false;
	if (Once === false)
	{
		X = 0;
		Once = true;
	}
	Stop();
	X++;
	console.log(X);
	Name = Path.concat(X.toString().concat(Ext));
	Play = new Audio(Name);
	Play.addEventListener('ended', () => {
		PlayAll();
	});
	document.getElementById('V').addEventListener('input', function(event) {
	Vol = event.target.value;
	console.log('Volume:', Vol);
	});
	Play.volume = Vol;
	document.getElementById('Name').innerHTML = Names[X - 1];
	Play.play();
}

function Shuffle()
{
	document.getElementById('Temp').style.color = "#000000";
	document.getElementById('Temp').innerHTML = "*";
	console.log(Play.volume);
	Once = false;
	if (OnceS === false)
	{
		Rand = Math.floor(Math.random() * 130) + 1;
		X = Rand;
		OnceS = true;
	}
	X++;
	Stop();
	console.log(Shu[X]);
	Name = Path.concat(Shu[X].toString().concat(Ext));
	Play = new Audio(Name);
	Play.addEventListener('ended', () => {
		Shuffle();
	});
	document.getElementById('V').addEventListener('input', function(event) {
	Vol = event.target.value;
	console.log('Volume:', Vol);
	});
	Play.volume = Vol;
	document.getElementById('Name').innerHTML = Names[Shu[X]];
	Play.play();
}

function Stop()
{
	document.getElementById('Temp').style.color = "#000000";
	document.getElementById('Temp').innerHTML = "*";
	Once = false;
	OnceS = false;
	Play.pause();
	Play.currentTime = 0;
	Play.remove();
	document.getElementById('Name').innerHTML = "";
}
