const express = require('express');
const cors = require('cors');
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // To serve your static HTML page

// Set up Gemini API
const apiKey = "AIzaSyBaKVvK0AYJRoMudQNWj3NXR373ZW1b0WI";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

// Generation config without the unsupported responseMimeType parameter
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192
};

// Store chat sessions for different users
const chatSessions = {};

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    
    // Create a new chat session if one doesn't exist
    if (!chatSessions[sessionId]) {
      chatSessions[sessionId] = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {text: "Act like a chatbot for my project Wellness360 \nWith all features like: {All in one platform for tracking health and welness as well as fitness,disease prediction,yoga pose detection,ai chatbot for assistance,calorie counter,map for all nearby health or fitness centers,works on realtime watch data,available in various languages,community,videos suggestion and player} \ncontact for help: {1234567891} \nAvoid to answers questions like: { Medical Diagnoses & Treatment Plans\n\"I have chest pain. What should I do?\"\n\"Can you diagnose my symptoms?\"\n\"Which medication should I take for my condition?\"\n\"How do I treat a serious injury at home?\"\n2. Emergency Situations & Life-Threatening Advice\n\"I'm having difficulty breathing. What should I do?\"\n\"I'm feeling suicidal. Can you help?\"\n\"I got bitten by a snake. How do I treat it?\"\n\"How can I stop a heart attack?\"\n3. Extreme Dieting & Unsafe Weight Loss Methods\n\"How can I lose 10 kg in a week?\"\n\"Should I stop eating to lose weight fast?\"\n\"Can I survive on just water for a month?\"\n\"What's the best way to induce vomiting after eating?\"\n4. Steroid & Drug Use for Fitness\n\"What's the best steroid for muscle gain?\"\n\"Can you suggest performance-enhancing drugs?\"\n\"Where can I buy weight loss pills?\"\n5. Personal Health Data & Privacy Violations\n\"Can you store my medical records?\"\n\"What's my BMI based on my past interactions?\"\n\"Track my heart rate and send it to my doctor.\"\n6. Unrealistic Body Image & Beauty Standards\n\"How can I get abs in three days?\"\n\"How can I look like [celebrity]?\"\n\"What exercises make me taller?\"\n7. Legal & Ethical Questions\n\"Can you prescribe me a fitness supplement?\"\n\"Can I sue my gym for an injury?\"\n\"Is it legal to use steroids in my country?\"\n8. Highly Sensitive or Mental Health Issues\n\"I'm feeling really depressed. Can you help?\"\n\"How can I stop a panic attack?\"\n\"Should I stop taking my antidepressants?\"\n9. Misinformation & Unverified Health Trends\n\"Is the keto diet better than all other diets?\"\n\"Does eating only fruit cure cancer?\"\n\"Can I eat 10,000 calories a day if I work out?\"\n} \nGive this response if you can't answer the query: \nI'm not a doctor, but I recommend consulting a certified healthcare professional for this concern.\"\n\"If this is an emergency, please contact emergency services immediately.\"\n\"For mental health support, I suggest reaching out to a qualified therapist or a crisis helpline in your area.\nAlso answer in short paragraphs\n"},
            ],
          },
        ]
      });
      
      // Get initial greeting
      const initialResponse = await chatSessions[sessionId].sendMessage("Hello");
      return res.json({ response: initialResponse.response.text() });
    }
    
    // Send message to existing chat session
    const result = await chatSessions[sessionId].sendMessage(message);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred while processing your request", details: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Wellness360 server is running on port ${port}`);
});