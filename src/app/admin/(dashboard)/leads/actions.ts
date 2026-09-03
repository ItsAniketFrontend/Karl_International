"use server";

import { writeClient } from "@/sanity/write-client";

export type LeadDoc = {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  age?: string;
  qualification?: string;
  degree?: string;
  destination?: string;
  intake?: string;
  score?: string;
  message?: string;
  source?: string;
  submittedAt?: string;
};

export async function listLeads(): Promise<LeadDoc[]> {
  return writeClient.fetch(
    `*[_type == "lead"] | order(submittedAt desc){
      _id, name, email, phone, city, age, qualification, degree,
      destination, intake, score, message, source, submittedAt
    }`,
  );
}
