const state={turn:0,kobito:{x:1,y:1},holding:null,slots:{},currentInstruction:0,completed:false,failed:false,log:[]};
function createEmptySlots(stage){return Object.fromEntries(stage.slotNames.map(slot=>[slot,null]))}
function reset(){const stage=currentStage();state.turn=0;state.kobito={...stage.start};state.holding=null;state.slots=createEmptySlots(stage);state.currentInstruction=0;state.completed=false;state.failed=false;state.log=[`0T：${stage.name}開始．倉庫へ移動して最初の材料を取ろう．`];render()}
function selectStage(index){currentStageIndex=index;reset()}
function holdingLabel(){return state.holding?`${itemIcon[state.holding]??""} ${state.holding}`:"なし"}
function slotLabel(slot){const item=state.slots[slot];return item?`${itemIcon[item]??""} ${item}`:"空"}
function addLog(text){state.log.unshift(`${state.turn}T：${text}`)}
function tick(text){state.turn++;addLog(text);checkFailure();render()}
function reject(text){state.log.unshift(`×：${text}`);render()}
