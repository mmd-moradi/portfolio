CREATE SCHEMA "visitors";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "visitors"."visitors" (
	"id" serial PRIMARY KEY NOT NULL,
	"country" text NOT NULL,
	"city" text NOT NULL,
	"visited_at" timestamp with time zone DEFAULT now() NOT NULL
);
