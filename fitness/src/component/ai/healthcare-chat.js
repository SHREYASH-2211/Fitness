// This file should be placed in your API routes directory
// For example: /api/healthcare-chat.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" })
    }
  
    try {
      const { message, sessionId, chatHistory } = req.body
  
      // Here you would typically call an AI service like OpenAI
      // For this example, we'll create a simulated response
      const response = await generateHealthcareResponse(message, chatHistory)
  
      // Log interaction for analytics (optional)
      console.log(`Session ${sessionId}: Q: ${message} A: ${response.substring(0, 50)}...`)
  
      return res.status(200).json({ response })
    } catch (error) {
      console.error("Error processing healthcare chat:", error)
      return res.status(500).json({
        error: "Failed to process request",
        message: error.message,
      })
    }
  }
  
  // Simulated AI response generator
  // In a real implementation, you would replace this with a call to an AI service
  async function generateHealthcareResponse(message, chatHistory) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  
    const lowercaseMessage = message.toLowerCase()
  
    // Simple keyword-based responses
    if (lowercaseMessage.includes("sleep") || lowercaseMessage.includes("insomnia")) {
      return "Improving sleep quality is essential for overall health. Try establishing a regular sleep schedule, creating a relaxing bedtime routine, limiting screen time before bed, and ensuring your bedroom is cool, dark, and quiet. If you're consistently having trouble sleeping, consider speaking with a healthcare provider as it could be related to underlying conditions."
    }
  
    if (lowercaseMessage.includes("stress") || lowercaseMessage.includes("anxiety")) {
      return "For quick stress relief, try deep breathing exercises: breathe in slowly for 4 counts, hold for 2, and exhale for 6. Other effective techniques include progressive muscle relaxation, mindfulness meditation, and physical activity. Even a short 10-minute walk can significantly reduce stress levels. Remember that chronic stress may require professional support."
    }
  
    if (
      lowercaseMessage.includes("diet") ||
      lowercaseMessage.includes("nutrition") ||
      lowercaseMessage.includes("meal")
    ) {
      return "A balanced meal plan should include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Try to fill half your plate with vegetables, a quarter with lean protein, and a quarter with whole grains. Stay hydrated by drinking plenty of water throughout the day. Consider consulting with a registered dietitian for personalized nutrition advice based on your specific health needs and goals."
    }
  
    if (lowercaseMessage.includes("exercise") || lowercaseMessage.includes("workout")) {
      return "The CDC recommends adults get at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity each week, plus muscle-strengthening activities on 2 or more days per week. This could be broken down into 30 minutes of activity 5 days a week. Remember that any movement is better than none, so start where you are and gradually increase intensity and duration."
    }
  
    if (lowercaseMessage.includes("meditation") || lowercaseMessage.includes("mindfulness")) {
      return "Meditation can be a powerful tool for mental wellness. To get started, find a quiet space, sit comfortably, and focus on your breath for just 5 minutes. When your mind wanders (which is normal), gently bring your attention back to your breathing. Apps like Headspace, Calm, or Insight Timer offer guided meditations for beginners. Consistency is key – even a few minutes daily can make a difference."
    }
  
    if (lowercaseMessage.includes("water") || lowercaseMessage.includes("hydration")) {
      return "Proper hydration is crucial for overall health. While individual needs vary, a general guideline is to drink about 8 cups (64 ounces) of water daily. Your needs may increase with exercise, hot weather, or certain health conditions. A good indicator of hydration is the color of your urine – it should be pale yellow. Try carrying a reusable water bottle and setting reminders to drink throughout the day."
    }
  
    // Default response for other health topics
    return "Thank you for your question about health and wellness. A balanced approach to wellness includes proper nutrition, regular physical activity, adequate sleep, stress management, and preventive healthcare. Would you like more specific information about any of these areas? I'm here to support your wellness journey with evidence-based guidance."
  }
  
  