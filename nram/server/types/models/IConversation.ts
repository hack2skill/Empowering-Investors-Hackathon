export interface IConversation extends Document {
  userId: string;
  timestamp: Date;
  prompt: string;
  response: string;
}