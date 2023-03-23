# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Jest is fine for this project. I would only change to more specific tests suits if necessary and advantageous (i.e.: Vitest for client side using Vite as part of the toolchain).

I’m including prettier as a quick and proven styling guide. This is a good default and I’m keeping the default configuration at .prettierrc.json. It is a good starting point to achieve a clean codebase and we can configure differently or use something else later on if the benefits are worth the change.

I’m choosing pnpm as the package manager for now. Its speed and lower disk usage are just too big of a benefit over npm and yarn right now and it shows not only as better and faster developer experience, but also as quicker build time at CI/CD environments.

As Javascript changes over the years, it’s important to specify properly the target runtimes both for client and server sides. I’m defaulting to the current major LTS version. The new .nvmrc reflects that change. We can get more specific with the semantic versioning, but 18 should be a great and modern start. I’m also making EcmaScript Modules available via environment flags since in a real world project that would be achieved in a way that mostly benefits the project.

Git is initialized at the repository to allow Jest in watch mode and share the code. The package script jest:watch is now available as well.
