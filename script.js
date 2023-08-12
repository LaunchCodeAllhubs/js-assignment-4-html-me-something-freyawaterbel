window.addEventListener('load', function() {
    // functions to take user choices

    let firstName = "";
    let lastName = "";
    let nameForm = document.getElementById("nameform");
    nameForm.addEventListener("submit", function(event) {
        event.preventDefault();

        function emptyName(nameQuery) {
            if (nameQuery == "") {
                return true;
            }
        };

        firstName = document.querySelector("input[name=fname]").value;
        lastName = document.querySelector("input[name=lname]").value;

        setTimeout(function () {
        }, 50);
        footer.style.position = "relative"
        if (emptyName(firstName)) {
            return alert("Name fields are required!");
        } else if (emptyName(lastName)) {
            return alert("Name fields are required!");
        } else {
            firstParag1.innerHTML = (`
            ${firstName} ${lastName}, the renowned hero from Paendley, had just received word that the duke of Caelfall, Jarhun Ironfinger, had just issued a reward for the rescue of his daughter, Fromdulsia.
            <br><br>
            ${firstName} had heard rumors that a stronghold of a demon-worshipping cult has had increased activity recently, that the crazed wizard who lives in a tower on the coast had been spotted in town, and that goblins had been raiding around Caelfall lately and have been known to take captives.
            <br><br>
            Which rumor would you like to follow?
            <br><br>
            `);
        rumorChoice.style.display = "inline";
        rumorChoice.addEventListener("submit", function(event) {
            event.preventDefault();
            let rumorUserChoice = document.querySelectorAll("input[name=rumorchoice]");
            setTimeout(function() {
            }, 50);
            if (rumorUserChoice[0].checked) {
                firstChoice.style.display = "inline";
                firstChoiceP.innerHTML = (`
                The cult of Zorthraxeth has a mysterious and dark past, mostly talked about in hushed rumors and scary bedtime tales made to keep kids inside at night. Some of those stories involve ritualistic sacrifice, which is why ${firstName} ${lastName} has decided to track the stories to an old keep nestled in the Stelcroft Mountains.
                <br><br>
                On their trek up the mountain pass, they come to a crevasse with a rickety old bridge spanning its depths. The bridge looks like it's been here for a century or more, with very little to do in the way of upkeep. But, looking around ${firstName} does not see any other viable way across.
                <br><br>
                ${firstName} begins crossing the bridge. About half-way across, their foot steps right through one of the slats as it cracks in half!
                <br><br>
                Roll the dice to see what happens.
                `);
                diceRoll.style.display = "inline";
                diceRoll.addEventListener("click", function () {
                    let userDice = rollTheDice();
                    diceResult.style.display = "inline";
                    let dicePNG = diceObject[userDice];
                    diceImageResult.innerHTML = dicePNG;
                    if (userDice < 4) {
                        lastChoice.style.display = "none";
                        return diceResultP.innerHTML =(`
                            ${firstName} reaches out to grab the next plank, but it isn't there and ${firstName} ${lastName} has met their end at the bottom of an icy canyon.
                        `);
                    } else {
                        diceResultP.innerHTML = (`
                        ${firstName}'s sure-footing catches the next plank and they are able to walk across the rest of the bridge safely. They make the rest of the climb through the mountains and reach the cult's castle.
                        <br><br>
                        ${firstName} ${lastName} approaches the large, wooden double doors of the keep. ${firstName} knocks forcefully on the door. Upon no response, they shove the heavy wooden door upon and their eyes greet a grizzly sight: the duke's daughter, Fromdulsia, suspended in the air above a large dias with the cultists of Zorthraxeth surrounding her!
                        <br><br>
                        ${firstName} has to decide how to approach the situation.
                        <br><br>
                        Do you choose to use diplomacy or force?
                        `);
                        lastChoice.style.display = "inline";
                        lastChoice.addEventListener("submit", function(event) {
                            event.preventDefault();
                            let userSelect = document.querySelectorAll("input[name=lastchoice]");

                            if (userSelect[0].checked) {
                                lastSelect.style.display = "inline";
                                lastResult.innerHTML = (`
                                ${firstName} ${lastName} shouts out toward the cultists. Each one of them turns their hooded head toward the hero, revealing blood-soaked mouths and daggers in their hands. ${firstName} shouts out again for a parley but the cultists rush forward and pounce upon the unprepared hero, who draws their last, ragged breath as knives pummel their body.
                                `);
                            } else if (userSelect[1].checked) {
                                lastSelect.style.display = "inline";
                                lastResult.innerHTML = (`
                                ${firstName} ${lastName} draws their sword and calls forth the flaming sphere of Shilenor! ${firstName}'s war cry startles the cultists, who draw their daggers, but the burst of fire catches many of them off-guard and they tumble away, aflame. The others meet their demise by the blade, as cultists do not typically wear any armor that would be able to parry the deft strikes of ${firstName}'s sword.
                                <br><br>
                                In no time, the cultists have all fallen, and ${firstName} ${lastName} is able to gather the limp body of fainted woman in their arms and make the difficult trek back down the mountain to Duke Ironfinger's castle.
                                `);
                            }
                        })
                    }
                    
                })
            } else if (rumorUserChoice[1].checked) {
                firstChoice.style.display = "inline";
                firstChoiceP.innerHTML = (`
                    For as long as the Avandon Coast has been home to humanfolk, there has stood a great stone tower overlooking the seas. From the ruins gathered around its base, it's clear there was once settlement around the tower itself, but no one alive today can recall, nor can it be found in written record, a town's name ever laying claim to the area.
                    <br><br>
                    Still, every moon or so, if a fisherman or traveler passes their eye in the tower's direction at just the right moment, they might catch glimpse of an old, weathered man, crooked over in his years, tending some garden around the tower's base or using some obtuse instrument on one of the tower's balconies.
                    <br><br>
                    ${firstName} ${lastName} believes this mysterious figure might have some information on the the duke's daughter's whereabouts, so they've set off to find the wizard and ask him some questions. On the way to the tower, ${firstName} finds out that the road has been closed off due to some recent troll troubles. Rather than risk the wrath of trolls, ${firstName} decides to climb the cliffs that the tower sits atop of.
                    <br><br>
                    ${firstName} begins climbing the cliffs. About half-way up, the rock ledge they had just grabbed onto crumbles away between their fingers!
                    <br><br>
                    Roll the dice to see what happens.
                `);
                diceRoll.style.display = "inline";
                diceRoll.addEventListener("click", function () {
                    let userDice = rollTheDice();
                    diceResult.style.display = "inline";
                    let dicePNG = diceObject[userDice];
                    diceImageResult.innerHTML = dicePNG;
                    if (userDice < 4) {
                        lastChoice.style.display = "none";
                        return diceResultP.innerHTML =(`
                        ${firstName} reaches back out to grab another outcropping, but there is nothing to be found, and ${firstName} ${lastName} has met their end at the bottom of a rocky sea shore.
                        `);
                    } else {
                        diceResultP.innerHTML = (`
                        ${firstName}'s quick wits pay off as their falling arm is able to pull a dagger out of their belt and slam it directly into the rock facing of the cliff, slowing them just enough to get a handhold and steady their fall. They make the rest of the climb without issue and reach the foot of the tower.
                        <br><br>
                        ${firstName} ${lastName} approaches the large wooden door of the old tower and finds it slightly ajar. They knock, and upon doing so the door creaks open. Inside there is a small anteroom with a winding staircase. Climbing up the stairs, what little daylight leaks through is gradually replaced with a garish, dancing green light. ${firstName} picks up their pace, and when they finally reach the source of the light it reveals the crooked frame of the old wizard, and behind him lays the duke's daughter, bound in metal shackles to a table with tubes and wires sticking out of her!
                        <br><br>
                        ${firstName} has to decide how to approach the situation.
                        <br><br>
                        Do you choose to use diplomacy or force?
                        `);
                        lastChoice.style.display = "inline";
                        lastChoice.addEventListener("submit", function(event) {
                            event.preventDefault();
                            let userSelect = document.querySelectorAll("input[name=lastchoice]");

                            if (userSelect[0].checked) {
                                lastSelect.style.display = "inline";
                                lastResult.innerHTML = (`
                                ${firstName} ${lastName} raises their hands up in surrender and clears their throat. The wizard, surprised, swings around and raises his staff, pointing its threatening, flame-emiting tip at ${firstName}, but stops just sort of emoliating the hero. ${firstName} begins by saying that the duke has set a great reward for finding his daughter, who happens to be the one atop the wizard's table, and that they would be glad to split the reward equally with the man. The wizard pauses. ${firstName} continues, saying they will not speak a word of any experiments or harm to the duke, but merely that the daughter be returned safely.
                                <br><br>
                                The wizard shakes his head, chuckling, and explains that Fromdulsia had come to him seeking treatment for an illness contracted while romancing an elf in the Horssay Marshes, and that she was so ashamed she didn't speak a word to her father. The wizard said the treatment would take another day or two and that he could go and find the hero, in town, to help escort Fromdulsia once she awakens and is ready to return home. ${firstName} ${lastName} breathes a sigh of relief and nods in agreement, thanks the wizard, and heads back down the stairs of the tower, ready to await the wizard's word.
                                `);
                            } else if (userSelect[1].checked) {
                                lastSelect.style.display = "inline";
                                lastResult.innerHTML = (`
                                ${firstName} ${lastName} draws their silvery longsword, the green flame's light dancing off of it in streaks. They raise it to charge at the old man when suddenly he stands straight and whips around, raising his staff. Suddenly, ${firstName}'s body is frozen stiff! The wizard cackles and raises his staff, and the green flame that was lighting the room begins to engulf ${firstName}'s body. As the temperature rises, they try to assuage the wizard from killing them outright, but the heat tears at their flesh and only screams come out. ${firstName} ${lastName} dies burning and screaming.
                                `);
                            }
                        })
                    }
                    
                })
            } else if (rumorUserChoice[2].checked) {

            }
        })
        }
    })


    let firstParag1 = document.getElementById("firstparag1");
    let rumorChoice = document.getElementById("rumors");
    let firstChoice = document.getElementById("firstchoice");
    let firstChoiceP = document.getElementById("firstchoicep");
    let firstChoiceImage = document.getElementById("firstchoiceimage");
    let diceRoll = document.getElementById("diceroll");
    let diceResult = document.getElementById("diceresult");
    let diceImageResult = document.getElementById("diceimage");
    let diceResultP = document.getElementById("diceresultp");
    let lastChoice = document.getElementById("lastchoice");
    let lastSelect = document.getElementById("lastselect");
    let lastResult = document.getElementById("lastresult");
    let footer = document.getElementById("footer");

    function rollTheDice() {
        return Math.ceil(Math.random()*6);
    }

    let diceObject = {
        1: "<img src='dice 1.png' height='150' width='150'>",
        2: "<img src='dice 2.png' height='150' width='150'>",
        3: "<img src='dice 3.png' height='150' width='150'>",
        4: "<img src='dice 4.png' height='150' width='150'>",
        5: "<img src='dice 5.png' height='150' width='150'>",
        6: "<img src='dice 6.png' height='150' width='150'>"
    };
})