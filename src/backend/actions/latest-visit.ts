"use server";

import { desc } from "drizzle-orm";
import { db } from "../db";
import { visitorsTable } from "../db/schema";


export type CreateVisitorDTO = {
  country: string;
  city: string;
}

export const createVisitor = async (command: CreateVisitorDTO) => {
  const [ visitor ] = await db
  .insert(visitorsTable)
  .values(command)
  .returning()

  return visitor
}

export const getLatestVisitor = async () => {
  const [ visitor ] = await db
  .select()
  .from(visitorsTable)
  .orderBy(desc(visitorsTable.visitedAt))
  .limit(1)
  
  return visitor
}