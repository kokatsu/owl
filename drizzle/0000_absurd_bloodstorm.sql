CREATE TABLE `directories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text DEFAULT 'f61036daae4b775f263f39444e4419fb' NOT NULL,
	`path` text DEFAULT '' NOT NULL,
	`used_count` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT (CURRENT_DATE) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_DATE) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `directories_name_unique` ON `directories` (`name`);