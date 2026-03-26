# Posts By Date (Test Plugin)

Simple WordPress test plugin to display posts by date range using a shortcode.

## Features
- Shortcode output of posts
- Date range filtering (`from` / `to`)
- Card layout with image, date, and title
- Popup with post details
- SCSS + Webpack build

## Usage

Use shortcode in any page/post:

```text
[taxonomy_by_date]
```

With date range:

```text
[taxonomy_by_date from="2024-01-01" to="2024-12-31"]
```

## Setup

```bash
npm install
npm run build
```