import './App.css';
import Grid from './components/Grid';
import { useRef, useState } from 'react';

const   GAME = [
  9,29,50,70,89,109,129,130,131,112,113,114,115,136,156,176,175,
  154,173,194,197,217,237,257,278,298,318,338,357,376,375,374,353,332,312,292,272,
  251,250,249,248,247,266,286,306,326,345,364,363,362,341,320,300,280,260,241,221,201,
  181,162,163,164,165,184,144,142,122,103,104,105,106,127,128,168,170
]


const WEB = [
  5,25,45,65,85,105,125,145,165,185,205,225,245,265,285,266,247,228,249,269,290,310,
  331,351,372,373,354,334,314,313,293,272,252,231,211,212,213,214,215,194,173,152,131,110,89,68,47,26
]

const MOB = [45,46,47,48,49,50,51,52,53,74,94,114,134,154,174,194,214,234,254,274,
  294,314,334,353,352,351,350,349,348,347,346,345,324,304,284,264,244,224,204,184,164,144,124,104,84,64,87,88,89,90,91,289]


const DESIGN = [300,320,340,360,380,381,382,383,384,361,341,362,301,281,301,323,344,365,346,327,308,289,
  270,251,232,213,194,175,156,137,118,99,79,58,38,37,16,15,34,53,72,91,110,129,148,167,186,205,224,243,262,165,144,123,102,81,
  61,42,22,23,24,45,66,87,108,234,255,256,277,278,298,318,317,316,336,337,338,355,356,357,358,375,376,377,378,394,395,396,397,398,399,352,332,312,291,293,274,302,373,
  304,285,266,247,228,209,190,171,152,133,114,95,74,116
]

const BLOCKCHAIN = [48, 49, 50, 71, 92, 112, 132, 152, 171, 190, 189, 188, 167, 146, 126, 106, 86, 67, 88, 90, 109, 129,
   149, 169, 153, 174, 195, 215, 235, 236, 257, 278, 298, 318, 338, 357, 376, 375, 374, 353,332, 312, 292, 272, 253, 234, 274, 276, 295, 315, 335, 355, 371, 390, 
  389, 368, 347, 327, 307, 267, 246, 225, 224, 223, 242, 261, 281, 301, 321, 342, 363, 364, 346, 344, 324, 304, 284, 263, 265, 204, 184, 165,352,287,365,166]
function App() {

  const handleIndexesChange = (indexes) => {
    setSelectedIndexes(indexes)
  }


  const [selectedIndexes,setSelectedIndexes]  = useState([]);
  return (
    <div className="App">
      <Grid indexes={selectedIndexes}speed = {20}/>
      <button onClick={() => handleIndexesChange([])}>Empty</button>
      <button onClick={() => handleIndexesChange(MOB)}>Mobile</button>
      <button onClick={() => handleIndexesChange(WEB)}>WEB</button>
      <button onClick={() => handleIndexesChange(BLOCKCHAIN)}>BLOCKCHAIN</button>
      <button onClick={() => handleIndexesChange(DESIGN)}>Design</button>
      <button onClick={() => handleIndexesChange(GAME)}>GAME</button>
    </div>
  );
}

export default App;
