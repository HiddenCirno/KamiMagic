NamedNPC.add(
    new NamedNPC(
        'Firede',    // NPC name, also is their ID name
        ['Firede', '弃信者'],  // NPC title, should be an array for language support. also you can just write ['English', 'English]
        ['Firede', '芙莉德'], // NPC name for display.
        'human'  // NPC type, or races
    ).Init('f', 'adult') 
);

let myNpcSetting = {
    Firede : // this must be same as their ID name
     {
     	love : { maxValue : 100  }, // set max value of love
     }
};


// then assign it
Object.assign(setup.ModNpcSetting, myNpcSetting);