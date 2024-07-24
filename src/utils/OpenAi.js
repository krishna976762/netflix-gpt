import OpenAI from 'openai';
import { OPENAPI } from './Constants';

const openai = new OpenAI({
  apiKey: OPENAPI, 
  dangerouslyAllowBrowser:true
}); 

export default openai