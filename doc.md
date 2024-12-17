Documentation: Data Structure and Usage

This document provides an overview of the data structure used in the application and outlines how to manage the process, starting from an Excel file to the final JSON data used in the application.

Data Structure Overview

The data structure is hierarchical, with categories as the primary nodes, each containing optional children. Every node can include various attributes such as titles, slugs, icons, videos, and quotes.

Category Structure

{
  "title": "Category Title",
  "slug": "category-slug",
  "order": 1,
  "icons": ["icon1", "icon2"],
  "video": "video-link",
  "quote": [
    {
      "author": "Author Name",
      "content": "Quote content",
      "slug": "quote-slug"
    }
  ],
  "childrens": [
    {
      "title": "Subcategory Title",
      "slug": "subcategory-slug",
      "order": "a",
      "icons": ["icon1", "icon2"]
    }
  ]
}

Example

{
  "title": "Les nouveautés",
  "slug": "les-nouveautes",
  "order": 1,
  "icons": ["test", "test2"],
  "childrens": [
    {
      "title": "Les nouvelles émissions",
      "slug": "nouvelle-emissions",
      "order": "a"
    },
    {
      "title": "Les séries",
      "slug": "les-series",
      "order": "b"
    }
  ]
}

Process Overview

Step 1: Prepare the Excel File
	•	The Excel file should contain columns for each attribute in the structure (e.g., title, slug, order, icons, categorie, etc.).
	•	Columns for array attributes (e.g., icons, channels, presenters) should use a comma-separated format.

Step 2: Convert Excel to CSV
	1.	Save the Excel file as a CSV file.
	2.	Ensure proper encoding (e.g., UTF-8 or latin1) to avoid character corruption.

Step 3: Process the CSV File

Use the provided Node.js script to convert the CSV data into JSON format. The script reads the CSV, processes rows, and creates a hierarchical JSON structure.

CSV Processing Script

The script performs the following:
	•	Reads a CSV file.
	•	Splits comma-separated values into arrays.
	•	Filters out empty rows or fields.
	•	Converts the data into the JSON format required by the application.

Running the Script
	1.	Place the CSV file in the ./data/ folder.
	2.	Run the script:

node script.js


	3.	The resulting JSON file will be saved in ../src/data/shows.json.

Usage in the Application

Category Rendering

The categories are rendered using a combination of Astro components and SCSS for styling.
	1.	Category List Component
	•	Displays a list of categories and their children.
	•	Each category links to its detailed section.
	2.	Category Detail Component
	•	Renders the category title, description, and its shows (or children).
	•	Dynamically handles child categories.
	3.	Astro Integration

import categories from "../../data/categories.json";

<ul class="c-category-listing">
  {categories.map((category) => (
    <Category {category} />
  ))}
</ul>



Show Rendering

Shows are listed under their respective categories. A dynamic utility function fetches shows based on category slugs.

const shows = getShowsByCategory(category.slug);

Styling

SCSS is used to ensure a responsive and visually appealing layout. Key components include:
	•	Category Listing (c-category-listing)
	•	Show Cards (c-show-list)

Best Practices
	1.	Data Validation
	•	Ensure the CSV has no missing or malformed data.
	•	Validate required fields (title, slug, etc.).
	2.	Hierarchical Structure
	•	Maintain a clear hierarchy by defining child categories (childrens) appropriately.
	3.	Testing
	•	Test the JSON output in a development environment before deploying.
	4.	Dynamic Updates
	•	Use the provided script for any updates to ensure consistency.

For further details, refer to the code snippets included in this documentation or the project repository. If you have questions or encounter issues, feel free to reach out!