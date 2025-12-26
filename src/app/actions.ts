"use server";

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(data: z.infer<typeof formSchema>): Promise<{ success: boolean; error?: string }> {
  try {
    const parsedData = formSchema.safeParse(data);
    if (!parsedData.success) {
      return { success: false, error: "Invalid data provided." };
    }
    
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it to the server console.
    console.log("New contact form submission:", parsedData.data);
    
    // Simulate network delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
