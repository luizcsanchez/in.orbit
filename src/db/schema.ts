import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const goals = pgTable('goals', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  desiredWeeklyFrenquency: integer('disired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
