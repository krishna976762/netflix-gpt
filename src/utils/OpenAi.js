import OpenAI from 'openai';
import { OPENAPI } from './Constants';

const openai = new OpenAI({
  apiKey: "AIzaSyBVlBVccyRbtWVz5z5DLpFjQMzu4gAW1b8", 
  dangerouslyAllowBrowser:true
}); 

export default openai