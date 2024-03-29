
//想添加到哪个位置，第一个就填哪个模块的ID名称。
//后面就是你要插入的widget名。可以同时添加多个。
//用obj表格模式写的话，能指定在某个特定passage里显示。passage也能同时指定多个。

//just put the zoneID(see the widget copy.twee at temp folder) to the first,
//then put your widget name or widget setting to next argument.
//also you can add a lot at once.

//simpleFrameworks.addto('iModHeader', 'aSimpleTest')
simpleFrameworks.addto('ModMenuSmall', 'BridgeButton')
simpleFrameworks.addto('BeforeLinkZone', {
    passage: 'Temple Cloister',
    widget: 'LearnKamiMagic',
});
simpleFrameworks.addto('iModHeader', {
    passage: 'Orphanage',
    widget: 'touchpaint',
});
simpleFrameworks.addto('BeforeLinkZone', {
    passage: 'Orphanage',
    widget: 'RealWorldPaint',
});
simpleFrameworks.addto('iModCheats', 'KamiMaigcLearnCheat');
simpleFrameworks.addto('iModHeader', 'KamiMaigcChant');
simpleFrameworks.addto('iModHeader', 'amuleteffect');
simpleFrameworks.addto('iModReady', 'InvisableStart');
simpleFrameworks.addto('iModFooter', 'InvisableComplete');
simpleFrameworks.addto('iModFooter', 'KamiMaigc'); 
simpleFrameworks.addto('ModStatusBar', 'GraceBar')
simpleFrameworks.addto('ModCharaDescription', 'KamiMagicRecord')
simpleFrameworks.addto('ModCharaDescription', 'amuletstatus')
//Var
//KaMi
Object.defineProperty(window, 'KamiMagicCleanChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicCleanLearned', { value: true } )
Object.defineProperty(window, 'RainBowBridgeChant', { value: 0 } )
Object.defineProperty(window, 'RainBowBridgeLearned', { value: true } )
Object.defineProperty(window, 'KamiMagicHopeChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicHopeLearned', { value: true } )
Object.defineProperty(window, 'KamiMagicHelpChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicHelpLearned', { value: true } )
Object.defineProperty(window, 'KamiMagicHealthChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicHealthLearned', { value: true } )
Object.defineProperty(window, 'KamiMagicLockChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicLockLearned', { value: true } )
Object.defineProperty(window, 'KamiMagicLockValue', { value: 0 } )
Object.defineProperty(window, 'KamiMagicLockActive', { value: false } )
Object.defineProperty(window, 'KamiMagicLockTimer', { value: 0 } )
Object.defineProperty(window, 'KamiMagicLockTimerLocale', { value: 0 } )
Object.defineProperty(window, 'KamiMagicInvisableChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicInvisableLearned', { value: true } )
Object.defineProperty(window, 'KamiMagicInvisableValue', { value: 0 } )
Object.defineProperty(window, 'KamiMagicInvisableActive', { value: false } )
Object.defineProperty(window, 'KamiMagicInvisableTimer', { value: 0 } )
Object.defineProperty(window, 'KamiMagicInvisableTimerLocale', { value: 0 } )
Object.defineProperty(window, 'KamiMagicJudgeChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicJudgeLearned', { value: true } )
Object.defineProperty(window, 'KamiMagicPurgeChant', { value: 0 } )
Object.defineProperty(window, 'KamiMagicPurgeLearned', { value: true } )
//Trigger
Object.defineProperty(window, 'canUseKamiMagic', { value: false } )
Object.defineProperty(window, 'haveKamiMagic', { value: false } )
Object.defineProperty(window, 'KamiMagicUseGrace', { value: true } )
Object.defineProperty(window, 'ShowKamiMagicMenu', { value: false } )
Object.defineProperty(window, 'KamiMagicDebug', { value: true } )
Object.defineProperty(window, 'ShowButton', { value: 0 } )
//联动
Object.defineProperty(window, 'KamiMagicCconfig_bjxLinkage', { value: false } )
Object.defineProperty(window, 'KamiMagicCconfig_icrLinkage', { value: false } )
//GoldenYard
Object.defineProperty(window, 'GoldenYardMusicPlay', { value: false } )
Object.defineProperty(window, 'GoldenYardMusicIndex', { value: 0 } )
Object.defineProperty(window, 'GoldenSkilTrain', { value: 0 } )
//PaintWorld
Object.defineProperty(window, 'PaintWorldOpenEvent', { value: false } )
Object.defineProperty(window, 'PaintWorldTouchPaint', { value: false } )
Object.defineProperty(window, 'PaintWorldAmuletLost', { value: false } )
Object.defineProperty(window, 'PaintWorldAmuletStatus', { value: false } )
Object.defineProperty(window, 'PaintWorldAmuletActive', { value: false } )
//Button
simpleFrameworks.addto('iModOptions', 'KamiMagicConfig')
simpleFrameworks.addto('iModOptions', 'RButtonShow')
simpleFrameworks.addto('iModOptions', 'KamiMagicGrace')
simpleFrameworks.addto('iModOptions', 'LearnAllKamiMagic')
//simpleFrameworks.addto('ModCaptionDescription', 'TestCaption')
//simpleFrameworks.addto('ModCaptionAfterDescription', 'TestCaptionAfter')
//simpleFrameworks.addto('iModReady', 'newMoney')
/*
simpleFrameworks.addto('iModFooter', {
    passage:'Start', //set what passage your widget will show up
    widget: 'aSimpleTest',
})


simpleFrameworks.addto('iModFooter', {
    passage:['Start', 'Home'], //this can be array, then your widget only show up at certain passage
    widget: 'aSimpleTest',
})

//also can add a lot at once
simpleFrameworks.addto('iModFooter', {passage:'Start', widget: 'aSimpleTest'}, {passage:'Start', widget: 'aSimpleTest'},{passage:'Start', widget: 'aSimpleTest'},{passage:'Start', widget: 'aSimpleTest'},{passage:'Start', widget: 'aSimpleTest'},)*/

/**
 
'Furniture Shop Papers':[
	{
		src:'<<set _normalisedName to Util.escape(_chosenWallpaperCustom).replace(/\[/g, "&#91;").replace(/\]/g, "&#93;")>>',
		to:'<<set _normalisedName to _chosenWallpaperCustom>>'
	}
],
  
 */