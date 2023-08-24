import { Schema,model } from 'mongoose';
import { IConversation } from '../types/models/IConversation';



const ConversationSchema: Schema = new Schema<IConversation>({
  userId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  prompt: { type: String, required: true },
  response: { type: String, required: false },
});


const ConversationModel= model<IConversation>('Conversation', ConversationSchema);

export default ConversationModel;