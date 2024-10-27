import { sql } from "drizzle-orm";
import { pgSchema, serial, text, timestamp } from "drizzle-orm/pg-core";


export const visitorsSchema = pgSchema("visitors")

export const visitorsTable = visitorsSchema.table("visitors", {
  id: serial("id").primaryKey(),
  country: text("country").notNull(),
  city: text("city").notNull(),
  visitedAt: timestamp("visited_at", { mode: "date", withTimezone: true })
  .notNull()
  .default(sql`now()`),
})

export type VisitorTable = typeof visitorsTable.$inferSelect;